var userName=document.querySelector(".name");
var Email=document.querySelector(".email");
var pass=document.querySelector(".password");
var btnsign=document.querySelector(".signbtn");
var mess=document.querySelector(".succses");
var logemail=document.querySelector(".logemail");
var logpass=document.querySelector(".logpass");
var messlog=document.getElementById("incorect");
var btnlog=document.querySelector(".log");

///////////////////////////////////

var alluser=[]

if (localStorage.getItem("alluser") == null) {
    alluser=[]
}  
else{
        alluser = JSON.parse(localStorage.getItem("alluser"));
    }

function vaildemail() {
    for(var i=0 ;i<alluser.length;i++){
        if(alluser[i].email.toLowerCase()==Email.value.toLowerCase())
        return false;
    }
    
}
    
/* btnsign.addEventListener("click",function(){
    
    if(userName.value=="" || Email.value=="" || pass.value==""){
     mess.innerHTML="all input required"
     mess.style.color="red"
     return false;
    }
    var user={
     name:userName.value,
     email:Email.value,
     password:pass.value,
           }
 
    if(alluser.length==0){
     alluser.push(user);
     localStorage.setItem("alluser",JSON.stringify(alluser));
     mess.innerHTML="succes";
     mess.style.color="green";
    }
    if(vaildemail()==false){
     mess.innerHTML="email aredy exsit";
     mess.style.color="red"
    }else{
     alluser.push(user);
     localStorage.setItem("alluser",JSON.stringify(alluser));
     mess.innerHTML="succes";
     mess.style.color="green"
    }
 
 }) */
function addUser() {
    
   if(userName.value=="" || Email.value=="" || pass.value==""){
    mess.innerHTML="all input required"
    mess.style.color="red"
    return false;
   }
   var user={
    name:userName.value,
    email:Email.value,
    password:pass.value,
          }

   if(alluser.length==0){
    alluser.push(user);
    localStorage.setItem("alluser",JSON.stringify(alluser));
    mess.innerHTML="succes";
    mess.style.color="green";
   }
   if(vaildemail()==false){
    mess.innerHTML="email aredy exsit";
    mess.style.color="red"
   }else{
    alluser.push(user);
    localStorage.setItem("alluser",JSON.stringify(alluser));
    mess.innerHTML="succes";
    mess.style.color="green"
   }

}
//////////////////////////////////////////////////////////
 
/* btnlog.addEventListener("click",function () {
    if( logemail.value=="" || logpass.value==""){
        messlog.innerHTML="all input required"
        messlog.style.color="red"
        return false;
       }
       var email=logemail.value;
       var pass=logpass.value;
       
       for(var i=0;i<alluser.length;i++){
        if(alluser[i].email.toLowerCase()==email.toLowerCase() && alluser[i].password.toLowerCase()==pass.toLowerCase()){
            

        }else{
            messlog.innerHTML="incorrect email or password";
            messlog.style.color="red"
        }
       }
    

});  */

var username="";
var isvalid=false;
function logining() {
    var email=logemail.value;
    var pass=logpass.value;
    

    if( logemail.value=="" || logpass.value==""){
        messlog.innerHTML="all input required"
        messlog.style.color="red"
        return false;
       }else{
        for(var i=0;i<alluser.length;i++){
            if(alluser[i].email.toLowerCase()===email.toLowerCase() && alluser[i].password.toLowerCase()===pass.toLowerCase()){
              isvalid=true;
              username=alluser[i].name
              break;
    
            }
           }
           if(isvalid){
            window.location="./welcompage.html";
            localStorage.setItem("loged",username)
           }else{
            messlog.innerHTML="incoorect email or password"
            messlog.style.color="red"
           }
       }
}


 

































/* 
if (localStorage.getItem("alluser") == null) {
    alluser=[]
}  
else{
        alluser = JSON.parse(localStorage.getItem("alluser"));
    }
    



function vaildemail() {
    for(var i=0;i<alluser.length;i++){
        if(alluser[i].email.toLowerCase()==Email.value.toLowerCase()){
            return false
        }
    }
    
}
function addUser() {
    var user={
        name:userName.value,
        email:Email.value,
        pass:pass.value,

    }
    if(userName.value==""||Email.value==""||pass.value==""){
        mess.innerHTML="all inputs is required";
    }
    if(alluser.length==0){
        alluser.push(user);
        localStorage.setItem('alluser', JSON.stringify(alluser))
        mess.innerHTML="succsess"
    }
    if(vaildemail()==false){
        mess.innerHTML="email already existsssssssssssss"
    }else{
        alluser.push(user);
        localStorage.setItem('alluser', JSON.stringify(alluser))
        mess.innerHTML="succsess"
     }
    } */