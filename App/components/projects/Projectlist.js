import React, { Component } from 'react';
import {
  PropTypes,
  View,
  Text,
  ScrollView,
  ListView,
  StyleSheet
} from 'react-native';
import Project from './Project.js';
import {Actions} from 'react-native-router-flux';


export default class Projectlist extends Component {
  render(){
    const { style, projects, clearButton } = this.props;
    if (projects.length === 0) {
      return null;
    }
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    let items = (projects) ? projects : null;
    let dataSource =  ds.cloneWithRows(items);
    return(
      <View>
        <ListView
          style={[
            styles.listView,
            (style) ? style : null,
          ]}
          dataSource={dataSource}
          renderRow={this._renderRow.bind(this)}
          renderSeparator={(sectionID, rowID) => <View key={`${sectionID}-${rowID}`} style={styles.separator} />}
        />
        { (clearButton) ? clearButton : null }
      </View>
    )
  }

  _renderRow(rowData: string, sectionID: number, rowID: number) {

    return (
      <Project
        onProjectPress={ () => Actions.projectDetail({project: rowData})}
        project={rowData}
        rowID={rowID}/>
    );
  }
}


var styles = StyleSheet.create({
  listView: {
    flex: 1,
    // marginTop: -20
  },
  firstRow: {
    // marginTop: -20,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#fff',
  },
  separator: {
    height: 1,
    backgroundColor: '#CCCCCC',
  },
  thumb: {
    width: 64,
    height: 64,
  },
  text: {
    flex: 1,
  },
});
