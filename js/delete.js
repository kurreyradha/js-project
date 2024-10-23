function mydel(myid)
{
    let api=`http://localhost:3000/Employee/${myid}`



  fetch(api, { method: 'DELETE' }).then((res)=>{
    alert("Record Deleted!!!");
  })
  
}



async function Display()
{


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
        
       Table+=` <tr>
         <td> ${key.Ename} </td>
        <td> ${key.Esalary} </td>
        <td> ${key.Ebonus} </td>
        <td> ${key.city} </td>
        <td> ${key.mobileno} </td>
                  <td>
                  <a href="#" onclick="mydel('${key.id}')">

                    <img src="image/del.jpeg" width="30" height="30" >
                  </a>
                  </td>
                </tr>  
            `
        
   })
 Table+="</table>"
 document.getElementById("demo").innerHTML=Table;
}

Display();