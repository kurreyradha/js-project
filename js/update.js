async function editSave(id){

    let Ename=document.getElementById("en").value;
    let Esalary=document.getElementById("es").value;
    let Ebonus=document.getElementById("eb").value;
    let city=document.getElementById("ec").value;
    let mobileno=document.getElementById("em").value;
  
  
    let api=`http://localhost:3000/Employee/${id}`;
  
  
    fetch(api,{
      method: "PATCH",
      headers: {
          "Content-Type" : "application/json"
        },
      body: JSON.stringify(
        {
          Ename:Ename,       
          Esalary: Esalary,
          Ebonus:Ebonus,
          city: city,
          mobileno:mobileno
        }
      )
    })
    .then(json => {
      alert("Data updated!!!");
    });
  }
  
  async function editDisplay(myid)
  {
    let api=`http://localhost:3000/Employee/${myid}`
  
    let Obj= await fetch(api);
    let Data=await Obj.json();
  
    myForm=`
             <input type="text" placeholder="Ename " id="en" value="${Data.Ename}">
            <br>
             <input type="text" placeholder="Esalary" id="es" value="${Data.Esalary}">
            <br>
             <input type="text" placeholder="Ebonus" id="eb" value="${Data.Ebonus}">
            <br>
             <input type="text" placeholder="Ecity" id="ec" value="${Data.city}">
            <br>
            <input type="text" placeholder="mobileno" id="em" value="${Data.mobileno}">
            <br>
            <button onclick="editSave('${Data.id}')"> Edit Save! </button>
    `
    document.getElementById("demo1").innerHTML=myForm;
  }
  
  
  
  
  async function dataDisplay()
  {
   let Table=`<table width="90%" border="1" bgcolor="pink">
                <tr bgcolor="orange">
                  <th> Ename </th>
                  <th> Esalary </th>
                  <th> Ebonus </th>
                  <th> city </th>
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
                    <td>${key.mobileno}</td>
                     <td> 
                     
                     <a href="#" onclick="editDisplay('${key.id}')">
                       <img src="image/edit.png" width="30" height="30" >
                     </a>
                     </td>
                  </tr>  
              `
  
     })
   Table+="</table>"
   document.getElementById("demo").innerHTML=Table;
  
  }
  dataDisplay();





