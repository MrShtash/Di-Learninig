const title_search_button = document.getElementsByClassName('search-button-title')[0];
const category_search_button = document.getElementsByClassName('search-button-category')[0];

title_search_button.addEventListener('click' , (event) =>{
    event.preventDefault()
    const form = document.getElementsByClassName('search-title')[0]
    const title = form.title.value
    fetch(`http://localhost:8000/search/title?title=${title}`).then((res) => {
        return res.json()
    }).then(result => {
        const results_container = document.getElementsByClassName('results-container')[0];
        results_container.innerHTML = ''
        for (item of result){
            let div = document.createElement('div');
            div.innerHTML= `
            <h2>${item.title}</h2>
            <p>${item.pubDate} | ${item.creator} | ${item.categories}</p>
            ${item.content}`
            results_container.append(div)
        }
    }).catch(e => console.log('fetch error' , e))
})

category_search_button.addEventListener('click' , (event) =>{
    event.preventDefault()
    const form = document.getElementsByClassName('search-category')[0]
    const category = form.category.value
    fetch(`http://localhost:8000/search/category?category=${category}`).then((res) => {
        return res.json()
    }).then(result => {
        const results_container = document.getElementsByClassName('results-container')[0];
        results_container.innerHTML = ''
        for (item of result){
            let div = document.createElement('div');
            div.innerHTML= `
            <h2>${item.title}</h2>
            <p>${item.pubDate} | ${item.creator} | ${item.categories}</p>
            ${item.content}`
            results_container.append(div)
        }
    })
    .catch(e => console.log('fetch error' , e))
})