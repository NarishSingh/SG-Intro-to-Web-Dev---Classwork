/* 
 * Practice creating functions
 */

//1 - Addition
function addTwoNum(first, second)
{
    return first+second;
}

console.log("addTwoNum ====");
var result=addTwoNum(2,2);
console.log("2+2 = %s", result);
result=addTwoNum(33,44);
console.log("33+44 = %s", result);
result=addTwoNum(112,0);
console.log("112+0 = %s", result);
result=addTwoNum(-53,40);
console.log("-53+40 = %s", result);

//2 - 1st char in string
function get1stChar(text)
{
    if(text.length>=1)
    {
        return text[0];
    }
    else
    {
        console.alert("Cannot process string...");
    }
}

console.log("get1stChar ====");
console.log("'strawberry': %s", get1stChar("strawberry"));
console.log("'above the sea': %s", get1stChar("above the sea"));
console.log("'Starling': %s", get1stChar("Starling"));
console.log("'Olympus Mons': %s", get1stChar("Olympus Mons"));

//3 - Max of 3 arg's
function maxOf3(first, second, third)
{
    if(first>second && first>third)
    {
        return first;
    }
    else if(second>first && second>third)
    {
        return second;
    }
    if(third>first && third>second)
    {
        return third;
    }
    else
    {
        console.alert("Invalid inputs...");
    }
}

console.log("maxOf3 ====");
console.log("max(-1,0,1): %s", maxOf3(-1,0,1));
console.log("max(11,2,1): %s", maxOf3(11,2,1));
console.log("max(-15.67,33.293,0.51): %s", maxOf3(-15.67,33.293,0.51));
console.log("max(4,987654321,0): %s", maxOf3(4,987654321,0));