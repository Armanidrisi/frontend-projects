let button = document.querySelector("button");
let showAge = document.getElementById("show_age");
let dateOfBirth = document.querySelector("input");
button.addEventListener("click",(e)=>{
    e.preventDefault();
    const today = new Date();
    const dob = new Date(dateOfBirth.value)
    let age = today.getFullYear() - dob.getFullYear();
    const month = today.getMonth() - dob.getMonth();
    const date = today.getDate() - dob.getDate();
    
    if(dateOfBirth.value =="") 
        alert("Please enter your birthday");
    
    else {
        
        if(today.getMonth() < dob.getMonth() || today.getDate() < dob.getDate()){
            age--;
        
        showAge.innerText = `Your age is ${age} years old`
        
        }

        

        else {
         
            if(today.getMonth() > dob.getMonth() || today.getDate() > dob.getDate()){
                age--;
            }

        showAge.innerText = `Your age is ${-age} years old`

        }

    }


})