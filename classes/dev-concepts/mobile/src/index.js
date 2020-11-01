import { StatusBar, StyleSheet, Text, View } from 'react-native';

import React from 'react';

export default function App() {
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#7159c1"/>
            
            <View style={styles.container}>
                <Text style={styles.title}>Hello GoStack</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7159c1',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: '#fff',
        fontSize: 32,
        fontWeight: 'bold',
    }
});