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
})