var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display="block";
  modal.style.transform = "scale(1)";
  modal.style.transition = "0.5s";
};

span.onclick = function() {
  modal.style.transition = "0.5s";
  modal.style.transform = "scale(0)";
};

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

var modal2 = document.getElementById("myModal2");

var btn2 = document.getElementById("myBtn2");

var span = document.getElementsByClassName("close")[0];

btn2.onclick = function() {
  modal2.style.display="block";
  modal2.style.transform = "scale(1)";
  modal2.style.transition = "0.5s";
};

span.onclick = function() {
  modal2.style.transition = "0.5s";
  modal2.style.transform = "scale(0)";
};

window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
};
