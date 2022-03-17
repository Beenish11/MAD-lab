//Challenge 1 : Yours Age in Days
function ageInDays() {
    var birthYear = prompt('What year were you born... Good Friend ');
    var ageInDayss =  (2022 - birthYear) * 365;
    var h1 = document.createElement("h1");
    var textAnswer = document.createTextNode("You are  " + ageInDayss + "  days old ");
    h1.setAttribute('id','ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset(){
    document.getElementById('ageInDays').remove();
}