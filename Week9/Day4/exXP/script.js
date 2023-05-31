let newDiv = document.getElementById('content');
let finder = document.getElementById('submit');
finder.addEventListener('click', submita);

let loading = document.getElementById('loading');
let icon = document.getElementById('icon');
let homeworld;

let contDiw = document.getElementById('content');

async function submita(event)
{
    event.preventDefault();
    showLoading()
    let id = Math.floor(Math.random()*100)
    
        // .then(res => res.json())
        // .then(data => console.log(data))
        // .catch(err => console.error(err))
    try
    {
        let r = await fetch(`https://www.swapi.tech/api/people/${id}`)
        if(!r.status == '200'){
            throw new Error('not found')
        }
        const json = await r.json();
        hideLoading();
            // console.log(json.result.properties);
        let homeworldname = 'not valid'
        console.log(json.result.properties.homeworld);
        if (json.result.properties.homeworld)
        {
            let r2 = await fetch(json.result.properties.homeworld)
            let resFromR2 = await r2.json()
            // homeworld = r2.result.properties.name
            homeworldname = resFromR2.result.properties.name;
        }
        swResult({...json.result.properties,homeworld:homeworldname})
    }
    catch(e)
    // catch()
    {
        hideLoading();
        contDiw.innerHTML = '';
        let erMessage = document.createElement('p');
        erMessage.textContent = "Oh No! That person isn't available.";
        erMessage.setAttribute('style', 'color: yellow');
        contDiw.appendChild(erMessage);
        console.log(`${e} "Oh No! That person isnt available.`);
        // console.log("Oh No! That person isnt available.")
    }
}

function showLoading() {
    icon.classList.add('fa-solid', 'fa-spinner', 'fa-spin-pulse')
}

function hideLoading() {
    icon.classList.remove('fa-solid', 'fa-spinner', 'fa-spin-pulse')
}

function swResult(properties) {
    console.log(properties);
    
    contDiw.innerHTML = '';
    const labels = {
       name: 'Name: ',
       height: 'Height: ',
       gender: 'Gender: ',
       birth_year: 'Birth Year: ',
       homeworld: 'Homeworld: '
     };

    for(item in properties)
    {
        // if(item == 'name' || item == 'height' || item == 'gender' || item == 'birthy_year' || item == 'homeworld')
        if (labels[item])
        {
            let dataDiv = document.createElement('p');
            // dataDiv.textContent = properties[item];
            dataDiv.textContent = labels[item] + properties[item];
            dataDiv.setAttribute('style', 'color: yellow')
                // dataDiv.textContent = properties.height;
                // dataDiv.textContent = properties.gender;
                // dataDiv.textContent = properties.birthy_year;
                // dataDiv.textContent = properties.homeworld;
            contDiw.appendChild(dataDiv);
        }
    }
}