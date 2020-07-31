function getglobalpositif() {
    const getDataPositive = fetch('https://covid19.mathdro.id/api')
        .then(results => results.json())
        .then(results => {
            const positive = document.querySelector('.positif-global')
            positive.innerHTML = results.confirmed.value;
        })
        .catch(error => {
            console.log(error);
        });;
}
export default getglobalpositif;