document.getElementById('registroForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevenir el envío del formulario por defecto

    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;

    const data = {
        nombre: nombre,
        apellido: apellido,
        fechaNacimiento: fechaNacimiento
    };

    const headers = new Headers({
        'Content-Type': 'application/json'
    });

    // Solicitud POST utilizando fetch
    fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: headers, 
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Respuesta del servidor:', data);

    })
    .catch(error => {
        console.error('Error:', error);
    });
});