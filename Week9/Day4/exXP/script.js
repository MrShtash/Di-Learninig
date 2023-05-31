let newDiv = document.getElementById('content');
let finder = document.getElementById('submit');
finder.addEventListener('click', submita);

let loading = document.getElementById('loading');
let icon = document.getElementById('icon');

async function submita(event)
{
    event.preventDefault();
    showLoading()
    let id = Math.floor(Math.random()*100)
    let r = await fetch(`https://www.swapi.tech/api/people/${id}`)
        // .then(res => res.json())
        // .then(data => console.log(data))
        // .catch(err => console.error(err))
    try
    {
        const json = await r.json();
        hideLoading();
            // console.log(json.result.properties);
        swResult(json.result.properties)
    }
    catch(e)
    // catch()
    {
        hideLoading();
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
    let contDiw = document.getElementById('content');
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