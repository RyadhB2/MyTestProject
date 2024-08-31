import { ActivityIndicator, Button, Image, Pressable, ScrollView, Text, View } from "react-native"
import { useGetAlgerianAppsQuery } from "../../redux/services/apiSlice"
import { useState } from "react";
import styles from "./styles";
import AppItem from "../../components/AppItem";
import OtherServices from "../../components/OtherServices";


const BATCH_SIZE = 3;
const INITIAL_BATCH_SIZE = 5;


const MainScreen: React.FC = () => {

    const { data, error, isLoading } = useGetAlgerianAppsQuery()
    const [visibleItems, setVisibleItems] = useState(INITIAL_BATCH_SIZE);
    const showOtherServices = data?.sousApps.length ? data?.sousApps.length - visibleItems <= 0 : false

    const loadMore = () => {
        if (data?.sousApps.length && data?.sousApps.length - visibleItems > 0)
            setVisibleItems((prev) => prev + BATCH_SIZE);
    };

    if (isLoading) return <ActivityIndicator size={"large"} style={styles.activityIndicator} />
    if (error) return <Text style={styles.errorText}>An error happend ... please try again</Text>
    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainer}>
            <View style={styles.topContainer}>
                <Text style={styles.title}>Explorer les services temtem One</Text>
                <Text style={styles.subtitle}>Livraison et services pour vous et vos proches</Text>
            </View>

            <View style={styles.appsContainer}>
                {data?.sousApps.slice(0, visibleItems).map((app) => (
                    <AppItem name={app.name} id={app._id} logoLink={app.logo} key={app._id} />
                ))}

                <OtherServices onPress={loadMore} disabled={showOtherServices} />

            </View>
        </ScrollView>
    )
}

export default MainScreen