function myFunction() {
  document.getElementById("myMenubtn").classList.toggle("show");
}
window.onclick = function(e) {
  if (!e.target.matches(".dropbtn")) {
    var myMenubtn = document.getElementById("myMenubtn");
    if (myMenubtn.classList.contains("show")) {
      myMenubtn.classList.remove("show");
    }
  }
};
