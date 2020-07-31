function getglobalsembuh() {

    const getDataRecovered = fetch('https://covid19.mathdro.id/api')
        .then(results => results.json())
        .then(results => {
            const sembuh = document.querySelector('.sembuh-global')
            sembuh.innerHTML = results.recovered.value;
        })
        .catch(error => {
            console.log(error);
        });;
}
export default getglobalsembuh;