import styles from './RunwayTable.module.css';
import RunwayTableRow from "@/components/RunwayTableRow/RunwayTableRow";
import {computeTable} from '@/lib/table/table';

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