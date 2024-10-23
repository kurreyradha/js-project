async function dataDisplay()
{
    let Table=`"<div id="tablemain">"<table width="900px" border='1' bgcolor="pink" height="300px"> 
              <tr>
              <th>Ename</th>
              <th>Esalary</th>
              <th>Ebonus</th>
              <th>city</th>
              <th>mobileno</th>
              </tr>;
    `
   let api="http://localhost:3000/Employee";

   let myObj=await fetch(api);
   let mydata=await myObj.json();

   mydata.map((key)=>{
        Table+=`
        <tr bgcolor="yellow">
        <td> ${key.Ename} </td>
        <td> ${key.Esalary} </td>
        <td> ${key.Ebonus} </td>
        <td> ${key.city} </td>
        <td> ${key.mobileno} </td>
        </tr>
        `;
   })
Table+="</table>";
"</div>";
   document.getElementById("demo").innerHTML=Table;
}
dataDisplay();