async function fetchData() {
    try {
        const result = await axios.get('https://restcountries.eu/rest/v2/all');
        console.log(result);
    } catch(e) {
        console.error(e);
    }
}

fetchData();
