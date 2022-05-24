/**
 * the score of the player
 * at the beginning this is set to 0 and increases every time you activate levelPassed
 * @type {number}
 * @example
 * // the player wins 1000 points
 * score = score + 1000;
 * // or
 * score += 1000;
 */
var score = 0;

/**
 * adds the addToScore to the score.
 * if isFirstLevel is true it'll go back to default_level otherwise it'll pick a random level from the level_functions in levels.conf.js file
 * You don't have to tell it isFirstLevel and neither addToScore.
 * By default addToScore is 1 and isFirstLevel is set to false
 * @param {number=} addToScore 
 * @param {boolean=} isFirstLevel 
 * @example
 * // the player passed the level and gets a score of 2
 * levelPassed(2);
 */
function levelPassed(addToScore = 1, isFirstLevel = false){
    if(isFirstLevel){
        default_level();
        return;
    }
    scene.removeAll(() => {
        score += addToScore;
        level_functions.pickRandom()();
    });
}
/**
 * if isFirstLevel is true it'll not remove any objects from the scene and initialize default_level
 * You don't have to tell it isFirstLevel.
 * The default for isFirstLevel is false
 * @param {boolean=} isFirstLevel 
 * @example
 * // The user failed the game
 * levelFailed();s
 */
function levelFailed(isFirstLevel = false){
    if(isFirstLevel){
        default_level();
        return;
    }
    scene.removeAll(() => {
        default_level();
    });
}

window.addEventListener("load", () => {
    default_level();
});