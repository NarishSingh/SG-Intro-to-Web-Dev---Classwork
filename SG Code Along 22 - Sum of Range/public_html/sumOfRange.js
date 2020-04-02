/* 
 * Array processing
 * parseInt
 */

var test=[17,42,311,5,9,10,28,7,6];
var sum=0;
//var userElem=prompt("Enter a number of your choice: ");

//test.push(50);
//test.push(parseInt(userElem)); //w/o parseInt it would show as 435___ with the number concen like a string

for (var i = 0; i < test.length; i++) 
{
    sum+=test[i];
}

console.log("The sum of " + test + " is: " + sum);

//challenge
var userArray=new Array();
var userSum=0;
var entering=true;
var count=0;

//for loop bugs out sometimes for some reason?
/*
for (var i = 0; i < 5; i++) 
{
    var newElem=prompt("Enter a number of your choice: ");
    userArray.push(parseInt(newElem));
}
*/

while(entering)
{
    var newElem=prompt("Enter a number of your choice: ");
    userArray.push(parseInt(newElem));
    count++;
    
    if(count==5)
    {
        break;
    }
}

for (var i = 0; i < userArray.length; i++) 
{
    userSum+=userArray[i];
}

console.log("The sum of " + userArray + " is: " + userSum);
