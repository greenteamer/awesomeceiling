import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  page: {
    flex: 1,
  },
  indicatorContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: 10,
    marginTop: -15,
  },
  indicatorCurrent: {
    backgroundColor: 'transparent',
    color: '#575757',
    fontSize: 20,
    marginRight: 2,
    marginLeft: 2,
  },
  indicator: {
    backgroundColor: 'transparent',
    color: '#bebebe',
    fontSize: 20,
    marginRight: 2,
    marginLeft: 2,
  },
});

export default styles;
