const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "1234567890";
const symbolSet = "~!@#$%^&*()_+/";

// SELECTORS

const passwordInput = document.getElementById("passBox");
const upperInput = document.getElementById("upper-case");
const lowerInput = document.getElementById("lower-case");
const numberInput = document.getElementById("numbers");
const symbolInput = document.getElementById("symbols");
const btn = document.getElementById("btn");
const range = document.getElementById("range");
const rangeValueDisplay = document.getElementById("password-length");
const copyIcon = document.getElementById('copy');

// change of password length on range value chagne
range.addEventListener("input", () => {
  rangeValueDisplay.textContent = range.value;
});


// function for generating password
function generatePassword(){
    
    let password = "";
    let allcharacter = "";
    
    allcharacter += upperInput.checked ? upperSet : "";
    allcharacter += lowerInput.checked ? lowerSet : "";
    allcharacter += numberInput.checked ? numberSet : "";
    allcharacter += symbolInput.checked ? symbolSet : "";

    if(allcharacter == "" || allcharacter.length == 0){
        return password;
    }


    let i = 1;
    while(i<=range.value){
        password  +=  allcharacter.charAt(Math.floor(Math.random() * allcharacter.length));
        i++;
    }

    return password;
    
}


// generating and display password in password inut box by button click function
btn.addEventListener('click', ()=>{
    passwordInput.value = generatePassword();
})

// copying password to clipboard
copyIcon.addEventListener('click', ()=>{

    if(passwordInput.value != "" || passBox.value.length >=1){
        navigator.clipboard.writeText(passwordInput.value);
        copyIcon.classList.add('fa-check')
    }

    setTimeout(()=>{
        copyIcon.classList.remove('fa-check')
    },1500)

})