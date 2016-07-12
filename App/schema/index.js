import Realm from 'realm';
const SCHEMA_VERSION = 0;

class User {}
User.schema = {
  name: 'User',
  primaryKey: 'id',
  properties: {
    id: 'int',
    email: 'string',
    token: 'string',
  },
}


class Sequence {
  static save(schema, props) {
    let saved;

    realm.write(() => {
      let obj = {...props};
      console.log('class Sequence save fn request obj: ', obj);

      if (obj.id === undefined) {
        let seq = realm.objects('Sequence').filtered(`name = "${schema}"`)[0];
        if (seq === undefined) {
          seq = realm.create('Sequence', { name: schema, value: 0 });
        }
        obj.id = seq.next();
      }
      saved = realm.create(schema, obj, true);
    })

    return {...saved};
  }

  next() {
    this.value = this.value+1;
    return this.value;
  }
}

Sequence.schema = {
  name: 'Sequence',
  primaryKey: 'name',
  properties: {
    name:  'string',
    value: 'int',
  }
}

const realm = new Realm({
  schema: [User, Sequence],
  schemaVersion: SCHEMA_VERSION
})

export { realm, Sequence };
