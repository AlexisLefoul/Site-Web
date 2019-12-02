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

