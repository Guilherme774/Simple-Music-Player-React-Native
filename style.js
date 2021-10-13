import { StyleSheet } from 'react-native'

export const style = StyleSheet.create({
    container: {
    },
    imgHeader: {
        width: '100%',
        height: 110,
        resizeMode: 'cover',
        alignItems: 'center',

    },
    textHeader: {
        color: '#fff',
        marginTop: 20,
        fontSize: 20,
    },
    overview: {
        width: '100%',
        height: 110,
        backgroundColor: 'rgba(0, 0, 0, 0.35)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    tarefaSingle: {
        marginTop: 30,
        width: '90%',
        borderBottomWidth: 1,
        borderBottomColor: '#B2B2B2',
        flexDirection: 'row',
        paddingBottom: 10,
        alignSelf: 'center',
    },
    del: {
        position: 'absolute',
        right: 10
    },
    //Modal style
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:'rgba(0,0,0,0.3)'
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        zIndex:5
      },
      openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 13,
        elevation: 2
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      },
      btnAdd:{
        width: '80%',
        height: 50,
        borderRadius: 15,
        backgroundColor: '#5687F7',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 25,
      },
      addText: {
        color: '#fff',
        fontSize: 29
      }
  });