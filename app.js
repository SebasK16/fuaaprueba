document.addEventListener('DOMContentLoaded', () => {
    const destinosList = document.getElementById('destinos-list');
    const lugaresList = document.getElementById('lugares-list');
    const hosteriasList = document.getElementById('hosterias-list');

    const destinos = [
        {name: 'Ciudad de México', description: 'Descubre la vibrante capital de México.'},
        {name: 'París', description: 'La ciudad del amor y las luces.'},
        {name: 'Tokio', description: 'Una mezcla fascinante de tradición y modernidad.'},
        {name: 'Nueva York', description: 'La ciudad que nunca duerme.'}
    ];

    const lugares = [
        {name: 'Torre Eiffel', description: 'Icono de París y una maravilla arquitectónica.'},
        {name: 'Museo del Prado', description: 'Uno de los museos más importantes del mundo.'},
        {name: 'Times Square', description: 'El corazón vibrante de Nueva York.'},
        {name: 'Coliseo', description: 'Una maravilla del mundo antiguo en Roma.'}
    ];

    const hosterias = [
        {name: 'Hostería del Lago', description: 'Un lugar tranquilo junto al lago.'},
        {name: 'Hostería La Selva', description: 'Rodeada de la belleza natural de la selva.'},
        {name: 'Hostería El Mar', description: 'Vistas impresionantes al océano.'}
    ];

    const createCard = (item) => {
        return `
            <div class="col-md-6 col-lg-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${item.name}</h5>
                        <p class="card-text">${item.description}</p>
                    </div>
                </div>
            </div>
        `;
    };

    destinos.forEach(destino => {
        destinosList.innerHTML += createCard(destino);
    });

    lugares.forEach(lugar => {
        lugaresList.innerHTML += createCard(lugar);
    });

    hosterias.forEach(hosteria => {
        hosteriasList.innerHTML += createCard(hosteria);
    });
});
