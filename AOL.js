function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}

function ValidationData(){
    let username= document.getElementById
    ('username')
    let email= document.getElementById
    ('email')
    let date= document.getElementById
    ('date')
    let month= document.getElementById
    ('month')
    let year= document.getElementById
    ('year')
    let acc= document.getElementById
    ('acc')
    let errorMassage= document.getElementById
    ('errorMassage')
    let male= document.getElementById('male')
    let female= document.getElementById('female')

    errorMassage.style.color= "red"

    if(username.value == "" || email.value == "" || date.value== "" || month.value== ""){
        errorMassage.textContent= "All form field must be fill"
    }
    else if(!email.value.endsWith('@gmail.com')){
        errorMassage.textContent=  "Email must end with @gmail.com"
    }
    else if(date.value>31 || date.value<1 ){
        errorMassage.textContent= "Date Must contain 1 until 31"
    }
    else if(month.value>12 || month.value<1 ){
        errorMassage.textContent= "Must contai 1 until 12"
    }
    else if(year.value>=2006){
        errorMassage.textContent= "Must 18 years old"
    }
    else if(!acc.checked){
        errorMassage.textContent= "must agree"
    }
    else if(!male.checked && !female.checked){
        errorMassage.textContent= "gender must checked"
    }
    else{
        errorMassage.style.color= "Green"
        errorMassage.textContent= "form submited"
    }
}
