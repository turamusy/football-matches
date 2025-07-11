import { StyleSheet } from "react-native";
import { theme } from "../../styles/color-varibles";
import { convertHexToRGBA } from "../../utils/convert-hex-to-rgba";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingVertical: 12,
        backgroundColor: theme.lightGreen,
        justifyContent: 'center',
        alignItems: 'center',
    },
    listContainer: { width: '100%' },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.lightGreen
    },
    title: {
        color: theme.white,
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    itemSeparator: { width: 18 },
    activityIndicator: {
        marginTop: 20,
        backgroundColor: convertHexToRGBA(theme.black, 0.3),
        height: 60,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        backgroundColor: theme.white,
    },
    errorTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: theme.darkGrey,
        marginBottom: 8,
    },
    errorMessage: {
        fontSize: 14,
        color: theme.grey,
        marginBottom: 16,
        textAlign: 'center',
    },
    retryButton: {
        backgroundColor: theme.lightGreen,
        paddingHorizontal: 24,
        paddingVertical: 12,
        borderRadius: 12,
    },
    retryText: {
        color: theme.white,
        fontWeight: '600',
    },
});