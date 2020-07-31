function getindo() {

    const getDataPositive = fetch('https://covid19.mathdro.id/api/countries/INDONESIA')
        .then(results => results.json())
        .then(results => {

            const indopositif = document.querySelector('.positif-indo');
            indopositif.innerHTML = results.confirmed.value;
            const indomeninggal = document.querySelector('.meninggal-indo');
            indomeninggal.innerHTML = results.deaths.value;
            const indosembuh = document.querySelector('.sembuh-indo');
            indosembuh.innerHTML = results.recovered.value;
        })
        .catch(error => {
            console.log(error);
        });;
}
export default getindo;