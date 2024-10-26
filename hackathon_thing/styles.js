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
});

export default styles;