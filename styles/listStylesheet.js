import { StyleSheet } from "react-native";
import Constants from "../Constants";

export default StyleSheet.create({
    entryInList: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 35,
        marginBottom: 35,
        marginLeft: "5%",
        marginRight: "5%",
    },

    horizontalLine: {
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        width: "90%",
        marginLeft: "5%"
    },

    listImage: {
        width: 75,
        height: 75,
        borderWidth: 1,
        borderColor: "black",
        marginRight: 20,
        backgroundColor: "lightgray",
    },

    listNameText: {
        fontSize: 18,
        fontWeight: "bold"
    },

    listDescriptionText: {
        fontSize: 16,
        marginTop: 10
    },

    pageNumText: {
        fontSize: 18,
        color: 'gray',
        marginHorizontal: 10,
    },

    selectedPageNumText: {
        fontSize: 18,
        color: Constants.DEFAULT_BLUE,
        fontWeight: "bold",
        marginHorizontal: 10,
    },

    selectablePrevNext: {
        fontSize: 17,
        color: 'black',
        marginHorizontal: 10,
        fontWeight: "bold"
    },

    inLinePageNum: {
        display: "flex",
        flexDirection: "row",
        margin: 20,
    },

    pageOfPagesText: {
        fontSize: 18,
        color: 'gray',
        position: 'absolute',
        right: 0
    }
})