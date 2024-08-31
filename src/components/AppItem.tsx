
import React from "react";
import { Dimensions, Image, ImageSourcePropType, Pressable, StyleSheet, Text, View } from "react-native";

interface AppItemProps {
    id: string,
    name: string,
    logoLink: string
}

const AppItem: React.FC<AppItemProps> = ({ id, name, logoLink }) => {
    return (
        <View key={id} style={styles.mainContainer}>
            <Image source={{ uri: logoLink }} alt={name} style={{ width: 60, height: 60 }} />
            <Text style={styles.name}>{name}</Text>

        </View>
    )
}

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
    }
})


export default AppItem