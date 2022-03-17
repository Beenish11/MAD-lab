//functions to check if string is palindrome or not
function checkPalindrome(str){
    const len=string.length;
    for(let i=0; i<len/2; i++){
        if(string[i] !== string[len-1-i])
        {
            return "It is not a palindrome";
        }
    }
    return "It ios a palindrome";

}
const string= prompt("Enter a string: ");
const value= checkPalindrome(string);
console.log(value);
