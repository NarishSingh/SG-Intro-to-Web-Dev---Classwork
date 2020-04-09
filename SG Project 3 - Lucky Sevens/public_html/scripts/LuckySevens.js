/* Lucky Sevens Game
 * Roll dice
 * hit 7 = win $4
 * no 7 = lose $1
 */
const WIN_AMOUNT = 4.00;
const LOSS_AMOUNT = 1.00;
var peakEarn = {
    amount = 0,
    turn = 0
};

/** roll()
 * Roll 2 Dice
 * @returns {Number|Int} 2-12 
 */
function roll()
{
    var num1 = Math.floor(Math.random() * 6 + 1);
    var num2 = Math.floor(Math.random() * 6 + 1);
    var rollTotal = num1 + num2;

    return rollTotal;
}

/** biggestBank(nextEarn)
 * Track the biggest bank for player
 * @param {Number|Float} nextEarn - total earnings every roll
 * @param {Number|Int} currentTurn - roll count 
 * @returns {void}
 */
function biggestBank(nextEarn, currentTurn)
{
    if (nextEarn > peakEarn.amount)
    {
        peakEarn.amount = nextEarn;
        peakEarn.turn = currentTurn;
    }
}

/*HIGHEST EARNING WITH ROLL COUNT*/

/*-----------------------------------------------*/
/** play()
 * Main gameplay loop
 * @returns {void}
 */
function play()
{
    /*STARTING BET DISPLAY*/
    var bet = Number(document.getElementById("buyin").value);
    if (bet < 0.01 || isNaN(bet))
    {
        alert("Please enter valid bet amount");
        return;
    }
    document.getElementById("buyinDisplay").innerText = "$" + bet;

    /*GAMEPLAY LOOP*/
    var bank = bet;
    var bigBank;
    var rollCt = 0;
    while (bank > 0)
    {
        //roll
        var round = roll();
        rollCt++;

        //w/l
        if (round === 7)
        {
            bank += WIN_AMOUNT;
        } else
        {
            bank -= LOSS_AMOUNT;
        }

        //track best earning
        biggestBank(bank, rollCt);
    }

    /*RESULTS SHOW*/
    document.getElementById("totalRolls").innerText = rollCt; //display total rolls
    document.getElementById("highestEarning").innerText=peakEarn.amount;
    document.getElementById("highestEarningRollCount").innerText=peakEarn.turn;
}
