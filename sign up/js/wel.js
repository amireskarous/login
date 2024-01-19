var wel =document.getElementById("name")

var username=localStorage.getItem("loged")

wel.textContent=`Welcome ${username}`


function logout() {
    window.location="./login.html"
    
}