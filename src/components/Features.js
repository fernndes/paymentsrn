import React, { useState } from 'react'
import { View, Text, StyleSheet, Switch, Platform, TouchableHighlight, ScrollView, SafeAreaView } from 'react-native'
import { Ionicons, } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function Features({ title, iconName }) {
    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);


    return (
        <View style={styles.cardButtonFeature}>
            <LinearGradient
                // Button Linear Gradient
                colors={['#191A1D', '#1E2025', '#25272E']}
                style={styles.icons}
                start={[0.0, 0.0]}
                end={[1.0, 1.0]}>
                <Ionicons name={iconName} size={20} color="#989899" />
            </LinearGradient>
            <Text style={[styles.buttonText, { textAlign: 'left', marginLeft: 20 }]}>{title}{"\n"}Payment</Text>
            <LinearGradient
                colors={isEnabled ? ['#7F8FF7', '#8569EA', '#6FA0FB'] : ['#191A1D', '#1E2025', '#25272E']}
                style={styles.switch}
                start={[0.0, 0.0]}
                end={[1.0, 1.0]}>
                <Switch
                    trackColor={{ true: 'transparent', false: 'transparent' }}
                    thumbColor={!isEnabled ? '#3C3F47' : '#FFF'}
                    value={isEnabled}
                    onValueChange={toggleSwitch}
                />
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    cardButtonFeature: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#212428',
        borderRadius: 10,
        padding: 10,
        borderWidth: 2,
        borderColor: '#1C2023',
        marginTop: 10
    },
    icons: {
        height: 40,
        width: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#15171A',
        borderColor: '#131517'
    },
    switch: {
        padding: 2,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#1C2023',
    },
    buttonText: {
        flex: 1,
        fontSize: 12,
        color: '#FFF',
        textAlign: 'center',
        fontFamily: 'Montserrat_500Medium'
    }
})
