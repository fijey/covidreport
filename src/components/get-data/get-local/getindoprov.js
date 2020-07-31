function getindoprov() {
    const getDataProvIndo = fetch(`https://covid19.mathdro.id/api/confirmed`)
        .then(results => results.json())
        .then(results => {
            let tableRow = '';
            for (let i = 0; i < 100; i++) {
                let no = i + 1;
                tableRow += showDataProv(results[i], no);
                const tbProv = document.querySelector('.tb-prov');
                tbProv.innerHTML = tableRow;
            }
            function showDataProv(result, i) {
                return `
                    <tr>
                        <td>${i}</td>
                        <td>${result.countryRegion}</td>
                        <td class="color-positif">${result.confirmed}</td>
                        <td class="color-sembuh">${result.recovered}</td>
                        <td class="color-meninggal">${result.deaths}</td>
                    </tr>
                `
            }
        });
}
export default getindoprov;