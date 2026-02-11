import styles from './RunwayTable.module.css'

type TableProps = {
    age: number;
    assets: number;
    realGrowthRate: number;
    annualContribution: number;
}

const RunwayTable = ({age, assets, realGrowthRate, annualContribution}: TableProps) => {
    return (
        <div className={`bento-box ${styles.runwayTable}`}>
            <table>
                <thead>
                <tr>
                    <th>Runway Table</th>
                </tr>
                </thead>
            </table>
        </div>
    )
}

export default RunwayTable;