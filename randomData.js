function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function randomValue(start, end) {
    const isSpend = Math.random() > 0.5 ? -1 : 1
    return (isSpend) * Math.floor(Math.random() * end) + start
}

function randomCompany(array) {
    const randomCompany = array[Math.floor(Math.random() * array.length)];
    return randomCompany
}

const companies = [['Netflix', 'Entertainment'], ['Samsung', 'Technology'], ['Amazon', 'Tools'], ['Wallmart', 'Food']]

const generateTransactions = (number) => {
    let transactions = []
    for (let i = 0; i < number; i++) {
        let ranCompany = randomCompany(companies);
        let company = ranCompany[0];
        let category = ranCompany[1];
        let value = randomValue(50, 100);
        let date = randomDate(new Date(2020, 0, 1), new Date())
        transactions.push({
            company,
            category,
            value,
            date
        })

    }
    return transactions
}

let transactions = generateTransactions(20)
let sortedTransactions = transactions.sort((a, b) => b.date - a.date)
let sortedTransactionsWithId = sortedTransactions.map((t, i) => ({ id: i, ...t }))

const { getTransactionsGrouped } = require('./utils')

let dataByWeek = getTransactionsGrouped(sortedTransactionsWithId, 'w').reverse()
let dataByMonth = getTransactionsGrouped(sortedTransactionsWithId, 'M').reverse()
let dataByDay = sortedTransactionsWithId

module.exports = { dataByDay, dataByMonth, dataByWeek }
