import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  camera : {
    flex : 1    
  },
  cameraButton : {
    position : 'absolute',
    bottom : 20,
    width : 100,
    height : 100,
    borderRadius : 50,
    backgroundColor : 'blue',
    justifyContent : 'center',
    alignItems : 'center'
  },
  horScrollView: {
    flexDirection: 'row',
  },
  image: {
    width: 200,
    height : "auto",
    marginHorizontal: 10,
    borderRadius: 10,
  },
  titleText : {
    fontSize : 20,
    fontWeight : 'bold',
    margin : 15,
    marginBottom : 0
  },
  chatBotText : {
    fontSize : 20,
    fontWeight : 'bold',
    margin : 15,
    marginBottom : 0,
    alignItems : 'left',
    justifyContent : 'left'
  }
});

export default styles;