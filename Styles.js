import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    input : {
      borderBottomWidth: 1,
      borderBottomColor: '#777',
      paddingLeft: 80,
      paddingRight: 80,
      paddingTop: 10,
      paddingBottom: 10,
      marginBottom: 15
    },
    logo : {
      marginTop: 100,
      marginBottom: 50,
      width: 225,
      height: 122
    },
    text : {
      marginTop: 15,
    },
    button : {
      marginTop: 90,
      color: "#fff",
      padding: 20,
      width : width,
      position: 'absolute',
      bottom:0,
      backgroundColor: "#0C154A",
    },
    buttonText : {
        color: "#fff",
        alignSelf: "center",
        fontSize: 20
    },
    emitext : {
        color: "#0C154A",
        fontWeight: "bold",
        fontSize: 20,
        marginTop: 70
    }
  
  });