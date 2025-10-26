document.addEventListener('DOMContentLoaded', function () {

    const contactForm = document.querySelector('.contact-form');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();


        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const correo = document.getElementById('correo').value;
        const celular = document.getElementById('celular').value;
        const mensaje = document.getElementById('mensaje').value;
        const puesto = document.getElementById('puesto').value;
        const empresa = document.getElementById('empresa').value;

        const subject = encodeURIComponent('Nueva respuesta de la Encuesta Telmex');
        const body = encodeURIComponent(
`Se ha recibido una nueva respuesta de la encuesta:

Nombre: ${nombre} ${apellido}
Correo: ${correo}
Celular: ${celular}
Puesto: ${puesto}
Empresa: ${empresa}

Mensaje:
${mensaje}
`
        );
        
        const mailtoLink = `mailto:saidvillegas2330@gmail.com?subject=${subject}&body=${body}`;
        window.location.href = mailtoLink;
    });
});
