import { StyleSheet } from "react-native"

export default StyleSheet.create({
    tabIcon: {
        width: 30,
        height: 30
    },
    
    tabLabel: {
        fontSize: 30
    },

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
        maxWidth: 200,
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
        textAlignVertical: "top"
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
        marginTop: 15,
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
    }
})