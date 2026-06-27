
const form = document.querySelector("#main-form");
const emailInput = document.querySelector("#email");
const emailErrorBox = document.querySelector(".email-field .input-summ");
const emailNoticeIcon = document.querySelector(".email-field .icon");
const passwordInput = document.querySelector("#pass");
const passwordVisibility = document.querySelector(".icon-eye");

// password variables
const passLen = document.querySelector(".length");
const passUpper = document.querySelector(".upper");
const passLower = document.querySelector(".lower");
const passSpecial = document.querySelector(".special");
const passNum = document.querySelector(".num");

const passwordNoticeIcon = document.querySelector(".password-notify");


const lastNameInput = document.querySelector('#Lastname');
const lastNameIcon = document.querySelector('#LastName-icon');

lastNameInput.addEventListener('input', () => {
  if (!isValidName(lastNameInput.value.trim())) {
    lastNameInput.style.border = '1px solid red';
    lastNameIcon.classList.remove('success');
    lastNameIcon.classList.add('error');
    lastNameIcon.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
  } else {
    lastNameInput.style.border = '1px solid #1F9354';
    lastNameIcon.classList.add('success');
    lastNameIcon.classList.remove('error');
    lastNameIcon.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  }
});

// icon
const lengthIcon = passLen.querySelector(".icon");
const upperIcon = passUpper.querySelector(".icon");
const lowerIcon = passLower.querySelector(".icon");
const numIcon = passNum.querySelector(".icon");
const specialIcon = passSpecial.querySelector(".icon");

emailInput.addEventListener("blur", () => {
   console.log('Typing...');
  const email = emailInput.value.trim();

  // check if email is valid
  if (!isValidEmail(email)) {
    emailErrorBox.textContent = "Invalid Email!!";
    emailErrorBox.classList.add("error");
    emailNoticeIcon.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
    emailNoticeIcon.classList.add("error");
    emailInput.style.border='1px solid red';
  } else {
    emailErrorBox.textContent = "Online validation is available";
    emailErrorBox.classList.remove("error");
    emailNoticeIcon.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    emailNoticeIcon.classList.remove("error");
    emailNoticeIcon.classList.add("success");
    emailInput.style.border ='1px solid #1F9354';
  }
});

// password
// visibility
passwordVisibility.addEventListener("click", () => {
  if (passwordInput.classList.contains("hidden-pass")) {
    // add open eye icon
    passwordVisibility.innerHTML = '<i class="fa-solid fa-eye"></i>';
    passwordInput.setAttribute("type", "text");
    passwordInput.classList.remove("hidden-pass");
  } else {
    passwordInput.classList.add("hidden-pass");
    passwordVisibility.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
    passwordInput.setAttribute("type", "password");
  }
});

// password validation
passwordInput.addEventListener("input", () => {
  const password = passwordInput.value.trim();

  // Length
  if (isValidLength(password)) {
    lengthIcon.classList.add("success");
    lengthIcon.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  } else {
    lengthIcon.classList.remove("success");
    lengthIcon.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
  }

  // Contains a number
  if (hasNumber(password)) {
    numIcon.classList.add("success");
    numIcon.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  } else {
    numIcon.classList.remove("success");
    numIcon.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
  }

  // contains a lowercase letter
  if (hasLower(password)) {
    lowerIcon.classList.add("success");
    lowerIcon.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  } else {
    lowerIcon.classList.remove("success");
    lowerIcon.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
  }

  // Contains an uppercase letter
  if (hasUpper(password)) {
    upperIcon.classList.add("success");
    upperIcon.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  } else {
    upperIcon.classList.remove("success");
    upperIcon.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
  }

  // Contains an uppercase letter
  if (hasSpecial(password)) {
    specialIcon.classList.add("success");
    specialIcon.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  } else {
    specialIcon.classList.remove("success");
    specialIcon.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
  }

  if (isValidPassword(password)) {
    passwordNoticeIcon.classList.remove("error");
    passwordNoticeIcon.classList.add("success");
    passwordInput.style.border ='1px solid #1F9354';
    passwordNoticeIcon.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  } else {
    passwordNoticeIcon.classList.remove("success");
    passwordNoticeIcon.classList.add("error");
    passwordInput.style.border='1px solid red';
    passwordNoticeIcon.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
  }
});

// validation Email functions
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  return emailRegex.test(email);
}

function hasNumber(input) {
  return /\d/.test(input);
}

function isValidLength(input) {
  return input.length >= 8;
}

function hasLower(input) {
  return /[a-z]/.test(input);
}

function hasUpper(input) {
  return /[A-Z]/.test(input);
}

function hasSpecial(input) {
  return /[!@#$%^&*(),.?":{}|<>]/.test(input);
}

function isValidPassword(input) {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).{8,}$/.test(input);
}



// confirm password

const confirmPassInput = document.querySelector("#confirm-pass");

const confirmField =  confirmPassInput.closest(".form-control");
 

const confirmErrorBox =  confirmField.querySelector(".input-summ");
 

const confirmPasNoticIcon = confirmField.querySelector(".icon");
  

confirmPassInput.addEventListener("input", () => {

  const confirmPassword =  confirmPassInput.value.trim();

  if (confirmPassInput.value === passwordInput.value ) {

    confirmErrorBox.textContent =
      "Validation password here is matching";

    confirmErrorBox.classList.remove("error");

    confirmPasNoticIcon.innerHTML =
      '<i class="fa-solid fa-circle-check"></i>';

    confirmPasNoticIcon.classList.remove("warn");

    confirmPasNoticIcon.classList.add("success");

   confirmPassInput.style.border ='1.5px solid #1F9354';

  } else {

    confirmErrorBox.textContent =
      "Password does not match";

    confirmErrorBox.classList.add("error");

    confirmPasNoticIcon.innerHTML =
      '<i class="fa-solid fa-circle-exclamation"></i>';

    confirmPasNoticIcon.classList.remove("success");

    confirmPasNoticIcon.classList.add("warm");

    confirmPassInput.style.border ='1.5px solid red';
  }
});


//adding and removing active
const pages = document.querySelectorAll('#page1,#page2,#page3');

const navs = document.querySelectorAll('.form-nav-item');



function showPage(index){

    // hide pages
    pages.forEach(page=>{
        page.style.display='none';
    });


    // remove blue color
    navs.forEach(nav=>{
        nav.classList.remove('active');
    });


    // show page
    pages[index].style.display='block';


    // blue color
    navs[index].classList.add('active');
    
}


// nav clicks

navs.forEach((nav,index)=>{

    nav.addEventListener('click',()=>{
      nav.style.cursor = "pointer"
        showPage(index);
        
    });

});



showPage(0);

// verying page before going to another page


const terms = document.querySelector('#terms');
const privacy = document.querySelector('#privacy');

const nextBtn = document.querySelector('.next1');



function validatePage1(){

    // email
    if(emailInput.value.trim() === ''){
        alert('Email is required');
        return false;
    }


    // password
    if(passwordInput.value.trim() === ''){
        alert('Password is required');
        return false;
    }


    // confirm password
    if(confirmPassInput.value.trim() === ''){
        alert('Confirm password is required');
        return false;
    }



    // password match

    if(passwordInput.value !== confirmPassInput.value){

        alert('Passwords do not match');

        return false;

    }



    // terms


    if(!terms.checked){

        alert('Accept Terms and Conditions');

        return false;

    }



    // privacy


    if(!privacy.checked){

        alert('Accept Privacy Policy');

        return false;

    }


    return true;


}


//button next

document.querySelector('.next1')
.addEventListener('click',()=>{

    // Email
    if(emailInput.value.trim() === ''){
        alert('Email is required');
        emailInput.focus();
        return;
    }

    // Password
    if(passwordInput.value.trim() === ''){
        alert('Password is required');
        passwordInput.focus();
        return;
    }

    // Confirm password
    if(confirmPassInput.value.trim() === ''){
        alert('Confirm Password is required');
        confirmPassInput.focus();
        return;
    }

    // Password match
    if(passwordInput.value !== confirmPassInput.value){
        alert('Passwords do not match');
        confirmPassInput.focus();
        return;
    }

    // Terms
    if(!terms.checked){
        alert('Please accept Terms & Conditions');
        return;
    }

    // Privacy
    if(!privacy.checked){
        alert('Please accept Privacy Policy');
        return;
    }

    // Everything is valid
    document.querySelector('.next1').addEventListener('click',()=>{

    if(validatePage1()){
        showPage(1);
    }

});
});


// -----------------button save and continue----
// document.querySelector('.next1')
// .addEventListener('click',()=>{

//     showPage(1);

// });

// ----------BACK BUTTON--------
document.querySelector('.back1')
.addEventListener('click',()=>{

    showPage(0);

});


document.querySelector('.back2')
.addEventListener('click',()=>{

    showPage(1);

});



//SAVING TO LOCALSTORAGE
const registration = {
  page1: {},
  page2: {},
  page3: {}
};

localStorage.setItem(
'registration',
JSON.stringify(registration)
);



//CLEARING AND SAVING TO LOCALSTORAGE

document.querySelector('.next1').addEventListener('click', () => {

    if(validatePage1()){

        // Create object
        const userData = {
            email: emailInput.value,
            password: passwordInput.value,
            terms: terms.checked,
            privacy: privacy.checked
        };


        // Save
        localStorage.setItem(
            'userData',
            JSON.stringify(userData)
        );


        // Clear form
        emailInput.value = '';
        passwordInput.value = '';
        confirmPassInput.value = '';

        terms.checked = false;
        privacy.checked = false;


        // Next page
        showPage(1);

    }

});


//--------SECOND PAGE--------

// adding number country flag


    // window.intlTelInput(input, {
    //   initialCountry: "ng", // Nigeria default
    //   separateDialCode: true,
    //   preferredCountries: ["ng", "us", "gb"],
    // });

    



  
  
  
  const form2 = document.querySelector('#main-form2');
  
  // --------NAMES-----------
  
const lastName = document.querySelector('#Lastname');
const firstNameBox = document.querySelector('#firstNameBox');
const firstNameIcon = document.querySelector('#FirstName-icon');
// const LastNameIcon = document.querySelector('#LastName-icon');
const firstName = document.querySelector('#firstName');


function isValidName(names) {
 const fitNameRegex = /^[A-Za-z]+$/;

 return fitNameRegex.test(names);
}



firstName.addEventListener('input', () => {
  
  
  // check if name is valid

  if (!isValidName(firstName.value.trim())) {
        firstName.style.border = '1px solid red';
        firstNameIcon.classList.remove('success');
        firstNameIcon.classList.add('error');
        firstNameIcon.innerHTML =
        '<i class="fa-solid fa-circle-xmark"></i>';


    } else {
      firstName.style.border = '1px solid #1F9354';
        firstNameIcon.classList.add('success');
        firstNameIcon.classList.remove('error');
        firstNameIcon.innerHTML =
        '<i class="fa-solid fa-circle-check"></i>';
        
    }

});


lastNameInput.addEventListener('input', () => {
  if (!isValidName(lastNameInput.value.trim())) {
    lastNameInput.style.border = '1px solid red';
    lastNameIcon.classList.remove('success');
    lastNameIcon.classList.add('error');
    lastNameIcon.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
  } else {
    lastNameInput.style.border = '1px solid #1F9354';
    lastNameIcon.classList.add('success');
    lastNameIcon.classList.remove('error');
    lastNameIcon.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  }
});


// ---------------DATE----------------
const dateInput = document.querySelector('#dateInput');
const dateIcon = document.querySelector('#date-icon');
const inputSumm = document.querySelector('.date-text');

function getAge(dateString) {
    const birthDate = new Date(dateString);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();

    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < birthDate.getDate())
      ) {
        age--;
    }

    return age;
}

dateInput.addEventListener('input', () => {

    if (!dateInput.value) {
        dateInput.style.border = '1px solid red';
        inputSumm.textContent = 'Date of birth is required.';
        return;
    }

    const age = getAge(dateInput.value);

    if (age < 18) {
        dateInput.style.border = '1px solid red';

        dateIcon.classList.remove('success');
        dateIcon.classList.add('error');

        dateIcon.innerHTML =
            '<i class="fa-solid fa-circle-exclamation"></i>';

        inputSumm.textContent = 'Must be over 18 years old';
    } else {
      dateInput.style.border = '1px solid #1F9354';
      
        dateIcon.classList.remove('error');
        dateIcon.classList.add('success');

        dateIcon.innerHTML =
            '<i class="fa-solid fa-circle-check"></i>';

        inputSumm.textContent = `Qualified! You are ${age} years old`;
    }

});




//--------------GENDERE------------------

const gender = document.querySelector('#gender');

gender.addEventListener('change', () => {

    if (gender.value !== '') {
           gender.style.border = '1px solid #1F9354';

    } else {
     
        gender.style.border = '1px solid red';
    }

});




// -----------------------NUMBERS--------------------

const numberInput = document.querySelector('#phone');

function isValidnumber(number) {
 const numberRegex = /^\+?[1-9]\d{0,2}[-.\s]?\(?\d+\)?([-.\s]?\d+)*$/;

 return numberRegex.test(number);
}



numberInput .addEventListener('input', () => {
  
  
  // check if number is valid

  if (!isValidnumber(numberInput.value.trim())) {
       numberInput.style.border = '1px solid red';
        numberIcon.classList.remove('success');
        numberIcon.classList.add('error');
        numberIcon.innerHTML =
        '<i class="fa-solid fa-circle-xmark"></i>';


    } else {
      numberInput.style.border = '1px solid #1F9354';
        numberIcon.classList.add('success');
        numberIcon.classList.remove('error');
        numberIcon.innerHTML =
        '<i class="fa-solid fa-circle-check"></i>';
        
    }

});



// --------STREET---------
const street = document.querySelector('#street');
const streetIcon = document.querySelector('#icon-strecity')


street.addEventListener('input', () => {

    if (street.value.trim() === '') {
           
 street.style.border = '1px solid red';
        streetIcon.classList.remove('success');
        streetIcon.classList.add('error');
        streetIcon.innerHTML =
        '<i class="fa-solid fa-circle-xmark"></i>';

    } else {
       street.style.border = '1px solid #1F9354';
           streetIcon.classList.add('success');
        streetIcon.classList.remove('error');
       streetIcon.innerHTML =
        '<i class="fa-solid fa-circle-check"></i>';
    }

});


// ------------------CITY--------------- 

const city = document.querySelector('#city');
const iconCIty = document.querySelector('#icon-city')



city.addEventListener('input', () => {

  if (city.value.trim() === '') {
    
 city.style.border = '1px solid red';
        iconCIty.classList.remove('success');
        iconCIty.classList.add('error');
        iconCIty.innerHTML =
        '<i class="fa-solid fa-circle-xmark"></i>';

    } else {
       city.style.border = '1px solid #1F9354';
        iconCIty.classList.add('success');
        iconCIty.classList.remove('error');
       iconCIty.innerHTML =
       '<i class="fa-solid fa-circle-check"></i>';
    }

});





// ===============STATE===================

const state = document.querySelector('#state');
const stateIcon = document.querySelector('#stater-icon')



state.addEventListener('input', () => {

  if (state.value.trim() === '') {
    
 state.style.border = '1px solid red';
        stateIcon.classList.remove('success');
        stateIcon.classList.add('error');
        stateIcon.innerHTML =
        '<i class="fa-solid fa-circle-xmark"></i>';

    } else {
       state.style.border = '1px solid #1F9354';
        stateIcon.classList.add('success');
        stateIcon.classList.remove('error');
       stateIcon.innerHTML =
   '<i class="fa-solid fa-circle-check"></i>';
    }

});





const zipCode = document.querySelector('#zipCode');
const zipIcon = document.querySelector('#icon-zip')


zipCode.addEventListener('input', () => {

  if (zipCode.value.trim() === '') {
    
 zipCode.style.border = '1px solid red';
        zipIcon.classList.remove('success');
        zipIcon.classList.add('error');
        zipIcon.innerHTML =
        '<i class="fa-solid fa-circle-xmark"></i>';

    } else {
       zipCode.style.border = '1px solid #1F9354';
        zipIcon.classList.add('success');
        zipIcon.classList.remove('error');
       zipIcon.innerHTML =
       '<i class="fa-solid fa-circle-check"></i>';
    }

});



// =========================BIO====================

const bio = document.querySelector('#bio');


bio.addEventListener('input', () => {

  if (bio.value.trim() === '') {
    
 bio.style.border = '1px solid red';
       

    } else {
       bio.style.border = '1px solid #1F9354';

    }

});





function validatePage2(){
 // first name
    if(firstName.value.trim() === ''){
        alert('first name is required');
        firstName.focus();
        return;
    }

    // last name
    if(lastNameInput.value.trim() === ''){
        alert('last name is required');
        lastNameInput.focus();
        return;
    }

    // dateInput
    if(dateInput.value.trim() === ''){
        alert('Date is required');
        dateInput.focus();
        return;
    }

   

    // gender
    if(gender.value.trim() === ''){
        alert('Gender is required');
        gender.focus();
        return;
    }


    // numberInput
    if(numberInput.value.trim() === ''){
        alert('phone number is required');
        numberInput.focus();
        return;
    }



    // street
    if(street.value.trim() === ''){
        alert('street is required');
         street.focus();
        return;
    }

    
    // city
    if(city.value.trim() === ''){
        alert('city is required');
        city.focus();
        return;
    }

    
    // state
    if(state.value.trim() === ''){
        alert('state is required');
        state.focus();
        return;
    }

    
    // zipCode
    if(zipCode.value.trim() === ''){
        alert('zipCode is required');
       zipCode.focus();
        return;
    }


    
    // bio
    if(bio.value.trim() === ''){
        alert('bio is required');
       bio.focus();
        return;
    }



   
    return true;


}


//button next

document.querySelector('.next2')
.addEventListener('click',()=>{

    // first name
    if(firstName.value.trim() === ''){
        alert('first name is required');
        firstName.focus();
        return;
    }
    

    // last name
    if(lastNameInput.value.trim() === ''){
        alert('last name is required');
        lastNameInput.focus();
        return;
    }

    // dateInput
    if(dateInput.value.trim() === ''){
        alert('Date is required');
        dateInput.focus();
        return;
    }

   

    // gender
    if(gender.value.trim() === ''){
        alert('Gender is required');
        gender.focus();
        return;
    }


    // numberInput
    if(numberInput.value.trim() === ''){
        alert('phone number is required');
        numberInput.focus();
        return;
    }



    // street
    if(street.value.trim() === ''){
        alert('street is required');
         street.focus();
        return;
    }

    
    // city
    if(city.value.trim() === ''){
        alert('city is required');
        city.focus();
        return;
    }

    
    // state
    if(state.value.trim() === ''){
        alert('state is required');
        state.focus();
        return;
    }

    
    // zipCode
    if(zipCode.value.trim() === ''){
        alert('zipCode is required');
       zipCode.focus();
        return;
    }


    
    // bio
    if(bio.value.trim() === ''){
        alert('bio is required');
       bio.focus();
        return;
    }



    // Everything is valid
    document.querySelector('.next2').addEventListener('click',()=>{

    if(validatePage2()){
        showPage(2);
    }

});
});





// =====================PAGE THREE=======================


const primaryJobInput = document.querySelector('#job')
const primaryJobIcon = document.querySelector('#primary-icon')



primaryJobInput.addEventListener('change', () => {

    if (primaryJobInput.value !== '') {
           primaryJobInput.style.border = '1px solid #1F9354';
         primaryJobIcon.classList.add('success');
        primaryJobIcon.classList.remove('error');
       primaryJobIcon.innerHTML =
       '<i class="fa-solid fa-circle-check"></i>';
    } else {
        primaryJobInput.style.border = '1px solid red';
        primaryJobIcon.classList.remove('success');
        primaryJobIcon.classList.add('error');
        primaryJobIcon.innerHTML =
        '<i class="fa-solid fa-circle-xmark"></i>';

        
    }

});



// =================CURRENT JOB============


const currentJobInput = document.querySelector('#currebt-job')
const currentJobIcon = document.querySelector('#currentIcon')



currentJobInput.addEventListener('input', () => {

    if (currentJobInput.value.trim() === '') {
           
 currentJobInput.style.border = '1px solid red';
        currentJobIcon.classList.remove('success');
        currentJobIcon.classList.add('error');
        currentJobIcon.innerHTML =
        '<i class="fa-solid fa-circle-xmark"></i>';

    } else {
       currentJobInput.style.border = '1px solid #1F9354';
           currentJobIcon.classList.add('success');
        currentJobIcon.classList.remove('error');
       currentJobIcon.innerHTML =
        '<i class="fa-solid fa-circle-check"></i>';
    }

});



// ================= COMPANY NAME ====================

const companyInput = document.querySelector('#company-name') 
const comapnyIcon = document.querySelector('#company-icon')



companyInput.addEventListener('input', () => {

    if (companyInput.value.trim() === '') {
           
 companyInput.style.border = '1px solid red';
        comapnyIcon.classList.remove('success');
        comapnyIcon.classList.add('error');
        comapnyIcon.innerHTML =
        '<i class="fa-solid fa-circle-xmark"></i>';

    } else {
       companyInput.style.border = '1px solid #1F9354';
           comapnyIcon.classList.add('success');
        comapnyIcon.classList.remove('error');
       comapnyIcon.innerHTML =
        '<i class="fa-solid fa-circle-check"></i>';
    }

});





// ================= YEARS OF EXPERIECE ===============

const experience = document.querySelector('#experiece')
const experienceIcon = document.querySelector('#experiece-icon')



experience.addEventListener('change', () => {

    if (experience.value !== '') {
           experience.style.border = '1px solid #1F9354';
         experienceIcon.classList.add('success');
        experienceIcon.classList.remove('error');
       experienceIcon.innerHTML =
       '<i class="fa-solid fa-circle-check"></i>';
    } else {
        experience.style.border = '1px solid red';
        experienceIcon.classList.remove('success');
        experienceIcon.classList.add('error');
        experienceIcon.innerHTML =
        '<i class="fa-solid fa-circle-xmark"></i>';

        
    }

});




// ============== KEY SKILL ===================
const tagInput = document.querySelector('#tagInput');
const tagBox = document.querySelector('#tagBox');
const skillIcon = document.querySelector('#skill-icon');
const optionalNote = document.querySelector('.optional-note')

tagInput.addEventListener('keydown', (e) => {

    if (e.key === 'Enter' && tagInput.value.trim() !== '') {

        e.preventDefault();

        const tag = document.createElement('div');
        tag.className = 'tag';

        tag.innerHTML = `
            <span>${tagInput.value.trim()}</span>
            <button type="button">×</button>
        `;

        tagBox.prepend(tag);

        // Success state
        tagBox.style.border = '1px solid #1F9354';

        skillIcon.classList.remove('error');
        skillIcon.classList.add('success');
        optionalNote.style.color = '#1F9354'
        skillIcon.innerHTML =
            '<i class="fa-solid fa-circle-check"></i>';

        tagInput.value = '';
    }

});







function validatePage3(){
 // primary Job
    if(primaryJobInput.value.trim() === ''){
        alert('primary job is required');
        primaryJobInput.focus();
        return;
    }

    // current Job
    if(currentJobInput.value.trim() === ''){
        alert('current job is required');
        currentJobInput.focus();
        return;
    }

    // company name
    if(companyInput.value.trim() === ''){
        alert('company name is required');
       companyInput.focus();
        return;
    }

   

    // experience
    if(experience.value.trim() === ''){
        alert('experience is required');
       experience.focus();
        return;
    }

     
    return true;

}




//button next

document.querySelector('.next3')
.addEventListener('click',()=>{
 // primary Job
    if(primaryJobInput.value.trim() === ''){
        alert('primary job is required');
        primaryJobInput.focus();
        return;
    }

    // current Job
    if(currentJobInput.value.trim() === ''){
        alert('current job is required');
        currentJobInput.focus();
        return;
    }

    // company name
    if(companyInput.value.trim() === ''){
        alert('company name is required');
       companyInput.focus();
        return;
    }

   

    // experience
    if(experience.value.trim() === ''){
        alert('experience is required');
       experience.focus();
        return;
    }

    // Everything is valid
    document.querySelector('.next3').addEventListener('click',()=>{

    if(validatePage3()){
        showPage(0);
    }

});
});






//CLEARING AND SAVING TO LOCALSTORAGE

document.querySelector('.next2')
.addEventListener('click',()=>{


if(validatePage2()){


const page2Data={


firstName:firstName.value,

lastName:lastName.value,

date:date.value,

gender:gender.value,

phone:phone.value,

street:street.value,

city:city.value,

state:state.value,

zipCode:zipCode.value,

bio:bio.value


};



localStorage.setItem(

'page2',

JSON.stringify(page2Data)

);



form2.reset();



showPage(2);


}


});