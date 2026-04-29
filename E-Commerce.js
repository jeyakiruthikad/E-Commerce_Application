function showPage(pageId){
  const pages = document.querySelectorAll(".page");
  pages.forEach(page => page.classList.remove("active"));
  document.getElementById(pageId).classList.add("active");
}

function added(item){
  alert(item + " added to cart successfully!");
}

document.getElementById("loginForm").addEventListener("submit", e=>{
  e.preventDefault();
  alert("Welcome back, " + document.getElementById("lemail").value + "!");
  e.target.reset();
});

document.getElementById("regForm").addEventListener("submit", e=>{
  e.preventDefault();
  alert("Registration successful for " + document.getElementById("rname2").value + "!");
  e.target.reset();
});

document.getElementById("reviewForm").addEventListener("submit", e=>{
  e.preventDefault();
  alert("Thank you for your review!");
  e.target.reset();
});