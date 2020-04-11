/* 
 * functions for form validation/reset and the calculations
 */

//define vars --> grab form and elements by name
var numberFun=document.forms["numberFun"];
var num1=document.getElementById("num1");
var num2=document.getElementById("num2");
var results=document.getElementById("results");
var submitButton=document.getElementById("submitButton");

/** validate()
 * Validate form and do the calculations
 * @returns {Boolean} - always false since a true submit will cause page to reload
 */
function validate()
{
    numberFun.className="needs-validation"; //clears any previous validation
    
    //if any elem is invalid, add the validation psuedoclasses to inform user
    if (!numberFun.checkValidity()) 
    {
        numberFun.className="was-validated";
        return false;
    }
    
    //forms always get strings --> cast as int
    var operand1=parseInt(num1.value,10);
    var operand2=parseInt(num2.value,10);
    
    //quick maths
    document.getElementById("addResult").innerText=operand1+operand2;
    document.getElementById("subtractResult").innerText=operand1-operand2;
    document.getElementById("multiplyResult").innerText=operand1*operand2;
    document.getElementById("divisionResult").innerText=operand1/operand2;
    
    results.style.display="block";
    submitButton.innerText="Recalculate";
    
    return false;
}

/** resetView()
 * resets the form
 * @returns {void}
 */
function resetView()
{
    numberFun.className="needs-validation";
    results.style.display="none";
    submitButton.innerText="Calculate";
    num1.focus();
}