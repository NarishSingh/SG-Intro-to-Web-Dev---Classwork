/* 
 * Display even numbers in user defined range via a increment
 */

//get and cast user inputs to numbers
var inputs=document.forms["inputs"];
var start = Number(document.getElementById("start"));
var end = Number(document.getElementById("end"));
var step = Number(document.getElementById("step"));
var results=document.getElementById("results");
var displayEvens=document.getElementById("displayEvens");

/** validate()
 * Validate form
 * @returns {Boolean} always false to stop reload
 */
function validate()
{
    inputs.className = "needs-validation";

    if (!inputs.checkValidity())
    {
        inputs.className = "was-validated";
        return false;
    }
    
    //fill in spans for inputs and results
    document.getElementById("userStart").innerText=start;
    document.getElementById("userEnd").innerText=end;
    document.getElementById("userStep").innerText=step;
    document.getElementById("resultsArray").innerText=evensInStep();
    
    results.style.display="block";
    displayEvens.innerText="New Range";

    return false;
}

/** evensInStep()
 * Push all possible step values in range in an array, then find even step values in range
 * @returns {Array} within range, all even and incremented values
 */
function evensInStep()
{
    var stepValues = new Array();
    var evenStepValues = new Array();

    for (var i = start; i <= end; i += step)
    {
        stepValues.push(i);
    }

    for (var i = start; i <= end; i++)
    {
        if (i % 2 === 0 && i === stepValues[i])
        {
            evenStepValues.push(i);
        }
    }

    return evenStepValues;
}