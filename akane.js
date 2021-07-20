 
akaneSubmit()

function akaneSubmit( ) {
    event.preventDefault();
     
  var birthday = document.forms['form']['birthday'].value
    if (!birthday) {
        var dateError = document.getElementById("date")
        dateError.style.color = 'red'
        return  dateError.innerHTML="choose a date"
    }
    
  var arr = birthday.split('-')
  var day = arr[2]
  var month = arr[1] - 1
  var year = arr[0]
   
  var days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
  var akaneMale = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame']
  var akaneFemale = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama']


  var birthday = document.getElementById('birthday')
  var DOB = new Date(year, month, day)
  var daysOfTheWeek=DOB.getDay()
  var male = document.getElementById('male')
    var female = document.getElementById('female')
    

    if (male.checked === false && female.checked === false) {
        var genderError = document.getElementById("chooseGender")
        genderError.style.color = 'red'
        return  genderError.innerHTML="choose your gender"
    }
    var isMale = male.checked ? true : female.checked ? false : null;
    var output=document.getElementById("results")
    if (isMale) {
        output.innerHTML = 'You were born on a ' + days[daysOfTheWeek] + ' and your Akan name is ' + akaneMale[daysOfTheWeek]
        
        return;
    }
    else {
        output.innerHTML = ' You were born on a ' + days[daysOfTheWeek] + ' and your Akan name is ' + akaneFemale[daysOfTheWeek];
        output.style.background = 'yellowgreen'
        return;
    }
  
}
