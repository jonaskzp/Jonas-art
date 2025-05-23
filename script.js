//scroll ga
//sessao1
document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.querySelector(".section1" ); // Seção que contém as imagens
    const btnLeft = document.getElementById("scroll-left1");
    const btnRight = document.getElementById("scroll-right1");

    const scrollAmount = 300; // Define a quantidade de rolagem por clique

    btnLeft.addEventListener("click", function () {
        gallery.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });

    btnRight.addEventListener("click", function () {
        gallery.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
});

  function mostrarAlerta() {
      alert("Olá! Este é um alerta simples em JavaScript.");
    }
