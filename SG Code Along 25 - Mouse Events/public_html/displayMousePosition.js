/* 
 * functions to display mouse position
 * Challenge:
 * Add a second button to toggle tracking. Be sure to visually update all buttons to show if tracking is enabled or disabled.
 * Enable or disable tracking when you click anywhere in the document. Again, visually indicate the current status.
 * Don't track the mouse over the whole document. Instead, limit it to certain elements. Create hot-spots. For example, limit mouse tracking to a new div, just buttons, or headings.
 */

var tracking = false;
var mouseX = document.getElementById("mouseX");
var mouseY = document.getElementById("mouseY");

/** toggle()
 * Change toggle button and handle tracking bool
 * @returns {void}
 */
function toggle()
{
    //for button and text feedback
    if (tracking)
    {
        this.classList.remove("btn-danger");
        this.classList.add("btn-success");
        this.innerText = "Start mouse tracking";

        mouseX.innerText = "Untracked";
        mouseY.innerText = "Untracked";
    } else
    {
        this.classList.add("btn-danger");
        this.classList.remove("btn-success");
        this.innerText = "Stop mouse tracking";
    }

    tracking = !tracking;
}

/** toggleContainer()
 * Challenge - global toggle within container by reversing tracking bool on click
 * @returns {void}
 */
function toggleContainer()
{
    tracking = !tracking;
}

/** updateMousePos(evt)
 * If tracking is true, update mouse coordinates
 * @param {Event} evt
 * @returns {void}
 */
function updateMousePos(evt)
{
    if (tracking)
    {
        mouseX.innerText = evt.clientX;
        mouseY.innerText = evt.clientY;
    }
}

//add event listeners
document.getElementById("btnToggle").addEventListener("click", toggle);
document.addEventListener("mousemove", updateMousePos);

//challenge #2
/*
 document.addEventListener("click", toggleContainer);
 document.addEventListener("mousemove", updateMousePos);
 */

//Challenge #3 - for heading - doesn't work
/*
document.getElementById("btnToggle").addEventListener("click", toggle);
document.getElementsByTagName(h1).addEventListener("mousemove", updateMousePos);
*/
