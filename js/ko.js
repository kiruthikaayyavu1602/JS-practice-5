
document.getElementById("myAnchor").addEventListener("click", function(event){
	event.preventDefault();
});
var records = [];

function myFunction(){
  var firstname = document.getElementById("fname").value;
  var lastname = document.getElementById("lname").value;
  var dob = document.getElementById("dob").value
  var Gender = document.getElementsByClassName("gender");
  var Email = document.getElementById("email").value;
  var Num = document.getElementById("number").value;
  var address = document.getElementById("comment").value;
  var City = document.getElementById("cityname").value;
  var ZIP = document.getElementById("zipcode").value;
  var State = document.getElementById("state").value;
  var Country = document.getElementById("country").value;
  var Course = document.getElementsByClassName("course");
  var Check = document.getElementById("declare");

  var checkBox;
  if(Check.checked){
    
    checkBox = Check.value;
  }
  else{
    checkBox = false;
  }

 var genderName;                                //gender
  if(Gender[0].checked){
   
   genderName = Gender[0].value;
  }
  else if(Gender[1].checked){
    genderName = Gender[1].value;
  }
  


  var courseName;                                //course applied
  if(Course[0].checked){
   
    courseName = Course[0].value;
  }
  else if(Course[1].checked){
    courseName = Course[1].value;
  }
  else if(Course[2].checked){
    courseName = Course[2].value;
  }
  else if(Course[3].checked){
    courseName = Course[3].value;
  }
  
  



  var app=[];                                                   //hobbies
let checkbox = document.getElementsByClassName("same");
let specialHobbies = document.getElementById("special").value;

let hobbies = "";
for(let i=0; i<checkbox.length; i++){
    if(checkbox[i].checked === true){
        hobbies = checkbox[i].value
        app.push(hobbies);
    }
    
}   

if(specialHobbies !== ""){
  app.push(specialHobbies);
}                                                         //hobbies end


var marks = [];                                                 //10th start
var eng = document.getElementById("english").value;
var hindi = document.getElementById("hindi").value;
var maths = document.getElementById("mathematics").value;
var science = document.getElementById("science").value;
var social = document.getElementById("social").value;


 var sub = {};

 sub.english = eng;
 sub.hindi = hindi;
 sub.mathematics = maths;
 sub.science = science;
 sub.social = social;
 
marks.push(sub);
// console.log(marks);

var sum = parseInt(eng) + parseInt(hindi) + parseInt(maths) + parseInt(science) + parseInt(social);

var percentage = (sum/500)*100;


var percentageValue;
if (percentage > 80){
  percentageValue = "A";
}
else if (percentage > 50-80){
  percentageValue = "B";
}
else if(percentage > 35-50){
  percentageValue = "C";
}
else if(percentage < 35 ){
  percentageValue = "Not Qualified";
}

let secondary = {
  board:"Stateboard",
  qualifiedYear:"2010",
  marks:marks,
  percentage:percentage,
  grade:percentageValue
};
// console.log(secondary);

var qualification = {};
qualification.classX = secondary;

// console.log(qualification);                                   //10th end


var highermarks = [];                                            //12th start
var eng = document.getElementById("englishSub").value;
var hindi = document.getElementById("hindiSub").value;
var maths = document.getElementById("mathematicsSub").value;
var science = document.getElementById("scienceSub").value;
var social = document.getElementById("socialSub").value;
var secondLanguage = document.getElementById("SLSub").value;
 var subjects = {};

 subjects.english = eng;
 subjects.hindi = hindi;
 subjects.mathematics = maths;
 subjects.science = science;
 subjects.social = social;
 subjects.SecondLanguage = secondLanguage;

 highermarks.push(subjects);
//  console.log(highermarks);

var sum = parseInt(eng) + parseInt(hindi) + parseInt(maths) + parseInt(science) + parseInt(social) + parseInt(secondLanguage);

var percentage = (sum/1200)*100;

var percentageValue;
if (percentage > 80){
  percentageValue = "A";
}
else if (percentage > 50-80){
  percentageValue = "B";
}
else if(percentage > 35-50){
  percentageValue = "C";
}
else if(percentage < 35 ){
  percentageValue = "Not Qualified";
}

 let highersecondary = {
  board:"Stateboard",
  qualifiedYear:"2012",
  marks:highermarks,
  percentage:percentage,
  grade:percentageValue
};
// console.log(highersecondary);

var higherqualification = {};
higherqualification.classXII = highersecondary;

// console.log(higherqualification);                          //12th end

var final = [];
final.push(qualification);
final.push(higherqualification);
// console.log(final);                                           //both qualification
  
  var persondetails = { };                               
  
  
  persondetails.firstname = firstname;  
  persondetails.lastname = lastname;
  persondetails.dob = dob;
  persondetails.Email = Email;
  persondetails.contact = Num;
  persondetails.Gender = genderName;
  persondetails.address = address;
  persondetails.CityName = City;
  persondetails.ZipCode = ZIP;
  persondetails.StateName = State;
  persondetails.country = Country;
  persondetails.hobbies = app;
  persondetails.qualification = final;
  persondetails.Courseapplied = courseName;
  persondetails.checkbox = checkBox;

  
  
  
  
  
  records.push(persondetails);

  // console.log(JSON.stringify(records));
  localStorage.setItem("profile", (JSON.stringify(records)));              //stored values in local storage
  
}


