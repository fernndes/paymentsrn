import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import { Ionicons, } from '@expo/vector-icons';

import moment from 'moment'

export default function Transactions({ dataByDay, dataByMonth, dataByWeek }) {
    const [group, setGroup] = useState(0)

    let Item = ({ item }) => {
        let date;
        if (group === 2) {
            date = moment().month(item.label).format("MMMM").toString()
        }
        return (
            <View style={[styles.cardButton, { marginLeft: 5 }]}>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                    <View style={[styles.icons]}>
                        <Ionicons name={item.value > 0 ? "add" : "remove-outline"} size={20} color="#E9E9E9" />
                    </View>
                    <Text style={[styles.buttonText]}>{item.company}{"\n"}<Text style={{ fontSize: 10, fontFamily: 'Montserrat_300Light', lineHeight: 18 }}>{item.category}</Text></Text>
                </View>
                <View style={[styles.price]}>
                    <Text style={[styles.buttonText]}>{item.value > 0 ? `+$${item.value}` : `-$${Math.abs(item.value)}`}</Text>
                    {group === 0 ? <Text style={[styles.buttonText, { fontSize: 10, fontFamily: 'Montserrat_300Light', lineHeight: 18 }]}>{moment(item.date.getTime()).fromNow()}</Text>
                        : <Text style={[styles.buttonText, { fontSize: 10, fontFamily: 'Montserrat_300Light', lineHeight: 18 }]}>{group === 1 ? `${item.label} Week` : date} - {item.year}</Text>
                    }

                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Text style={styles.transactionsTitle}>Transactions</Text>
            <View style={styles.headerContainer}>
                <TouchableWithoutFeedback style={{ flex: 1 }} onPress={() => setGroup(0)}>
                    <View style={[group === 0 ? styles.headerSelected : styles.defaultHeader]}>
                        <Text style={[group === 0 ? styles.headerTextSelected : styles.headerTextDefault]}>Daily</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback style={{ flex: 1 }} onPress={() => setGroup(1)}>
                    <View style={[group === 1 ? styles.headerSelected : styles.defaultHeader]}>
                        <Text style={[group === 1 ? styles.headerTextSelected : styles.headerTextDefault]}>Weekly</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback style={{ flex: 1 }} onPress={() => setGroup(2)}>
                    <View style={[group === 2 ? styles.headerSelected : styles.defaultHeader]}>
                        <Text style={[group === 2 ? styles.headerTextSelected : styles.headerTextDefault]}>Monthly</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
            <View style={styles.cardButtonsFeature}>
                <View>
                    <FlatList
                        data={group === 0 ? dataByDay : group === 1 ? dataByWeek : dataByMonth}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={Item}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    headerContainer: {
        flexDirection: 'row',
        backgroundColor: '#212428',
        borderRadius: 30,
        padding: 3,
        borderWidth: 2,
        borderColor: '#1C2023',
        marginBottom: 10,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'space-around'
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
    cardButtonsFeature: {
        flex: 1,
        backgroundColor: '#212428',
        borderRadius: 10,
        padding: 10,
        borderWidth: 2,
        borderColor: '#1C2023',
        marginTop: 10,
        marginBottom: 100
    },
    cardButton: {
        flex: 1,
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    buttonText: {
        fontSize: 12,
        color: '#FFF',
        fontFamily: 'Montserrat_500Medium'
    },
    buttonIcon: {
        position: 'absolute',
        left: 5
    },
    price: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 2,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#1C2023'
    },
    headerSelected: {
        borderRadius: 20,
        backgroundColor: 'white',
        paddingVertical: 5,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    defaultHeader: {
        borderRadius: 20,
        paddingVertical: 5,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTextSelected: {
        color: '#15171A',
        fontWeight: 'bold',
        fontFamily: 'Montserrat_400Regular'
    },
    headerTextDefault: {
        color: '#FFF',
        fontFamily: 'Montserrat_400Regular'
    },
    transactionsTitle: {
        flex: 1,
        color: '#FFF',
        fontSize: 18,
        fontFamily: 'Montserrat_500Medium'
    }
})
