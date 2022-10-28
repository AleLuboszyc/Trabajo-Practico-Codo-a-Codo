const datos = document.querySelector('#lista-mascotas tbody');

function cargarMascotas() {
    fetch('mascotas.json')
        .then(respuesta => respuesta.json()) 
        .then(mascotas => {
            mascotas.forEach(mascotas => {
                const row = document.createElement('tr');
                row.innerHTML += `
                    <td>${mascotas.id}</td>
                    <td>${mascotas.nombre}</td>
                    <td>${mascotas.edad}</td>
                    <td>${mascotas.raza}</td>
                    <td>${mascotas.contacto}</td>
                    <td>${mascotas.email}</td>
                `;
                datos.appendChild(row);
            });
        }) 
        .catch(error => console.log('Hubo un error : ' + error.message))
}

cargarMascotas();