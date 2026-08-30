var Name = prompt("Enter your name:");
var phone = prompt("Enter your phone number (8 digits):");
var mobile = prompt("Enter your mobile number (11 digits, starts with 010/011/012):");
var email = prompt("Enter your email:");
var valid = true;
var message="";
if (isFinite(Name)) 
{
    valid = false;
   message+= " Name should be string not numbers\n"
}
if(isNaN(phone)||phone.length!=8)
{
  valid=false;
    message+="phone number should be number and 8 digits\n";
}
if(isNaN(mobile)||mobile.length!=11||mobile.startsWith("010")||mobile.startsWith("011")||mobile.startsWith("012"))
{
    valid=false;
    message+="mobile number should be number & 11 digits & starts with 010 or 011 or 012\n"
}
var pattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!pattern.test(email))
{
    valid=false;
    message+="email isn't valid\n";
}
if(valid==true)
{
    alert ("welcome"+Name+ "your email is "+email+"your phone is "+phone+"your mobile is "+mobile)
}
else{
    alert(message)
}