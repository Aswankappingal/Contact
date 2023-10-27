let but=document.getElementById("addContactBtn")
document.getElementById("frm").addEventListener("submit",async(e)=>{
    e.preventDefault();
    // console.log(e);
    let phone=document.getElementById("name").value
    let phonenumber=document.getElementById("phoneNumber").value


    fetch("http://localhost:3006/api/display",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
            name:phone,
            number:phonenumber

        })
    }).then((res)=>{
        console.log(res.status);
        if(res.status==201){
            alert("data added")
        }
        else{
            alert("data not added")

        }

    }).catch((error)=>{
        console.log("errror");
    })
})