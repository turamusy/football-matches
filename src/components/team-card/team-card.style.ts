import { StyleSheet } from "react-native";
import { theme } from "../../styles/color-varibles";
import { convertHexToRGBA } from "../../utils/convert-hex-to-rgba";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: convertHexToRGBA(theme.black, 0.2),
        height: 200,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 24,
        shadowColor: theme.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    image: {
        minHeight: 100,
        minWidth: 100,
        borderRadius: 50,
    }, 
    defaultImage: {
        backgroundColor: convertHexToRGBA(theme.black, 0.4),
    }, 
    text: {
        color: theme.white,
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 5,
    },
});