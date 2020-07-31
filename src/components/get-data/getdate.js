function getupdate() {

    const getDataUpdate = fetch('https://api.kawalcorona.com')
        .then(results => results.json())
        .then(results => {
            let getLastUpdate = results[36].attributes.Last_Update;
            let date = new Date(getLastUpdate);
            const weekDay = Intl.DateTimeFormat('id', { weekday: 'short' }).format(date);
            const ymd = Intl.DateTimeFormat('id', { year: 'numeric', month: 'long', day: 'numeric' }).format(date);
            const hour = Intl.DateTimeFormat('id', { hour: 'numeric' }).format(date);
            const minute = Intl.DateTimeFormat('id', { minute: 'numeric' }).format(date);
            const second = Intl.DateTimeFormat('id', { second: 'numeric', timeZoneName: 'short' }).format(date);
            const secondnotz = Intl.DateTimeFormat('id', { second: 'numeric' }).format(date);

            let newDate = `${weekDay}, ${ymd} ${hour}:${minute}:${second}`;
            let newdatenotz = `${weekDay}, ${ymd} ${hour}:${minute}:${secondnotz}`
            const lastUpdate = document.querySelector('.last-update');
            const newupdate = document.querySelector('.new-update');
            lastUpdate.innerHTML = `Sumber data : Kementerian Kesehatan & JHU. Update terakhir : ${newDate}`;
            newupdate.innerHTML = `${newdatenotz}`;
        })
        .catch(error => {
            console.log(error);
        });




}

export default getupdate;