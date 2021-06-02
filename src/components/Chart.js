import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import * as scale from 'd3-scale'

import moment from 'moment'

const getDomain = (domain) => [Math.min(...domain), Math.max(...domain)];


function Chart({ data, title, graphHeight }) {
    const [itemSelected, setItemSelected] = useState(false);
    const [values, setValues] = useState([])

    useEffect(() => {
        console.log(sumByMonth(data))
        setValues(sumByMonth(data))
    }, [])

    function sumByMonth(data) {
        let elements = []
        data.map((item) => {
            const index = elements.findIndex(e => e.label === item.label && e.year === item.year)
            if (index === -1) {
                elements.push({
                    label: item.label,
                    year: item.year,
                    value: item.value
                })
            } else {
                elements[index].value += item.value
            }
        })
        elements.forEach(e => {
            e.label = moment().month(e.label).format("MMM")
        })
        return elements.slice(0, 11)
    }

    const scaleY = scale.scaleLinear().domain(getDomain(values.map(d => Math.abs(d.value)))).range([40, 100])

    const selectedGradient = ['#6569E6', '#BF5FF5', '#EF6CAB', '#F1A15E']
    const defaultGradient = ['#2A2D32', '#25272E']

    const valueVisualizer = (item) => {
        return (
            <View style={styles.valueIndicatorContainer}>
                <Text style={styles.valueIndicatorText}>
                    {item.value > 0 ? `+R$${item.value}` : `-R$${Math.abs(item.value)}`}
                </Text>
            </View >
        )
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <ScrollView style={[styles.chartContainer, { height: graphHeight }]} horizontal bounces={false}>
                {values.map((item, index) => {
                    const heightScaled = scaleY(Math.abs(item.value))
                    return (
                        <View key={index} style={styles.barContainer}>
                            <View style={{ flex: 1 }} />
                            <LinearGradient
                                colors={itemSelected === index ? selectedGradient : defaultGradient}
                                style={{ height: `${heightScaled}%`, borderRadius: 15 }}
                                start={[1.0, 0.0]}
                                end={[1.0, 1.0]}>
                                {itemSelected === index ? valueVisualizer(item) : void (0)}
                                <TouchableOpacity onPress={() => setItemSelected(index)} style={styles.touchableContainer}>
                                    <Text style={styles.monthIndicator}>{item.label.toUpperCase()}{'\n'}{item.year}</Text>
                                </TouchableOpacity>
                            </LinearGradient>

                        </View>
                    )
                })}
            </ScrollView>
        </View>
    )
}

export default Chart

const styles = StyleSheet.create({
    chartContainer: {
        height: 200,
        paddingVertical: 20,
        paddingHorizontal: 5
    },
    barContainer: {
        height: '100%',
        width: 60,
        marginRight: 5
    },
    valueIndicatorContainer: {
        position: 'absolute',
        alignItems: 'center',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        padding: '10%',
    },
    valueIndicatorText: {
        color: 'white',
        fontFamily: 'Montserrat_400Regular',
        fontSize: 10,
        letterSpacing: 1
    },
    touchableContainer: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: 10
    },
    monthIndicator: {
        color: 'white',
        fontFamily: 'Montserrat_400Regular',
        fontSize: 10,
        textAlign: 'center'
    },
    title: {
        color: '#FFF',
        fontSize: 18,
        fontFamily: 'Montserrat_500Medium',
        marginBottom: 20
    },
    container: {
        alignItems: 'center',
        backgroundColor: '#15171A',
        borderColor: '#2A2D32',
        borderBottomWidth: 2,
        paddingTop: 40
    }
})
