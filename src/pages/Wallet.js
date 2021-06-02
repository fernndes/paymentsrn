import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native'
import { Ionicons, } from '@expo/vector-icons';

import Features from '../components/Features';
import CreditCard from '../components/CreditCard';

export default function Wallet() {

    const CustomButton = ({ iconName, title }) => (
        <View style={[styles.cardButton, { marginRight: 5 }]}>
            <View style={[styles.icons, { position: 'absolute', left: 5 }]}>
                <Ionicons name={iconName} size={20} color="#E9E9E9" />
            </View>
            <Text style={styles.buttonText}>{title}</Text>
        </View>
    )

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={styles.container}>
                <View style={styles.cards}>
                    <View style={styles.title}>
                        <Text style={styles.textCard}>Meus Cartões</Text>
                        <View style={styles.icons}>
                            <Ionicons name="add" size={20} color="#E9E9E9" />
                        </View>
                    </View>
                    <CreditCard />
                    <View style={styles.cardsButtons}>
                        <CustomButton title="Tranferências" iconName="arrow-forward-outline" />
                        <CustomButton title="Pagamentos" iconName="add" />
                    </View>
                </View>
                <View style={styles.features}>
                    <Text style={styles.featuresTitle}>Configurações</Text>
                    <Features title="Contactless" iconName="wifi-outline" />
                    <Features title="Online" iconName="desktop-outline" />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: '#2E3338'
    },
    title: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 40,
        fontWeight: 'bold'
    },
    textCard: {
        fontSize: 24,
        color: 'white',
        fontFamily: 'Montserrat_700Bold'
    },
    cards: {
        borderColor: '#2A2D32',
        borderBottomWidth: 2,
        padding: 20
    },
    cardsButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    cardButton: {
        flex: 1,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#212428',
        borderRadius: 25,
        padding: 5,
        borderWidth: 2,
        borderColor: '#1C2023'
    },
    buttonText: {
        flex: 1,
        fontSize: 12,
        color: '#FFF',
        textAlign: 'center',
        fontFamily: 'Montserrat_500Medium'
    },
    buttonIcon: {
        position: 'absolute',
        left: 5
    },
    featuresTitle: {
        flex: 1,
        color: '#FFF',
        fontSize: 18,
        fontFamily: 'Montserrat_500Medium'
    },
    features: {
        padding: 20,
        marginBottom: 200
    },
    icons: {
        height: 40,
        width: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#15171A',
        borderColor: '#131517'
    }
})
