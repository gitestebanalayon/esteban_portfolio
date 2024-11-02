function navSectionsActive() {
    const secciones = document.querySelectorAll("section");

    const options = {
        root: null,
        threshold: 0.5,
        rootMargin: "0px",
    };

    function procesar(params) {
        const optionsNav = document.querySelectorAll(".nav a");
        optionsNav.forEach((nav) => {
            if (nav.classList.value === params) {
                nav.classList.add("active");
            } else {
                nav.classList.remove("active");
            }
        });

    }

    const observer = new IntersectionObserver((entradas) => {
        entradas.forEach((entrada) => {
            if (entrada.isIntersecting) {
                procesar(entrada.target.id);
            }
        });
    }, options);

    secciones.forEach((seccion) => {
        observer.observe(seccion);
    });
}
navSectionsActive();

const darkMode = () => {
    let swith = document.querySelector('.switch');

    swith.addEventListener('click', e => {
        swith.classList.toggle('active')
        document.body.classList.toggle('active')
    })
}
darkMode();

const navVisibility = () => {
    let btn = document.querySelector('.nav [type="button"]');
    let nav = document.querySelector('#nav');
    let icono = document.querySelector('.nav [type="button"] i');
   
    btn.addEventListener('click', () => {
        nav.classList.toggle('nav-active')

            
        if (icono.className == 'fas fa-bars') {
            icono.classList.remove('fa-bars')
            icono.classList.add('fa-chevron-down')
        }else{
            icono.classList.remove('fa-chevron-down')
            icono.classList.add('fa-bars')
        }   
       
    })

}

navVisibility();
