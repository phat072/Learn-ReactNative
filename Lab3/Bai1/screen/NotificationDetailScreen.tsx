import { SafeAreaView, View, Text, StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
    text: {
        fontSize: 18,
    },
});

export const NotificationDetailScreen = () => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={styles.text}>Notification Detail Screen</Text>
            </View>
        </SafeAreaView>
    )
}