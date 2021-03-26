const moment = require('moment')

function datesGroupByComponent(dates, token) {
    return dates.reduce(function (val, obj) {
        let comp = moment(obj['date'], 'MM/DD/YYYY').format(token);
        (val[comp] = val[comp] || []).push(obj);
        return val;
    }, {});
}

function getTransactionsGrouped(data, token) {
    let groupedByYear = datesGroupByComponent(data, 'y')
    let groupedByAGroupOfYear = {}
    for (let year in groupedByYear) {
        groupedByAGroupOfYear[year] = datesGroupByComponent(groupedByYear[year], token)
    }
    // let groupByCompanyAndGroupOfYear = {}
    let groupByCompanyAndGroupOfYear = []
    for (let year in groupedByAGroupOfYear) {
        // groupByCompanyAndGroupOfYear[year] = {}
        for (let group in groupedByAGroupOfYear[year]) {
            // groupByCompanyAndGroupOfYear[year][group] = {}
            let byCompany = []
            groupedByAGroupOfYear[year][group].map((curr, idx) => {
                const company = byCompany.find(comp => comp && comp.value === curr.company)
                if (company) {
                    byCompany[company].value += curr.value
                } else {
                    byCompany = [...byCompany, { company: curr.company, value: curr.value, category: curr.category, label: group, year }]
                }
            })
            // groupByCompanyAndGroupOfYear[year][group] = byCompany
            groupByCompanyAndGroupOfYear.push(...byCompany)
        }
    }
    return groupByCompanyAndGroupOfYear
}

module.exports = { getTransactionsGrouped }