
//DOM elements

const  passwordInput = document.getElementById("password");
const passwordConfirmInput = document.getElementById("confirm-password");
const submitButton = document.querySelector(".submit-button");
const passwordError = document.querySelector(".password-error");

let visible = false;
//
passwordConfirmInput.addEventListener("input",showError);
passwordInput.addEventListener("input",showError)

submitButton.addEventListener("click",(e)=>{
    if(passwordInput.value !== passwordConfirmInput.value){
        e.preventDefault();
    }
})


function showError (){
    if(passwordInput.value !== passwordConfirmInput.value){
        
        //prevent the default behavior that is to submit the form
        
        if(!visible){
            passwordError.classList.remove("invisible");
            passwordError.classList.add("visible");
            visible = true;

        }

    }
    else if (passwordConfirmInput.value === passwordInput.value){
        if(visible){
            passwordError.classList.remove("visible");
            passwordError.classList.add("invisible");
            visible = false;
        }
    }
}