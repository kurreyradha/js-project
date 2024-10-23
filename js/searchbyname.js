document.getElementById("en").addEventListener("keyup",searchbyname);

async function searchbyname(){
let Ename=document.getElementById("en").value;
let Table=`<table width="90%" border="1" bgcolor="pink">
<tr bgcolor="orange">
  <th>Ename</th>
  <th>Esalary</th>
 <th>Ebonus</th>
 <th>city</th>
<th>mobileno</th>
 </tr> 
`

let api="http://localhost:3000/Employee";

let myObj= await fetch(api);
let myData= await myObj.json();

myData.map((key)=>{
let str=key.Ename;
let myval=str.includes(Ename);


if (myval==true)
{
Table+=` <tr>
   <tr bgcolor="yellow">
        <td> ${key.Ename} </td>
        <td> ${key.Esalary} </td>
        <td> ${key.Ebonus} </td>
        <td> ${key.city} </td>
        <td> ${key.mobileno} </td>
  </tr>  
`
}       
})
Table+="</table>"
document.getElementById("demo").innerHTML=Table;
}