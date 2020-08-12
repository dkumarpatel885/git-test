var rect=require('./reactangle')

function solverect (l,b){
    console.log("value of the l"+ l +" b =" +b);
    if(l <1 || b<1)
    {
        console.log("please enter something else")
    }
    else{
        console.log("area"+ rect.area(l,b));
        console.log("perimeter"+ rect.perimeter(l,b));
    }
}

solverect(3,4);
solverect(6,8);
solverect(12,45);