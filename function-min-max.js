function minMax(a, b){
    if (a >= b){
        console.log("" + a + " " + "is bigger than" + " " + "" + b);
    }
    if (b >= a){
        console.log ("" + b + " " + "is bigger than" + " " + "" + a);
    }
    else {
        console.log("Both are equal");
    }
}

minMax(7,11);
minMax(9,2);