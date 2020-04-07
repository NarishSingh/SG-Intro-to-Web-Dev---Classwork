/* ANIMATION HANDLING */
let button = document.getElementById("button");
const dice1 = document.querySelector(".dice1");
const dice2 = document.querySelector(".dice2");

let userRoll;
const userRollLimit = 10;
let rollCount = 0;

button.addEventListener("click", anim);

/** anim()
 * Rolling dice animation
 * @returns {void}
 */
function anim()
{
    //randomizer for dice rolls
    let num1 = Math.floor(Math.random() * 6 + 1);
    let num2 = Math.floor(Math.random() * 6 + 1);
    userRoll = num1 + num2;
    rollCount++;

    //display and animate
    //dice 1
    dice1.classList.add('animated', 'flipOutX', 'faster');
    document.querySelector(".dice1").src = `images/dice-${num1}.gif`;
    dice1.addEventListener('animationend', remAnim());
    //dice 2
    dice2.classList.add('animated', 'flipInX', 'faster');
    document.querySelector(".dice2").src = `images/dice-${num2}.gif`;
    dice2.addEventListener('animationend', remAnim());
}

/** remAnim()
 * Remove animation styles
 * @returns {void}
 */
function remAnim()
{
    dice1.classList.remove('animated', 'flipOutX', 'faster');
    dice2.classList.remove('animated', 'flipInX', 'faster');
}

/* GAMEPLAY */
let gamePlay = false; //might not be needed...
let winCount = 0;
let lossCount = 0;

//Display the player's goal
/** winningRoll()
 * Randomize the player goal
 * @returns {Number} 2-12 for 2 dice
 */
function winningRoll()
{
    let rollTo = Math.floor(Math.random() * 12 + 1);

    //2 Dice cannot reach a total of 1, set to 2
    if (rollTo === 1)
    {
        rollTo++;
    }

    return rollTo;
}

let rollToWin = winningRoll(); //how comp tracks the round goal for rolling
let win = document.getElementById("winningRoll");
win.innerText = rollToWin;

//main gameplay loop
if (rollCount < userRollLimit && userRoll === rollToWin)
{
    alert("You win!!!");
    winCount++;

} 
else if (rollCount < userRollLimit)
{
    document.getElementById("keepRolling").style.display="block";
}
else
{
    //loss
    alert("You lose!!!");
    lossCount++;
}

//display win/loss count --> HTML