import { StyleSheet } from "react-native";
import Constants from "../Constants";

export default StyleSheet.create({  
    addScreen: {
        marginTop: 35,
        marginBottom: 25,
        marginLeft: 25,
        marginRight: 25,
    },

    formButtons: {
        textAlign: "center"
    },

    nameTEW: {
        minWidth: 100,
        maxWidth: 225,
        height: 30,
        flexGrow: 1,
        borderColor: "black",
        borderWidth: 1,
        backgroundColor: "white",
        textAlign: "center"
    },

    descriptionTEW: {
        minWidth: 100,
        width: "100%",
        minHeight: 125,
        flexGrow: 1,
        borderColor: "black",
        borderWidth: 1,
        backgroundColor: "white",
        padding: 10,
        textAlignVertical: "top",
        marginTop: 5
    },

    inLineView: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10
    },

    checkbox: {
        width: 20,
        height: 20,
    },

    checkboxArea: {
        marginTop: 5,
    },

    checkboxGrid: {
        flexDirection: "row",
        flexWrap: "wrap",
    },

    checkboxItem: {
        width: "50%",
        marginBottom: 15
    },

    boldedFont: {
        fontSize: 16,
        fontWeight: "bold",
    },

    regularFont: {
        fontSize: 16
    },

    smallInfoIcon: {
        width: 20,
        height: 20,
        tintColor: "gray",
        marginLeft: 10,
        marginRight: 10,
    },

    charactersLeft: {
        fontSize: 12,
        color: "gray",
        textAlign: "right",
        paddingTop: 5
    },

    inLineButtons: {
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "flex-end"
    },

    clearButton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 8,
        paddingHorizontal: 5,
        width: 100,
        marginRight: 10,
        borderRadius: 15
    },

    clearText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: Constants.DEFAULT_BLUE
    },

    submitButton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 8,
        paddingHorizontal: 5,
        backgroundColor: Constants.DEFAULT_BLUE,
        width: 100,
        borderRadius: 15
    },

    submitText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white'
    },
})