export const TipList = () => {
    const tips = getTips();

    let htmlString = '<article class="tipList"';

    for (const tip of tips) {

        htmlString += `<section class="tip card">
            `
    }
}