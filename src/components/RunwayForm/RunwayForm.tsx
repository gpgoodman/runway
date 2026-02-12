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
                        setAnnualContribution
                    }: FormProps) => {

    return (
        <div className={`bento-box`}>
            <form>
                <div>
                    <label htmlFor="age">Starting Age: </label>
                    <input id="age" type='number' value={age}
                           onChange={(e) => setAge(Number(e.target.value))}/>
                </div>
                <div>
                    <label htmlFor="age">Retirement Age: </label>
                    <input id="age" type='number' value={retirementAge}
                           onChange={(e) => setRetirementAge(Number(e.target.value))}/>
                </div>
                <div>
                    <label htmlFor="assets">Starting Assets: </label>
                    <input id="assets" type='number' value={assets}
                           onChange={(e) => setAssets(Number(e.target.value))}/>
                </div>
                <div>
                    <label htmlFor="realGrowth">Real Growth Rate: </label>
                    <input id="realGrowth" type='number' value={realGrowthRate}
                           onChange={(e) => setRealGrowthRate(parseFloat(e.target.value))}/>
                </div>
                <div>
                    <label htmlFor="annualContribution">Annual Contribution: </label>
                    <input id="annualContribution" type='number' value={annualContribution}
                           onChange={(e) => setAnnualContribution(Number(e.target.value))}/>
                </div>
            </form>
        </div>
    )
}

export default RunwayForm;