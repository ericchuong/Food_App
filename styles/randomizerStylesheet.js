import { StyleSheet } from "react-native";
import Constants from "../Constants";

export default StyleSheet.create({  
    inLineView: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10
    },

    smallInfoIcon: {
        width: 20,
        height: 20,
        tintColor: "gray",
        marginLeft: 10,
        marginRight: 10,
    },

    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Constants.DEFAULT_BLUE,
        width: 150,
        height: 150,
        borderRadius: 75,
        top: '50%',
    },

    buttonText: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'white'
    },

    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        width: '75%',
        height: '60%',
        alignItems: 'center',
        shadowColor: 'gray',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 1,
        shadowRadius: 100,
        elevation: 5,
    },

    modalImage: {
        width: 150,
        height: 150,
        borderWidth: 1,
        borderColor: "black",
        backgroundColor: "lightgray",
    },

    modalNameText: {
        fontSize: 40,
        fontWeight: 'bold',
        marginTop: 10,
        textAlign: 'center'
    },

    modalDescriptionText: {
        fontSize: 16,
        marginTop: 10,
        textAlign: 'left',
    },

    mainNameText: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
    }
})