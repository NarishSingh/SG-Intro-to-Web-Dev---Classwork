/* 
 * Arrays and objects
 */

var test=[0,1,1,"1",3,"311"]; //mixed type array, for demo only

for (var i = 0; i < test.length-1; i++) 
{
    //store for comparison
    var current=test[i];
    var next=test[i+1];
    
    //tests
    console.log("Testing " + current + " and " + next + " (>): " + (current>next));
    console.log("Testing " + current + " and " + next + " (<): " + (current<next));
    console.log("Testing " + current + " and " + next + " (=): " + (current==next));
    
    console.log("Testing " + current + " and " + next + " (strictly =): " + (current===next));
    if(current !== next)
    {
        console.log(current + " is a " + typeof current);
        console.log(next + " is a " + typeof next);
    }
}
