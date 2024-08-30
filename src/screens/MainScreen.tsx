import { Button, Image, Pressable, ScrollView, Text, View } from "react-native"
import { useGetAlgerianAppsQuery } from "../redux/services/apiSlice"
import { useState } from "react";


const BATCH_SIZE = 3;
const INITIAL_BATCH_SIZE = 5;


const MainScreen: React.FC = () => {

    const { data, error, isLoading } = useGetAlgerianAppsQuery()
    const [visibleItems, setVisibleItems] = useState(INITIAL_BATCH_SIZE);

    console.log(data?.sousApps.length && data?.sousApps.length - visibleItems <= 0)

    const loadMore = () => {
        if (data?.sousApps.length && data?.sousApps.length - visibleItems > 0)
            setVisibleItems((prev) => prev + BATCH_SIZE);
    };

    if (isLoading) return <Text>Is loading ...</Text>
    if (error) return <Text>An error happend ...</Text>
    return (
        <ScrollView>
            <Text>{data?.sousApps.slice(0, visibleItems).map((app) => (
                <View key={app._id}>
                    <Text>{app.name}</Text>
                    <Image source={{ uri: app.logo }} alt={app.name} style={{ width: 100, height: 100 }} />
                </View>
            ))}</Text>
            <Pressable style={{
                width: "100%",
                height: 50,
                backgroundColor: "green",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 20,
            }}
                onPress={loadMore} >
                <Text style={{ color: "white", fontWeight: "bold" }}>MORE</Text>
            </Pressable>
        </ScrollView>
    )
}

export default MainScreen