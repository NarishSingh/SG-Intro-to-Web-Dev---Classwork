/* For Loops */
//0
console.log("For 1-7:");
for (var i = 1; i <= 7; i++) 
{
    console.log(i);
}

//1
console.log("For 1-10:");
for (var i = 1; i <= 10; i++) 
{
    console.log(i);
}

//2
console.log("For 2-12 by twos:");
for (var i = 2; i <= 12; i=i+2) 
{
    console.log(i);
}

//3
console.log("6-1 backwards:");
for (var i = 6; i >= 1; i--) 
{
    console.log(i);
}

//4
var limit=10;
var sum=0;
console.log("Sum of evens 1-10:");
for (var i = 0; i <= limit; i++) 
{
    if(i%2===0)
    {
        sum+=i;
    }
}
console.log(sum);

//5
var winniesFaveNum=53;
var kaisFaveNum=44;
var numW=0;
var numK=0;

for (var i = 0; i < winniesFaveNum; i++) 
{
    numW++;
}
console.log("Winnie's favorite number is: " + numW);

for (var i = 0; i < kaisFaveNum; i++) 
{
    numK++;
}
console.log("Kai's favorite number is: " + numK);

/* While Loops */
//0
console.log("For 1-7:");
var firstLoop=1;
while(firstLoop<=7)
{
    console.log(firstLoop);
    firstLoop++;
}

//1
console.log("For 1-10:");
var secondLoop=1;
while(secondLoop<=10)
{
    console.log(secondLoop);
    secondLoop++;
}

//2
console.log("For 2-12 by twos:");
var thirdLoop=2;
while(thirdLoop<=12)
{
    if (thirdLoop%2===0) {
        console.log(thirdLoop);
    }
    
    thirdLoop++;
}

//3
console.log("6-1 backwards:");
var fourthLoop=6;
while(fourthLoop>=1)
{
    console.log(fourthLoop);
    fourthLoop--;
}

//4
var fifthLoop=1;
var fifthSum=0;
while (fifthLoop<=10) 
{
    if (fifthLoop%2===0) 
    {
        fifthSum+=fifthLoop;
    }
    
    fifthLoop++;
}
console.log("Sum of evens 1-10: " + fifthSum);

//5
var counterW=0;
var counterK=0;

while (counterW<=winniesFaveNum) 
{
    counterW++;
}
console.log("Winnie's favorite number is: " + counterW);

while (counterK<=kaisFaveNum) 
{
    counterK++;
}
console.log("Kai's favorite number is: " + counterK);