function makeCustard (clbk){
    const ingredients = ['custard vanilla flavoured powder', 'moi moi', 'hot water'];

    console.log('Going to get missing items');

    setTimeout (function(){
        const missingIngredients = 'milk';
        clbk(ingredients, missingIngredients);
    }, 10000);
}

makeCustard((ingredients, missingIngredients) => {
    console.log('Preparing custard with', ingredients, 'and', missingIngredients)
});

console.log('Process began');