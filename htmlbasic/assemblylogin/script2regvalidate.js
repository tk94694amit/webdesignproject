function validatemail()
{
   var check1=document.getElementById("mail").value;
   var mailcheck=  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
   var mailcheckclg= /^[a-zA-Z]+.[a-z0-9]+@[a-z]+.[a-z]+[a-z]$/;
 


    if(check1==''){
        alert("please fill your email");
    }
    else if(mailcheck.test(check1)){
   document.getElementsByName('Email')[0].placeholder=check1; 

     }
     else if(mailcheckclg.test(check1)){
        
     }
     else{
      //  document.getElementsByName('Email')[0].placeholder=' Please fill your Email'; 
        alert("Invalid username or Email!\r\n \r\nEnter your Email or Username..");
     }

}
function validatefname()
{
   validatemail();

   var check2=document.getElementById("firname").value;
   var fcheck=/^([a-zA-Z]+)*$/;
 var flength=check2.length;
   
   if(check2==''){
        alert("Please fill your firstname ");
   } 
   else if(flength<=2){
      alert("Invalid firstname length!! \r\n\r\n  Please fil out  field correctly..");

   }
   else if(fcheck.test(check2)){

     }

     
     else{
      // document.getElementsByName('firstname')[0].placeholder=' Please provide your firstname'; 
        alert("Invalid firstname!\r\n \r\nPlease fil out  field correctly..");
     }

}


function validatelname()
{
  
   validatefname();

   var check3=document.getElementById("lasname").value;
   var lcheck=/^([a-zA-Z]+){3,30}$/;

   if(check3==''){
        alert("Please fill your lastname ");
   } 
   else if(lcheck.test(check3))// if valid
   {

     }

     
     else{
       // document.getElementsByName('lasname')[0].placeholder=' Please provide your lastname'; 
        alert("Invalid last name!\r\n \r\nPlease fil out  field correctly..");
     }

}


function validatecontact()
{
  
   validatelname();

   var checkmob=document.getElementById("contact").value;
   var mobcheck=/^[6-9][0-9]{9}$/;

   if(checkmob==''){
        alert("Please provide your valid Mobile no. ");
   } 
   else if(mobcheck.test(checkmob))// if valid
   {

     }

     
     else{
        document.getElementsByName('contact')[0].placeholder=' Please provide your contact'; 
        alert("Invalid mobile number!\r\n \r\nPlease fil out  field correctly..");
     }

}
function validatepass()
{
  
   validatecontact();

   var passone=document.getElementById("onepass").value;
   var passowrdcheck=/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

   var minNumberofChars = 6;
    var maxNumberofChars = 16;
     
    //alert()); 
    if(passone.length < minNumberofChars || passone.length > maxNumberofChars){
       alert("password length should be lesser than 16 and greater than 6");
    }
    else if(!passowrdcheck.test(passone)) {
        alert("password should contain atleast one number and one special character");
     
    }
   else if (passone==''){
        alert("Please set password \r\n fll out this field correctly");
   } 
  
     

}



function validatereg(){
   var passone=document.getElementById("onepass").value;

   var passtwo=document.getElementById("twopass").value;
      if(passone==passtwo){

      }
      else{
         alert("Alert !! \r\n Password mismatch");
      }
  // var pass2=
}