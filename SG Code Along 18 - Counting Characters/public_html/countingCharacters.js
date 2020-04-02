/* 
 * char counter functions
 */

/** countingChars(stringToCount)
 * Count chars in a string
 * @param stringToCount
 * @returns prints string and the number of chars in string
 */
function countingChars(stringToCount)
{
    console.log(stringToCount + " has " + stringToCount.length + " chars");
}

countingChars("cake");

var portalString = "The cake is a lie";
countingChars(portalString);

/** countingChars2(stringToCount, charToFind)
 * counts for a char in string
 * @param {string} stringToCount
 * @param {string} charToFind - only 1 char
 * @returns prints statements on args and reports num of char in string
 */
function countingChars2(stringToCount, charToFind)
{
    var charCt = 0;

    for (var i = 0; i < stringToCount.length; i++)
    {
        if (stringToCount[i] === charToFind)
        {
            charCt++;
        }
    }

    console.log("String to search in: " + stringToCount);
    console.log("Char to find: " + charToFind);
    console.log("Number of times the char appears: " + charCt);
}

countingChars2("xxaxxxbxx", "x");

/** countingChars3(str, search)
 * Count number of times a substring comes up
 * @param {string} str
 * @param {string} search
 * @returns prints statements on args and reports occurences of a substring
 * @returns {int} ct 
 */
function countingChars3(str, search)
{
    var ct = 0;
    var numChars = search.length;

    var lastIndex = str.length - numChars; //need to stop loop based on multiple chars

    for (var i = 0; i <= lastIndex; i++)
    {
        var current = str.substring(i, i + numChars);
        if (current == search)
        {
            ct++;
        }
    }

//    console.log("String to search: ", + str);
//    console.log("Char to find: ", + search);
//    console.log("Number of times the char appears: ", + ct);
    return ct;
}

//countingChars3("xxaxxxbxx", "xx");
console.log(countingChars3("xxaxxxbxx", "xx"));

