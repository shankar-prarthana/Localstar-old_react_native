import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    background_image: {
        width: "100%",
        height: "100%",
        resizeMode: 'cover',
        paddingBottom: "30%"
    },
    container: {
        marginTop: "1%",
        alignSelf: "center",
        borderStyle: "solid",
        borderWidth: 40,
        borderColor: "white",
        borderRadius: 40,
        backgroundColor: "white",
        width: "37%",
        flex: 1,
    },
    business_container: {
        alignSelf: "center",
        borderStyle: "solid",
        borderWidth: 40,
        borderColor: "white",
        borderRadius: 40,
        backgroundColor: "white",
        width: "25%",
        flex: 1,
    },
    campaign_container: {
        alignSelf: "center",
        borderStyle: "solid",
        borderWidth: 40,
        borderColor: "white",
        borderRadius: 40,
        backgroundColor: "white",
        width: "40%",
        flex: 1,
    },
    social_media_container: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    social_media_row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: "10%",
        backgroundColor: 'white',
        borderRadius: 40,
        width: "25%",
        padding: "1%",
        marginBottom: "1%"
    },
    tab: {
        marginHorizontal: "20%",
        paddingBottom: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    title: {
        fontWeight: "bold",
        alignSelf: "center",
        marginTop: "3%",
        fontSize: 40
    },
    welcome_tile: {
        flexDirection: 'column',
        justifyContent: "space-between",
        borderRadius: 40,
        backgroundColor: '#FFFFFF',
        padding: "5%",
        textAlign: 'left',
        width: '30%',
        height: '60%'
    },
    welcome_container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: '20%',
        height: 800
    },
    welcome_title: {
        fontWeight: 'bold',
        fontStyle: 'italic',
        color: '#a50c29',
        paddingBottom: '4%',
        fontSize: 30
    },
    secondary_title: {
        fontWeight: 'bold',
        fontStyle: 'italic',
        alignSelf: "center",
        color: '#a50c29',
        paddingBottom: '1%',
        fontSize: 30,
        textAlign: "center",
        marginTop: "4%"
    },
    welcome_body: {
        color: 'black',
        fontSize: 20
    },
    dashboard_row: {
        flexDirection: 'row',
        paddingVertical: 8,
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    dashboard_rows_view: {
        paddingVertical: "6%",
        backgroundColor: 'green',
        borderRadius: 20,
    },
    dashboard_create_view: {
        paddingVertical: "6%",
        backgroundColor: 'green',
        borderRadius: 20,
        borderStyle: 'dashed',
        borderWidth: 2,
        backgroundColor: 'white',
    },
    button_row: {
        paddingTop: "4%",
        alignContent: "flex-end"
    },
    enabled_button: {
        alignItems: 'center',
        backgroundColor: '#ec543d',
        padding: 10,
        borderRadius: 10,
        width: "100%",
        fontSize: 18,
        shadowColor: "black",
        shadowOffset: 1
    },
    disabled_button: {
        alignItems: 'center',
        backgroundColor: "grey",
        padding: 10,
        borderRadius: 10,
        width: "100%",
        fontSize: 18,
        shadowColor: "black",
        shadowOffset: 1
    },
    enabled_button_inrow: {
        alignItems: 'center',
        backgroundColor: '#ec543d',
        padding: 5,
        borderRadius: 10,
        width: "25%",
        fontSize: 18,
    },
    disabled_button_inrow: {
        alignItems: 'center',
        backgroundColor: "grey",
        padding: 5,
        borderRadius: 10,
        width: "25%",
        fontSize: 18
    },
    text_enabled: {
        width: "65%",
        fontSize: 18,
        outline: "none"
    },
    text_disabled: {
        width: "65%",
        fontSize: 18,
        outline: "none",
        color: "grey"
    },
    seperated_row: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    active_row: {
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottomColor: "#ff9966",
        borderBottomWidth: 2
    },
    non_active_row: {
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottomColor: "#ff9966",
        borderBottomWidth: 1
    },
    active_invalid_row: {
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottomColor: "red",
        borderBottomWidth: 2
    },
    non_active_invalid_row: {
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottomColor: "red",
        borderBottomWidth: 1
    },
    date_active_row: {
        padding: 10,
        borderBottomColor: "#ff9966",
        borderBottomWidth: 2
    },
    date_non_active_row: {
        padding: 10,
        borderBottomColor: "#ff9966",
        borderBottomWidth: 1
    },
    date_active_invalid_row: {
        padding: 10,
        borderBottomColor: "red",
        borderBottomWidth: 2
    },
    date_non_active_invalid_row: {
        padding: 10,
        borderBottomColor: "red",
        borderBottomWidth: 1
    },
    category_active_row: {
        borderBottomColor: "#ff9966",
        borderBottomWidth: 2,
        flexDirection: "column",
        justifyContent: "space-evenly",
        height: '20%'
    },
    category_non_active_row: {
        borderBottomColor: "#ff9966",
        borderBottomWidth: 1,
        flexDirection: "column",
        justifyContent: "space-evenly",
        height: '20%'
    },
    category_active_invalid_row: {
        borderBottomColor: "red",
        borderBottomWidth: 2,
        flexDirection: "column",
        justifyContent: "space-evenly",
        height: '20%'
    },
    category_non_active_invalid_row: {
        borderBottomColor: "red",
        borderBottomWidth: 1,
        flexDirection: "column",
        justifyContent: "space-evenly",
        height: '20%'
    },
    active_row_2: {
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottomColor: "#ff9966",
        borderBottomWidth: 2,
        width: "45%"
    },
    non_active_row_2: {
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottomColor: "#ff9966",
        borderBottomWidth: 1,
        width: "45%"
    },
    active_invalid_row_2: {
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottomColor: "red",
        borderBottomWidth: 2,
        width: "45%"
    },
    non_active_invalid_row_2: {
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottomColor: "red",
        borderBottomWidth: 1,
        width: "45%"
    },
    signup_row: {
        paddingTop: "5%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    forgotPassword_row: {
        padding: 20,
        flexDirection: "row",
        justifyContent: "flex-end",
        width: "100%"
    },
    resendOtp_row: {
        padding: 10,
        flexDirection: "row",
        justifyContent: "center",
        fontSize: 18,
        width: "100%"
    },
    selected_tab: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        borderBottomWidth: 2,
        borderBottomColor: "#ff9966"
    },
    unselected_tab: {
        fontSize: 20,
        textAlign: "center",
        borderBottomWidth: 0,
        borderBottomColor: "#ff9966"
    },
    password_strengthVeryWeak: {
        width: 30,
        height: 30,
        backgroundColor: "red",
        borderRadius: 80,
    },
    password_strengthWeak: {
        width: 30,
        height: 30,
        backgroundColor: "#ff9933",
        borderRadius: 80,
        paddingLeft: 5
    },
    password_strengthModerate: {
        width: 30,
        height: 30,
        backgroundColor: "#ffff4d",
        borderRadius: 80,
    },
    password_strengthStrong: {
        width: 30,
        height: 30,
        backgroundColor: "#5cd65c",
        borderRadius: 80
    },
    password_strengthVeryStrong: {
        width: 30,
        height: 30,
        backgroundColor: "#145214",
        borderRadius: 80
    },
});