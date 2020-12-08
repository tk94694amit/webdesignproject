 
 function validateusername(){
  var val=document.getElementById("username").value;
var check= /^[a-z]+.[a-z 0-9]+@[a-z]+.[a-z]+.[a-z]$/ ;
var commonemail=  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
if(val==''){
  alert("please fill your email");
  document.getElementById("invaliduser").style.visibility="visible";
    document.getElementById("invaliduser").style.color="red";
    document.getElementById("validuser").style.visibility="hidden";

    document.getElementById("invaliduser").style.fontSize="20px";
    document.getElementById("invaliduser").style.fontWeight="heavy";
  }
  else if(check.test(val))
{   
    document.getElementById("validuser").style.color="green";
    document.getElementById("validuser").style.visibility="visible";
    document.getElementById("validuser").style.fontWeight="heavy";
    document.getElementById("validuser").style.fontSize="20px";
    document.getElementById("invaliduser").style.visibility="hidden";

  }

 else   if(commonemail.test(val))
  {
    document.getElementById("validuser").style.color="green";
    document.getElementById("validuser").style.visibility="visible";
    document.getElementById("validuser").style.fontSize="20px";
    document.getElementById("validuser").style.fontWeight="heavy";
    document.getElementById("invaliduser").style.visibility="hidden";


  }
  else if(val=="bmsce"){
    document.getElementById("validuser").style.color="green";
    document.getElementById("validuser").style.fontSize="20px";
    document.getElementById("validuser").style.visibility="visible";
    document.getElementById("invaliduser").style.visibility="hidden";

  }
  else{
    document.getElementById("invaliduser").style.visibility="visible";
    document.getElementById("invaliduser").style.color="red";
    document.getElementById("validuser").style.visibility="hidden";

    document.getElementById("invaliduser").style.fontSize="20px";
    document.getElementById("invaliduser").style.fontWeight="heavy";
  }

}
 
 function validatelogin(){
  
    validateusername();

    var text=document.getElementById("pass").value;
   
   //var che=/^[a-z]{2,8}$/;
   var che="amit";
   
  if(che==text){//password matched
    document.getElementById("validpass").style.visibility="visible";
    document.getElementById("validpass").style.color="green";
    document.getElementById("validpass").style.fontSize="20px";
    document.getElementById("validpass").style.fontWeight="heavy";
    document.getElementById("validfail").style.visibility="hidden";
    alert("password matched");
    }
    else{
      document.getElementById("validpass").style.visibility="hidden";
      document.getElementById("validfail").style.visibility="visible";
      document.getElementById("validfail").style.color="red";
      document.getElementById("validfail").style.fontSize="20px";
      document.getElementById("validfail").style.fontWeight="heavy";
      alert("  Password doesn't match !!");
    }

  }


  


  