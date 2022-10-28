function nuestrasMascotas(ficha) {

    const resultados = fetch('mascotas.json');

    resultados
        .then(response => response.json())
        .then(data => {
            ficha(data)
        });

}

nuestrasMascotas(data => {

       data.resultados.forEach(mascota => {

        const article =  document.createRange().createContextualFragment(`
        <article>

            <img src="${mascota.imagen}" alt="mascota">
            
        </div>

        <h2 class="mascota__titulo">${mascota.nombre}</h2>
        <div>
        <span class="atributos"><b>Edad: ${mascota.edad}<b></span>
        </div>
        <div>
        <span class="atributos"><b>Raza: ${mascota.raza}<b></span>
        </div>
        <div>
        <span class="atributos"><b>Contacto: ${mascota.contacto}<b></span>
        </div>
        <div>
        <span class="atributos"><b>Email: ${mascota.email}<b></span>
        </div>

    </article>
    `);

    const main = document.querySelector('main');

    main.append(article);

       }); 
        
        
       }); 
