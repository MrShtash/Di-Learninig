// Exercise 1: Giphy API
// 'https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My'
// API key: hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My

// fetch(`https://api.giphy.com/v1/gifs/search?q=hilarious&limit=20&rating=g1&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`, {
//     method:'GET'
// })
// .then(res => res.json())
// .then(data =>{
//     console.log(data);
// })

// OR:
// async function newF() {
//     let r = await fetch(`https://api.giphy.com/v1/gifs/search?q=hilarious&limit=20&rating=g1&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`);
//     if (r.status == 200)
//     {
//         const json = await r.json ()
//         console.log(json.data);
//     }
//     else
//     {
//         throw new Error('bad query')
//     }
// }
// newF()
// .then (() => console.log('ok'))
// .catch(console.log(Error))





// Exercise 2: Giphy API
// fetch(`https://api.giphy.com/v1/gifs/search?q=sun&limit=10&offset=2&rating=g1&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`, {
//     method:'GET'
// })
// .then(res => res.json())
// .then(data =>{
//     console.log(data);
// })

// OR:
// async function newF() {
//     let limit = 10;
//     let offset = 2;
//     let topic = 'sun';
//     let r = await fetch(`https://api.giphy.com/v1/gifs/search?q=${topic}&limit=${limit}&offset=${offset}&rating=g1&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`)
//     if (r.status == 200)
//     {
//         const json = await r.json ()
//         console.log(json.data);
//     }
//     else
//     {
//         throw new Error('bad query')
//     }
// }
// newF()
// .then (() => console.log('ok'))
// .catch(console.error)





// Exercise 3: Async Function
// fetch("https://www.swapi.tech/api/starships/9/")
//     .then(response => response.json())
//     .then(objectStarWars => console.log(objectStarWars.result));

// improve --->

// async function newAsync () {
//     const res = await fetch ("https://www.swapi.tech/api/starships/9/");
//     const data = await res.json();
//     console.log(data);
// }
// newAsync()

// OR:
// async function newF(){
//     let url = 'https://www.swapi.tech/api/starships/9';
//     let r = await fetch (url);
//     if (r.status == 200)
//     {
//         let json = await response.json()
//         console.log(json.result.properties) 
//     }   
//     else
//     {
//         throw new Error('bad query') 
//     }
// }
// newF()
// .catch(console.error)






// Exercise 4: Analyze
// function resolveAfter2Seconds() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve('resolved');
//         }, 2000);
//     });
// }

// async function asyncCall() {
//     console.log('calling');
//     let result = await resolveAfter2Seconds();
//     console.log(result);
// }

// asyncCall();
// forecast: output: 'calling', after that after 2 sec 'resolved'
// fact: I'm right