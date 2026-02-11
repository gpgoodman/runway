import styles from './RunwayForm.module.css'

type FormProps = {
    age: number;
    setAge: (age: number) => void;
    assets: number;
    setAssets: (assets: number) => void;
    realGrowthRate: number;
    setRealGrowthRate: (realGrowthRate: number) => void;
    annualContribution: number;
    setAnnualContribution: (annualContribution: number) => void;
}

const RunwayForm = ({
                        age,
                        setAge,
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
            Runway Form
        </form>
        </div>
    )
}

export default RunwayForm;