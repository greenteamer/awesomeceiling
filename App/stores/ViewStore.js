import { reaction, observable, observe, computed, autorun } from 'mobx';
import autobind from 'autobind-decorator';
import singleton from 'singleton';


@autobind
class ViewStore extends singleton {

	constructor() {
	  super();
	}

}


export default ViewStore.get();
