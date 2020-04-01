/* 
 * Summer Camp
 */

var kidsWhoWantToSwim=25;
var kidsWhoWantToDoArchery=5;
var conciseVariableNamesPresentInThisFile=false;
var totalSwimmers=0;
var totalArchers=0;

if (kidsWhoWantToSwim%2===0) //even
{
    totalSwimmers=kidsWhoWantToSwim;
    totalArchers=kidsWhoWantToDoArchery;
} 
else //odd
{
    totalArchers=kidsWhoWantToDoArchery+kidsWhoWantToSwim;
}

console.log("kids who want to swim = %s", kidsWhoWantToSwim);
console.log("kids who want to do archery = %s", kidsWhoWantToDoArchery);
console.log("total swimmers today = %s", totalSwimmers);
console.log("total archers today = %s", totalArchers);