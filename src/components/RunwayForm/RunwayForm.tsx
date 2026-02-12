import styles from './RunwayForm.module.css'

type FormProps = {
    age: number;
    retirementAge: number;
    setRetirementAge: (retirementAge: number) => void;
    setAge: (age: number) => void;
    assets: number;
    setAssets: (assets: number) => void;
    realGrowthRate: number;
    setRealGrowthRate: (realGrowthRate: number) => void;
    annualContribution: number;
    setAnnualContribution: (annualContribution: number) => void;
    goal: number;
    setGoal: (goal: number) => void;
}

const RunwayForm = ({
                        age,
                        setAge,
                        retirementAge,
                        setRetirementAge,
                        assets,
                        setAssets,
                        realGrowthRate,
                        setRealGrowthRate,
                        annualContribution,
                        setAnnualContribution,
                        goal,
                        setGoal
                    }: FormProps) => {

    return (
        <div className={`bento-box`}>
            <form className={styles.runwayForm}>
                <div className={styles.runwayFormField}>
                    <label htmlFor="age">Starting Age: </label>
                    <input className={styles.runwayFormInput} id="age" type='number' min="0" value={age}
                           onChange={(e) => setAge(Number(e.target.value))}/>
                </div>
                <div className={styles.runwayFormField}>
                    <label htmlFor="age">Retirement Age: </label>
                    <input className={styles.runwayFormInput} id="age" type='number' min="0" value={retirementAge}
                           onChange={(e) => setRetirementAge(Number(e.target.value))}/>
                </div>
                <div className={styles.runwayFormField}>
                    <label htmlFor="assets">Starting Assets: </label>
                    <input className={styles.runwayFormInput} id="assets" type='number' step="10000" min="0"
                           value={assets}
                           onChange={(e) => setAssets(Number(e.target.value))}/>
                </div>
                <div className={styles.runwayFormField}>
                    <label htmlFor="realGrowth">Real Growth Rate: </label>
                    <input className={styles.runwayFormInput} id="realGrowth" type='number' step=".01" min="0"
                           value={realGrowthRate}
                           onChange={(e) => setRealGrowthRate(parseFloat(e.target.value))}/>
                </div>
                <div className={styles.runwayFormField}>
                    <label htmlFor="annualContribution">Annual Contribution: </label>
                    <input className={styles.runwayFormInput} id="annualContribution" type='number' step="1000" min="0"
                           value={annualContribution}
                           onChange={(e) => setAnnualContribution(Number(e.target.value))}/>
                </div>
                <div className={styles.runwayFormField}>
                    <label htmlFor="annualContribution">Financial Independence: </label>
                    <input className={styles.runwayFormInput} id="goal" type='number' step="25000" min="0" value={goal}
                           onChange={(e) => setGoal(Number(e.target.value))}/>
                </div>
            </form>
        </div>
    )
}

export default RunwayForm;