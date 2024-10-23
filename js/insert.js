document.getElementById("btnsave").addEventListener("click",detailsave)

async function detailsave()
{
   let Ename=document.getElementById("en").value;
   let Esalary=document.getElementById("es").value;
   let Ebonus=document.getElementById("eb").value;
   let Ecity=document.getElementById("ec").value;
   let Emobile=document.getElementById("em").value;


   let api="http://localhost:3000/Employee";


   const response= await fetch(api, {
    method: "POST",
    body: JSON.stringify({ 
      "Ename":Ename,
      "Esalary":Esalary,
      "Ebonus":Ebonus,
      "city":Ecity,
      "mobileno":Emobile
     }),
     headers: {
        "Content-Type": "application/json",
      }
});

console.log(response);
alert("data save!!!");
}