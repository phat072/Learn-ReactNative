import React from "react"
import { SafeAreaView, Text, View, StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
    text: {
    },
})

export const HelpDrawer: React.FC = () => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={styles.text}>Helps</Text>
            </View>
        </SafeAreaView>
    )
}