import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native"

interface OtherServicesProps {
    onPress: () => void
    disabled: boolean
}

const OtherServices: React.FC<OtherServicesProps> = ({ onPress, disabled }) => (
    <Pressable
        style={[styles.mainContainer, { opacity: disabled ? 0.4 : 1 }]}
        onPress={onPress}
        disabled={disabled}>
        <View style={styles.iconContainer}>
            <Text style={styles.iconStyle}>+</Text>
        </View>
        <Text style={styles.name}>Autre services</Text>

    </Pressable>
)

const styles = StyleSheet.create({
    mainContainer: {
        justifyContent: "center",
        alignItems: "center",
        width: Dimensions.get("screen").width / 3,
        marginBottom: 18
    },
    name: {
        marginTop: 5,
        fontSize: 14,
        textAlign: "center",
        color: "#000"
    },
    iconStyle: {
        color: "#f27500",
        borderColor: "#f27500",
        borderWidth: 2,
        borderRadius: 100,
        width: 20,
        height: 20,
        textAlign: "center",
    },
    iconContainer: {
        borderRadius: 100,
        backgroundColor: "#faede1",
        width: 60,
        height: 60,
        alignItems: "center",
        justifyContent: "center"
    }
})

export default OtherServices