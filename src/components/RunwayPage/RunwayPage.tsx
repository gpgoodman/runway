'use client';
import RunwayForm from "@/components/RunwayForm/RunwayForm";
import RunwayTable from "@/components/RunwayTable/RunwayTable";
import {useState} from "react";
import styles from './RunwayPage.module.css'

const RunwayPage = () => {
    const [age, setAge] = useState(50);
    const [assets, setAssets] = useState(500000);
    const [realGrowthRate, setRealGrowthRate] = useState(.04);
    const [annualContribution, setAnnualContribution] = useState(25000);

    return (
        <div className={styles.runwayPage}>
            <section>
                <RunwayForm age={age} setAge={setAge} assets={assets} setAssets={setAssets}
                            realGrowthRate={realGrowthRate} setRealGrowthRate={setRealGrowthRate}
                            annualContribution={annualContribution}
                            setAnnualContribution={setAnnualContribution}/>
            </section>
            <section>
                <RunwayTable age={age} assets={assets} realGrowthRate={realGrowthRate}
                             annualContribution={annualContribution}/>
            </section>
        </div>
    )
}

export default RunwayPage;