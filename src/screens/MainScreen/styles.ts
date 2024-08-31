import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF"
    },
    contentContainer: {
        flex: 1,
        paddingVertical: 16
    },
    topContainer: {
        paddingHorizontal: 16
    },
    activityIndicator: {
        flex: 1, alignSelf: "center"
    },
    errorText: {
        fontSize: 20,
        color: "#000",
        alignSelf: "center"
    },
    title: {
        fontSize: 18,
        fontWeight: "600",
        color: "#000",
        marginBottom: 3
    },
    subtitle: {
        fontSize: 14,
        color: "gray",
        marginBottom: 3
    },
    appsContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginVertical: 22
    }
})


export default styles