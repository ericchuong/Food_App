import { StyleSheet } from "react-native";
import Constants from "../Constants";

export default StyleSheet.create({  
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        width: 393
    },

    defaultView: {
        height: '75%',
        width: 280,
        backgroundColor: 'white',
        margin: 20,
        marginLeft: 60,
        padding: 35,
        alignItems: 'center',
        borderRadius: 20,
        shadowColor: 'gray',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 1,
        shadowRadius: 2,
        elevation: 5,
    },

    image: {
        width: 150,
        height: 150,
        borderWidth: 1,
        borderColor: "black",
        backgroundColor: "lightgray",
    },

    nameText: {
        fontSize: 40,
        fontWeight: 'bold',
        marginTop: 10,
        textAlign: 'center'
    },

    descriptionText: {
        fontSize: 16,
        marginTop: 10,
        textAlign: 'left',
    },
})