import { StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#fff',
    },
    smallPhoto: {
        objectFit: 'cover',
        width: 90,
        height: 90,
        borderRadius: 80,
    },
    userNameContainer: {
        display: 'flex',
        paddingLeft: 10,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: 'center',
        columnGap: 40,
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'row',
        flexGrow: 1,
    },
    leftSection: {
        backgroundColor: 'rgb(224, 224, 224)',
        flex: 1,
        padding: 20,
        flexGrow: 1,
    },
    RightSection: {
        backgroundColor: 'white',
        flex: 3,
        padding: 20,
    },
    section: {
        marginBottom: 20,
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 10,
        textTransform: 'uppercase',
        fontFamily: 'Bold',
        display: "block",
    },
    title2: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 10,
        textTransform: 'uppercase',
        fontFamily: 'Bold',
        borderBottom: '1 solid black',
    },
    userName: {
        fontSize: 25,
        fontWeight: 800,
        textTransform: 'uppercase',
        fontFamily: 'Bold',
        textAlign: 'center',
        padding: '35px 0',
        letterSpacing: '7px',
    },
    subtitle: {
        fontSize: 14,
        fontWeight: 'bold',
        fontFamily: 'Regular',
    },
    boldText: {
        fontFamily: 'Bold',
        fontSize: 10,
    },
    boldText2: {
        fontFamily: 'Bold',
    },
    content: {
        fontSize: 9,
        marginBottom: 10,
        fontFamily: 'Regular',
    },
    double: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    half: {
        flex: '0 0 50%',
        padding: 10,
    },
    bar: {
        marginRight: 5,
        height: 5,
        backgroundColor: 'rgb(87, 87, 87)',
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
    },
    extendedBar: {
        marginRight: 5,
        height: 5,
        width: 100,
        borderRadius: 5,
        backgroundColor: 'rgb(201, 197, 197)',
    },
});

export default styles;