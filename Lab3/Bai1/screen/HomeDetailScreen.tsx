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

export const HomeDetailScreen = () => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={styles.text}>Home Detail Screen</Text>
            </View>
        </SafeAreaView>
    )
}