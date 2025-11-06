function intSequence(first, last){
    if (first <= last){
        while (first <= last) {
            console.log(first);
            first++;
        }
    }
    if (first >= last){
        while (first >= last) {
            console.log(first);
            first--;
        }
    }
    else {
        console.log("Both are equal");
    }
}

intSequence(10,20);
intSequence(20,10);