/* 
SG Self Assessment - Restaurant Site v3
JavaScript Sheet
*/

/*FRONT PAGE IMAGE FUNCTIONS*/
/** fullOpacity()
 * on hover, bring image to full opacity
 * @returns {void}
 */
function fullOpacity()
{
    document.getElementById("frontPageImage").style.opacity="100%";
}

/** restoreOpacity()
 * on mouse out, return to original opacity
 * @returns {void}
 */
function restoreOpacity()
{
    document.getElementById("frontPageImage").style.opacity="50%";
}