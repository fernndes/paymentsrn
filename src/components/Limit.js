import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Ionicons, } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import * as scale from 'd3-scale'

let limitProp = 1000
let spended = 500

const getDomain = (domain) => [Math.min(...domain), Math.max(...domain)];

const Limit = ({ }) => {
    const [changeLimit, setChangeLimit] = useState(false)
    const [limit, setLimit] = useState(limitProp)
    const [leftToSpend, setLeftToSpend] = useState(limitProp - spended)

    const scaleY = scale.scaleLinear().domain(getDomain([0, limit])).range([0, 100])

    function onChangeLimit(value) {
        setLimit(value)
        setLeftToSpend(value - spended)

    }

    const BarIndicator = () => {
        const array = new Array(5).fill(0)
        return (
            <View style={{
                position: 'absolute',
                flexDirection: 'row',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                zIndex: 20,
                justifyContent: 'space-evenly',
                alignItems: 'center'
            }}>
                {array.map((e, i) => {
                    return (
                        <View key={i} style={{
                            width: 1,
                            height: 5,
                            backgroundColor: 'rgba(255,255,255,0.5)'
                        }} />
                    )

                })}
            </View>
        )
    }

    const gradientColors = ['#F1A15E', '#EF6CAB', '#BF5FF5', '#6569E6']

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.limitValuesContainer}>
                    <View style={styles.icons}>
                        <Ionicons name="cart" size={20} color="#E9E9E9" />
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <Text style={styles.limitValuesTextMain}>R${leftToSpend.toString()}</Text>
                        <Text style={styles.limitValuesTextSecond}>Disponível</Text>
                    </View>
                </View>
                <View style={styles.limitValuesContainer}>
                    <View style={styles.icons}>
                        <Ionicons name="lock-closed" size={20} color="#E9E9E9" />
                    </View>
                    <View>
                        <Text style={styles.limitValuesTextMain}>R${limit.toString()}</Text>
                        <Text style={styles.limitValuesTextSecond}>Limite</Text>
                    </View>
                </View>
            </View>
            <View style={styles.barLimitContainer}>
                <BarIndicator />
                <LinearGradient
                    colors={gradientColors}
                    style={[styles.barLimit, { width: `${scaleY(Math.abs(spended))}%` }]}
                    start={[0.0, 0.0]}
                    end={[1.0, 1.0]} />
            </View>
            <View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                    <Text style={styles.changeLimitText}>
                        Você pode mudar o limite a qualquer hora
                </Text>
                    <TouchableOpacity onPress={() => setChangeLimit(!changeLimit)}>
                        <Text style={styles.clickableChangeLimitText}>Clicando aqui</Text>
                    </TouchableOpacity>
                </View>
                {changeLimit && <TextInput
                    style={styles.textInput}
                    keyboardType="numeric"
                    placeholder="Insert a value"
                    onChangeText={value =>
                        onChangeLimit(value)
                    }
                    value={limit.toString()}
                />}
            </View>

        </View>
    )
}

export default Limit

const styles = StyleSheet.create({
    container: {
        padding: 20,
        borderColor: '#2A2D32',
        borderBottomWidth: 2,
        padding: 20
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1
    },
    limitValuesContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    barLimitContainer: {
        marginTop: 20,
        width: '100%',
        backgroundColor: 'black',
        borderWidth: 2,
        borderColor: '#1C2023',
        borderRadius: 15,
        backgroundColor: '#212428',
    },
    limitValuesTextMain: {
        color: '#FFF',
        fontFamily: 'Montserrat_500Medium'
    },
    limitValuesTextSecond: {
        color: '#989899',
        fontFamily: 'Montserrat_300Light',
        fontSize: 10
    },
    barLimit: {
        height: 15,
        borderRadius: 10
    },
    icons: {
        height: 40,
        width: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#15171A',
        marginRight: 10,
        borderColor: '#131517'
    },
    changeLimitText: {
        color: '#989899',
        fontFamily: 'Montserrat_300Light',
        fontSize: 10,
    },
    clickableChangeLimitText: {
        color: '#EF6CAB',
        fontFamily: 'Montserrat_300Light',
        fontSize: 12,
        marginLeft: 5
    },
    textInput: {
        height: 40,
        borderWidth: 1,
        marginTop: 10,
        backgroundColor: '#3C3F47',
        borderColor: '#212428',
        paddingHorizontal: 20,
        color: '#fff'
    }
})
