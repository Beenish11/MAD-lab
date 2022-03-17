var newArray = ['a','b','c','d'];
newArray.push(response);

for (var i = 0; i < theArray.length; i++) {
    newArray.push(theArray[i]);
}

newArray.unshift(response);

for (var i = 0; i < theArray.length; i++) {
    newArray.unshift(theArray[i]);
}


theArray = newArray;