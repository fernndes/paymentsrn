import React from 'react'
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const TabBar = ({ navigation }) => {
    return (
        <View style={styles.navBar}>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('Wallet')}>
                <Ionicons name="wallet-outline" size={20} color="#FFF" />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
                <Ionicons name="time-outline" size={20} color="#989899" />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('Charts')}>
                <Ionicons name="bar-chart" size={20} color="#989899" />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
                <Ionicons name="person" size={20} color="#989899" />
            </TouchableWithoutFeedback>
        </View>
    )
}

export default TabBar

const styles = StyleSheet.create({
    navBar: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 20,
        margin: 20,
        borderRadius: 40,
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#3C3F47'
    }
})
