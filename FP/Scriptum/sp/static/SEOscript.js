document.addEventListener("DOMContentLoaded", function () {
  const searchButton = document.getElementById("search-button");
  const searchInput = document.getElementById("search-input");
  const seoResult = document.getElementById("seo-result");

  searchButton.addEventListener("click", async function () {
    const query = searchInput.value;
    if (query) {
      const url = `https://seo-api.p.rapidapi.com/v1/search/q=${query}`;
      const options = {
        method: "GET",
        headers: {
          "X-Proxy-Location": "EU",
          "X-User-Agent": "desktop",
          "X-RapidAPI-Key":
            "926a51764dmshd14556b960cb4efp1516ecjsn54c7caa56005",
          "X-RapidAPI-Host": "seo-api.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();

        if (result) {
            const resultsHTML = [];
            result.results.forEach((item) => {
                resultsHTML.push(`
                    <a href='${item.link}'>${item.title}</a>
                    <div>${item.description}</div>`);
                });

            seoResult.innerHTML = `<ul><li>${resultsHTML.join(
                                                        "</li><li>"
        )}</li></ul>`;
        }

        // result:
        // - ads: []
        // - ads_count: number
        // - answers: []
        // - results: []
        // -- title: string
        // -- link: string
        // -- description: string
        // -- additional_links: []
        // --- text: string
        // --- href: string
        // - shopping_ads: []
        // - places: []
        // - related_searches: {}
        // -- images: []
        // -- text: []
        // --- title: string
        // --- link: string
        // - image_results: []
        // - total: number
        // - knowledge_graph: string
        // - related_questions: string[]
        // - ts
        // - device_region: string
        // - device_type: string
      } catch (error)
      {
        console.error(error);
      }
    }
  });
});