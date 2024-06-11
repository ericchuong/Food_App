import { StyleSheet } from "react-native";
import Constants from "../Constants";

export default StyleSheet.create({
    toolbar: {
        backgroundColor: Constants.LIGHTER_BLUE,
        paddingVertical: 8,
        paddingHorizontal: 16,
        display: 'flex',
        flexDirection: 'row',
        gap: 20,
    },

    toolbarButton: {
        alignItems: 'center',
        alignSelf: 'flex-start',
        justifyContent: 'center',
        paddingVertical: 5,
        paddingHorizontal: 15,
        backgroundColor: Constants.EVEN_LIGHTER_BLUE,
        borderRadius: 4,
    },

    toolbarText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
})