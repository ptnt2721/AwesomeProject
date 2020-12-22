import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    containImage: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    textMessage: {
        marginTop: 40,
        color: 'green',
        fontSize: 16,
    },
    imgLogo: {
        width: 50,
        height: 50,
        margin: 4
    },
    btnStyle: {
        height: 50,
        width: 200,
        borderColor: '#F44675',
        borderRadius: 5,
        borderWidth: 2,
        justifyContent: "center",
        alignItems: 'center',
        margin: 8
    },
    textAction: {
        color: '#F44675',
        fontSize: 20,
        fontWeight: 'bold'
    },
    containerItem: {
        marginTop: 16,
        flexDirection: 'row',
        alignItems: "center"
    }
});

export default Styles;