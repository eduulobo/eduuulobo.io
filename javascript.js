let cursorX = document.getElementById("cursor");

document.addEventListener("mousemove", function(evento){
    cursor.style.left = evento.clientX + "px";
    cursor.style.top = evento.clientY + "px";
});

const secoes = document.querySelectorAll("main section[id]");
const links = document.querySelectorAll(".menu a");

const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            links.forEach((link) => {
                const ativo = link.getAttribute("href") === `#${entrada.target.id}`;
                link.classList.toggle("ativo", ativo);
            });
        }
    });
}, { threshold: 0.6 });

secoes.forEach((secao) => observador.observe(secao));

