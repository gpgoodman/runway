'use client'
import styles from './RunwayTable.module.css';
import RunwayTableRow from "@/components/RunwayTableRow/RunwayTableRow";
import {computeTable} from '@/lib/table/table';
import {formatCurrency} from '@/utils/format/format'

type TableProps = {
    age: number;
    retirementAge: number;
    assets: number;
    realGrowthRate: number;
    annualContribution: number;
    goal: number;
}


const RunwayTable = ({age, retirementAge, assets, realGrowthRate, annualContribution, goal}: TableProps) => {
    const rowsData = computeTable(age, retirementAge, assets, realGrowthRate, annualContribution, goal);
    const rows = rowsData.map((row, i: number) => {
            return <RunwayTableRow key={row.age} age={row.age} assets={row.assets} annualContribution={annualContribution}
                                   growth={row.growth} endingAssets={row.endingAssets} showGoalHit={row.showGoalHit}
                                   isRetirementAge={row.isRetirementAge} retirementAge={row.retirementAge}/>
        }
    )
    let summary;
    if (rows) {
        const financialIndependenceRow = rowsData.find(row => row.showGoalHit);
        const retirementAgeRow = rowsData.find(row => row.age === retirementAge);
        if (financialIndependenceRow && retirementAgeRow && retirementAgeRow.endingAssets < goal) {
            summary = `At your current savings rate, you reach financial independence at age ${financialIndependenceRow.age}.
                        You fall short of your goal at retirement age ${retirementAge} by ${formatCurrency(goal - retirementAgeRow.endingAssets)}`
        }

        if (financialIndependenceRow && retirementAgeRow && goal < retirementAgeRow.endingAssets) {
            summary = `At your current savings rate, you reach financial independence at age ${financialIndependenceRow.age}.
                        This is ${retirementAge - financialIndependenceRow.age} years before your projected retirement age.  Great work!`
        }

        if(financialIndependenceRow && financialIndependenceRow.age === retirementAge) {
            summary = `You hit financial independence exactly on target with your desired retirement age. Good job!`
        }

    }
    return (
        <div className={`bento-box ${styles.runwayTableContainer}`}>
            <table className={styles.runwayTable}>
                <caption>
                    Accumulation Projection (Real Dollars)
                </caption>
                <thead>
                <tr>
                    <th className={styles.runwayTableHeaderTitle}>Age</th>
                    <th className={styles.runwayTableHeaderTitle}>Assets</th>
                    <th className={styles.runwayTableHeaderTitle}>Annual Contribution</th>
                    <th className={styles.runwayTableHeaderTitle}>Real Growth @ {realGrowthRate * 100}%</th>
                    <th className={styles.runwayTableHeaderTitle}>Ending Assets</th>
                </tr>
                </thead>
                <tbody>
                {rows}
                </tbody>
                <tfoot className={styles.runwayTableFooter}>
                <tr>
                    <th colSpan={5}>{summary}
                    </th>
                </tr>
                </tfoot>
            </table>
        </div>
    )
}

export default RunwayTable;