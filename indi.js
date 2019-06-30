



function displayMenu(){
 
  var x = document.getElementById("mobileMenu");

   console.log(x);

if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.classList.add("code");  
    x.style.display = "block";
  }

}