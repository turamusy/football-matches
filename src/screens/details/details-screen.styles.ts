import { StyleSheet } from 'react-native';
import { convertHexToRGBA } from '../../utils/convert-hex-to-rgba';
import { theme } from '../../styles/color-varibles';

export const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        backgroundColor: theme.lightGreen,
    },
    container: {
        flex: 1,
        backgroundColor: theme.lightGreen,
        padding: 16,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 12,
        color: theme.white,
    },
    loading: {
        fontSize: 16,
        color: theme.white,
        marginVertical: 8,
    },
    columnWrapper: {
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    card: {
        backgroundColor: convertHexToRGBA(theme.black, 0.2),
        flex: 1,
        padding: 12,
        borderRadius: 10,
        marginHorizontal: 4,
    },
    playerName: {
        fontSize: 16,
        fontWeight: '600',
        color: theme.white,
        marginBottom: 6,
    },
    info: {
        fontSize: 14,
        color: theme.white,
        marginBottom: 3,
    },
    matchText: {
        fontSize: 15,
        color: theme.white,
        marginBottom: 4,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingHorizontal: 16,
        paddingTop: 12,
    },
    closeButton: {
        padding: 1,
    },
    closeButtonText: {
        fontSize: 24,
        color: theme.white,
    },
});
