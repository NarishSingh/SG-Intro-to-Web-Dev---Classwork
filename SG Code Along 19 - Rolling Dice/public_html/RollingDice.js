/* 
 * Math and Dice functions
 */

//algorithm
console.log(Math.random());
console.log(Math.random()*6);

for (var i = 0; i < 100; i++) 
{
    console.log(Math.floor(Math.random()*6)+1); //floor & +1 ensures range is 1-6 as it rounds to nearest WHOLE num
}

/** rollDice()
 * Roll a 6 sided die
 * @returns {Number|int} 1-6
 */
function rollDice()
{
    return Math.floor((Math.random()*6)+1);
}

for (var i = 0; i < 100; i++) 
{
    console.log(rollDice());
}

var numSides=prompt("How many sides does the die have?");
/** rollDice(numSides)
 * Rolls a many sided dice, sides from user prompt
 * @param {Number|int} numSides 
 * @returns {Number|int|undefined}
 */
function rollDice(numSides)
{
    return Math.floor(Math.random()*numSides)+1;
}

for (var i = 0; i < 100; i++) 
{
    console.log(rollDice(numSides));
}