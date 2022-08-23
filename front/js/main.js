// Obtenemos los elementos
// input y button
const input = document.getElementById('field');
const btn = document.getElementById('btn');
const par = document.getElementById('content');  // Elemento p

// API
const api = 'http://localhost:5500/api';

btn.addEventListener('click', () => {
    // Hacer el fetch a la api
    const options = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
        },
        body: JSON.stringify({
            text: input.value
        })
    }
    fetch(api, options)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.error(err));

    // Actualizar el elemento div y mostrando la info en forma de lista
    fetch(api)
        .then(response => response.json())
        .then(data => {
            let list_content = '<ul>';
            let elems = data.texto.split('.');

            elems.forEach(elem => {
                list_content += '<li>' + elem + '</li>'
            });

            list_content += '</ul>';

            par.innerHTML = list_content;
        })
        .catch(err => {
            par.innerHTML = 'La API en este momento está fuera de servicio. Intente en otro momento.';
            console.error(err);
        });
});
