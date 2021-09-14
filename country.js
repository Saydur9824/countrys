const collectData = () =>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => callData(data))
};
collectData()
const callData = (country) =>{
    const countryContainer = document.getElementById('country-container');
   country.forEach(count =>{
       const div = document.createElement('div');
       div.classList.add('style');
       div.innerHTML = `
            <h3>Country Name : ${count.name}</h3>
            <p>City : ${count.capital}</p>
       
            <button onclick="loadeDetails('${count.name}')">Details</button>
       `;
       countryContainer.appendChild(div);    
   })
};


const loadeDetails = detaInfo => {
    const url =`https://restcountries.eu/rest/v2/name/${detaInfo}`
    fetch(url)
   .then(res => res.json())
   .then(deta => loadData(deta[0]))
};

const loadData = info =>{
    console.log(info)
    const countryDetails = document.getElementById('country-Details')
    countryDetails.innerHTML = `
    <h4>${info.name}</h4>
    <p>${info.population}</p>
    <img width="100px" src="${info.flag}">
    `

}




















/* 
const loadeDetails = name =>{
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
    .then(res => res.json())
    .then(data => showDeta(data[0]))
}

const showDeta = country =>{
    
    const saveDeta = document.getElementById('country-Details');
    saveDeta.innerHTML = `
     <h5>${country.name}</h5>
     <p>${country.population}</p>
     img src ="${country.flag}"
    `;
    console.log(country)
} */