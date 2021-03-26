import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

const CreditCard = () => {
    return (
        <LinearGradient
            colors={['#F1A15E', '#EF6CAB', '#BF5FF5', '#6569E6']}
            style={styles.creditCard}
            start={[0.0, 0.0]}
            end={[1.0, 1.0]}>
            <View style={styles.creditCardTitleContainer}>
                <Text style={styles.creditCardTitleText}>Family Card</Text>
                <View style={{ flexDirection: 'row', width: 40, justifyContent: 'flex-end' }}>
                    <View style={{ height: 30, width: 30, borderRadius: 15, backgroundColor: 'rgba(255,255,255,0.6)' }}></View>
                    <View style={{ position: 'absolute', right: '40%', height: 30, width: 30, borderRadius: 15, backgroundColor: 'rgba(255,255,255,0.6)' }}></View>
                </View>
            </View>
            <View style={styles.creditCardContentContainer}>
                <Text style={styles.creditCardNumberText}>8847 4321 2336 4421</Text>
                <Text style={styles.creditCardValueText}>$8,230</Text>
            </View>
        </LinearGradient>
    )
}

export default CreditCard

const styles = StyleSheet.create({
    creditCard: {
        backgroundColor: '#E364A9',
        borderRadius: 20,
        height: 200,
        marginBottom: 20,
        padding: 20
    },
    creditCardTitleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    creditCardContentContainer: {
        flex: 1,
        justifyContent: 'space-between'
    },
    creditCardTitleText: {
        fontSize: 16,
        color: 'white',
        fontFamily: 'Montserrat_500Medium'
    },
    creditCardNumberText: {
        marginTop: 10,
        fontSize: 8,
        color: 'white',
        letterSpacing: 2,
        fontFamily: 'Montserrat_400Regular'
    },
    creditCardValueText: {
        fontSize: 32,
        color: 'white',
        fontFamily: 'Montserrat_400Regular'
    }
})
