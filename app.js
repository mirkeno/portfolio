

const formulario = document.getElementById("formContacto");

formulario.addEventListener("submit", function(e){

    e.preventDefault();

    alert("¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.");

    formulario.reset();

});



window.addEventListener("scroll", function(){

    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){

        navbar.classList.add("shadow");

    }else{

        navbar.classList.remove("shadow");

    }

});