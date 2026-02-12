'use client';
import RunwayForm from "@/components/RunwayForm/RunwayForm";
import RunwayTable from "@/components/RunwayTable/RunwayTable";
import {useState} from "react";
import styles from './RunwayPage.module.css'

const RunwayPage = () => {
    const [age, setAge] = useState<number>(50);
    const [retirementAge, setRetirementAge] = useState(67);
    const [assets, setAssets] = useState<number>(500000);
    const [realGrowthRate, setRealGrowthRate] = useState<number>(.04);
    const [annualContribution, setAnnualContribution] = useState<number>(25000);
    const [goal, setGoal] = useState<number>(2000000);

    return (
        <div className={styles.runwayPage}>
            <section>
                <RunwayForm age={age} setAge={setAge} retirementAge={retirementAge} setRetirementAge={setRetirementAge}
                            assets={assets} setAssets={setAssets}
                            realGrowthRate={realGrowthRate} setRealGrowthRate={setRealGrowthRate}
                            annualContribution={annualContribution}
                            setAnnualContribution={setAnnualContribution}
                            goal={goal} setGoal={setGoal}/>
            </section>
            <section>
                <RunwayTable age={age} retirementAge={retirementAge} assets={assets} realGrowthRate={realGrowthRate}
                             annualContribution={annualContribution} goal={goal}/>
            </section>
        </div>
    )
}

export default RunwayPage;