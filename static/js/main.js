window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  let scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  let scrollPosition = window.scrollY;

  // Calcular el porcentaje de desplazamiento
  var scrollPercentage = (scrollPosition / scrollHeight) * 100;

  if (scrollPercentage >= 10) {
    document.getElementById("scrollTopButton").style.display = "block";
  } else {
    document.getElementById("scrollTopButton").style.display = "none";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0; // Para navegadores Safari
  document.documentElement.scrollTop = 0; // Para otros navegadores
}
