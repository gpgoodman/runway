import styles from "@/components/RunwayTableRow/RunwayTableRow.module.css";
import {formatCurrency} from '@/utils/format/format'

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

const RunwayTableRow = ({
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

export default RunwayTableRow;