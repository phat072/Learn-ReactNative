import { useNavigation } from "@react-navigation/native"
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet } from "react-native"

export const HomeDrawer = () => {
    const navigation = useNavigation()
    const handleGoToDetail = () => {
        navigation.navigate("HomeDetailScreen")
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.innerContainer}>
                <Text>Home</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleGoToDetail}>
                    <Text style={styles.buttonText}>GO TO DETAIL</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    innerContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
    button: {
        padding: 8,
        backgroundColor: 'blue',
    },
    buttonText: {
        color: 'white',
    },
})