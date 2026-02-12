import styles from './RunwayTable.module.css'
import {computeTable} from '@/lib/table/table'

type TableProps = {
    age: number;
    retirementAge: number;
    assets: number;
    realGrowthRate: number;
    annualContribution: number;
    goal: number;
}

type TableRowProps = {
    age: number;
    assets: number;
    annualContribution: number;
    growth: number;
    endingAssets: number;
    showGoalHit: boolean;
    isRetirementAge: boolean;
    retirementAge: number;
}

export function formatCurrency(value: number): string {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0,
    }).format(value);
}

const TableRow = ({
                      age,
                      assets,
                      annualContribution,
                      growth,
                      endingAssets,
                      showGoalHit,
                      isRetirementAge,
                      retirementAge
                  }: TableRowProps) => {
    const isGoalAheadofTarget = showGoalHit && age < retirementAge;
    const isGoalBehindTarget = showGoalHit && age > retirementAge;
    const isGoalOnTarget = showGoalHit && age === retirementAge;
    return (
        <tr className={`${isGoalOnTarget && styles.runwayTableRowGoal} ${isGoalAheadofTarget && styles.runwayTableRowGoal} ${isGoalBehindTarget && styles.runwayTableRowGoalPastDue} ${isRetirementAge && !isGoalOnTarget && styles.runwayTableRowRetired}`}>
            <td>{age}</td>
            <td>{formatCurrency(assets)}</td>
            <td>{formatCurrency(annualContribution)}</td>
            <td>{formatCurrency(growth)}</td>
            <td>{formatCurrency(endingAssets)}</td>
        </tr>
    )
}

const RunwayTable = ({age, retirementAge, assets, realGrowthRate, annualContribution, goal}: TableProps) => {
    const rowsData = computeTable(age, retirementAge, assets, realGrowthRate, annualContribution, goal);

    const rows = rowsData.map((row, i: number) => {
            return <TableRow key={row.age} age={row.age} assets={row.assets} annualContribution={annualContribution}
                             growth={row.growth} endingAssets={row.endingAssets} showGoalHit={row.showGoalHit}
                             isRetirementAge={row.isRetirementAge} retirementAge={row.retirementAge}/>
        }
    )
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
            </table>
        </div>
    )
}

export default RunwayTable;