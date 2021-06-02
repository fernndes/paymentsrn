import React from 'react'
import { ScrollView, SafeAreaView, StyleSheet } from 'react-native'

import Chart from '../components/Chart'
import Limit from '../components/Limit';

import { dataByDay, dataByMonth, dataByWeek } from '../../randomData'
import Transactions from '../components/Transactions';
import TabBar from '../components/TabBar';

export default function Charts() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={styles.container}>
                <Chart title="Gastos" graphHeight={250} data={dataByMonth} />
                <Limit />
                <Transactions dataByDay={dataByDay} dataByMonth={dataByMonth} dataByWeek={dataByWeek} />
            </ScrollView>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: '#2E3338'
    },
})
