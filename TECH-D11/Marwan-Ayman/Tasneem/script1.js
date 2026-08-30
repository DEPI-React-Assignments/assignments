var word=prompt("enter the word:");
var palindrome=prompt("Do you want to consider palindrome?(yes/no) ");
if(palindrome=="no")
{
    word=word.toLocaleLowerCase();
}
var reverse = word.split("").reverse().join("");

if(word==reverse)
{
    alert("The word is a palindrome")
}
else
{
    alert("The word isn't a palindrome")
}