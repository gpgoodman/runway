export const computeEndingAssets = (assets: number, realGrowthRate: number, annualContribution: number) => {
    return assets + annualContribution + (assets * realGrowthRate);
}
export const annualGrowth = (assets: number, realGrowthRate: number) => {
    return assets * realGrowthRate;
}

export const computeTable = (age: number, retirementAge: number, assets: number, realGrowthRate: number, annualContribution: number, goal: number) => {
    let endingAssets = computeEndingAssets(assets, realGrowthRate, annualContribution);
    let isGoalHit = false;
    let isGoalAllowed = true;
    let showGoalHit = false;

    const rows = [];
    while (age <= retirementAge || !isGoalHit) {
        const isRetirementAge = age === retirementAge;
        if (endingAssets > goal) {
            isGoalHit = true;
            showGoalHit = isGoalHit && isGoalAllowed;
            isGoalAllowed = false;
        }
        rows.push({
            age: age,
            assets: assets,
            growth: annualGrowth(assets, realGrowthRate),
            endingAssets: endingAssets,
            showGoalHit: showGoalHit,
            isRetirementAge: isRetirementAge,
            retirementAge: retirementAge,
        });
        age += 1;
        assets = endingAssets;
        endingAssets = computeEndingAssets(assets, realGrowthRate, annualContribution)
    }
    return rows;
}