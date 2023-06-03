document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.getElementById('search-button');
    const searchInput = document.getElementById('search-input');
    const seoResult = document.getElementById('seo-result');

    searchButton.addEventListener('click', async function() {
        const query = searchInput.value;
        if (query) {
            const url = `https://seo-api.p.rapidapi.com/v1/search?q=${encodeURIComponent(query)}`;

            const options = {
                method: 'GET',
                headers:
                {
                    'X-Proxy-Location': 'EU',
                    'X-User-Agent': 'desktop',
                    'X-RapidAPI-Key': '926a51764dmshd14556b960cb4efp1516ecjsn54c7caa56005',
                    'X-RapidAPI-Host': 'seo-api.p.rapidapi.com'
                }
            };

            try
            {
                const response = await fetch(url, options);
                const result = await response.json();
                seoResult.innerHTML = JSON.stringify(result, null, 2);
            } catch (error) {
                console.error(error);
            }
        }
    });
});