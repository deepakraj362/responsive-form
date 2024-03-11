const form = document.querySelector('#form')
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const course = document.querySelector('#course');


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    validateInputs();

})

function validateInputs(){
    const usernameVal = username.value.train()
    const emailVal = email.value.train();
    const passwordVal = password.value.train();
    const courseVal = course.value.train();

    if(usernameVal===''){
        setError(username,'username is required')
    }
    else{
        setSuccess(username)
    }
    if(emailVal===''){
        setError(email,'email is required')
    }
    else if(!validateEmail(emailVal)){
        setError(email,'please enter a valid email')
    }
    else{
        setSuccess(email)
    }
    if(passwordVal===''){
        setError('password is required')
    }
    else if(passwordVal.length<8){
        setError(password,'password must be atleast 8 characters long')
    }
    else{
        setSuccess(password)
    }
    if(courseVal===''){
        setError(course,'course is required')
    }
    else if(courseVal){
        setError(course,'please enter a valid course')
    }
    else{
        setSuccess(course)
    }



}

function setError(element, message){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = message;
    inputGroup.classlist.add('error')
    inputGroup.classlist.remove('success')

}

function setSuccess(element){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = '';
    inputGroup.classlist.add('success')
    inputGroup.classlist.remove('error')

}
const validateEmail = (email)=> {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
};