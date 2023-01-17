import { StyleSheet } from "react-native"

export const colors = {
    bgPrimary: '#bacfc4',
    bgGreen: '#04783e',
    danger: '#f20202'
}

export default StyleSheet.create({
    button: {
        backgroundColor: colors.bgGreen,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        marginTop: 20,
        width: '100%',
        borderRadius: 10
    },

    container: {
        flex: 1,
        backgroundColor: colors.bgPrimary,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },

    content: {
        width: '100%',
        padding: 20,
    },

    textDanger: {
        color: colors.danger,
        fontSize: 14,
        fontWeight: '100',
        width: '100%',
    },

    input: {
        borderColor: colors.bgGreen,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        with: '100%',
        marginBottom: 20,
        fontSize: 20,
        fontWeight: '200',
    },

    text: {
        fontSize: 20,
        fontWeight: '200',
        marginVertical: 5,
        padding: 5,
    },

    textPrimary: {
        color: colors.bgGreen,
        fontWeight: 'bold',
        fontSize: 32,
        marginHorizontal: 'auto',
        marginTop: 20,
        width: '100%',
    }



})