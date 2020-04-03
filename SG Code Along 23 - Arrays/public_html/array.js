/* 
 * arrays
 */

//1 - max in array
/** arrayMax(array)
 * Process an array and find the max
 * @param {array} array
 * @returns {Number|float|int} max num, if only 1 element then return it as is
 */
function arrayMax(array)
{
    var max;

    if (array.length == 1)
    {
        max = array[0];
        return max;
    } 
    else
    {
        for (var i = 0; i < array.length - 1; i++)
        {
            var current = array[i];
            var next = array[i + 1];

            max = current;

            if (next > current)
            {
                max = next;
            }
        }
    }

    return max;
}

console.log("arrayMax =====");
var num = [46, 3, 40, 74, 63];
var numMax = arrayMax(num);
console.log("Max of " + num + ": " + numMax);

var num = [3, 3, 3, 3];
var numMax = arrayMax(num);
console.log("Max of " + num + ": " + numMax);

var num = [-1];
var numMax = arrayMax(num);
console.log("Max of " + num + ": " + numMax);

//2 - concentate array
function concenArrays(arr1, arr2)
{
    var combinedArr=new Array();
    
    for (var i = 0; i < arr1.length; i++) 
    {
        combinedArr.push(arr1[i]);
    }
    for (var i = 0; i < arr2.length; i++) 
    {
        combinedArr.push(arr2[i]);
    }
    
    return combinedArr;
}

console.log("concenArr =====");
var merged=concenArrays(["Oak", "Maple", "Birch"], ["Hydrogen", "Helium"]);
console.log("Combined array: " + merged);

var merged=concenArrays([12.5, 3, 855], [true, false, true]);
console.log("Combined array: " + merged);

var merged=concenArrays(["Saturn"], ["Black Lab", "Borzoi", "Pug"]);
console.log("Combined array: " + merged);
