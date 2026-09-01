var num;
while (true)
{
    num=prompt("enter number of persons: ")
    num=parseInt(num)
    if(isNaN(num)||num==""||num<=0)
        alert("invalid number")
    else
        break;
}
var users =[]

 for (var i=0;i<num;i++)
 {
    var name;
    var age;
    while (true)
    {
        name=prompt("Enter person's name: ")
        if(name.length<3 || name.length>10)
            alert ("name must contain from 3 to 10 letters only and must be string");
        else
            break;
    }
    while (true)
    {
        age=prompt("enter person's age: ")
        age=parseInt(age)
        if (age<10||age>60||isNaN(age)||age=="")
            alert("age must be from 10 to 60 and must be number ")
        else
            break
    }
    users.push({name,age})
 }
var table ="<table border='1'><tr><th>Name</th><th>Age</th></tr>"
for (var j=0;j<users.length;j++)
    table+="<tr><td>"+users[j].name +"</td><td>"+users[j].age+"</td></tr>"
table+="</table>" 
document.getElementsByTagName("div")[0].innerHTML=table;