// const apiData = {
//   url: 'https://api.covid19api.com/live',
//   type: 'country',
//   // id: 'ca',
// }
// const {url, type, id} = apiData;

// const apiUrl = `${url}/${type}`;
// console.log(apiUrl);

// fetch(apiUrl)
//       .then( (data) => data.json())
//       .then( (country) => generateHtml(country))

// const generateHtml = (data) => {
//   // console.log(data);
//   const tableBody = document.getElementById('tableData');
//   let dataHtml = '';
//     // console.log(dataHtml);
//   for(let item of data) {
//     dataHtml += `<tr>
//                     <td>${item.Province}</td>
//                     <td>${item.Confirmed}</td>
//                     <td>${item.Deaths}</td>
//                     <td>${item.Recovered}</td>
//                 </tr>`;
//   }

//   // const mainDiv = document.querySelector('.main');
//   tableBody.innerHTML = dataHtml;
// }
// data.map((item) => `
//                                       <tr>
//                                           <td>${item.Province}</td>
//                                           <td>${item.Confirmed}</td>
//                                             <td>${item.Recovered}</td>
//                                       </tr>
//                                      `);
// const html = data.map((item) => `
  
  //   <div class="province">${item.Province}</div>
  //   <div class="date"> ${item.Date}</div>
  
  // `); 

  // const html = `
  //     <div class="province">Province: ${data.Province}</div>
  //     <div class="date">Date: ${data.Date}</div>
  //     <div class="confirmed">Confirmed: ${data.Confirmed}</div>
  //     <div class="deaths">Deaths: ${data.Deaths}</div>
  //     <div class="recovered">Recovered: ${data.Recovered}</div>   
  // `

  fetch('https://api.covid19api.com/summary').then ( (apiData) => {
    console.log(apiData);
    return apiData.json();
  }).then( (actualData) => {
    // console.log(actualData);
    // console.log(actualData.Countries[76]);
    // const myData = actualData.Countries[76];

    // document.getElementById('apiIndia').innerHTML = `The name of the country is ${myData.Country}.
    //                                                   The Total Confirmed cases here are ${myData.TotalConfirmed}.`
    generateHTML(actualData);
  }).catch( (error) => {
    console.log(`The Error: ${error}`);
  })   

const generateHTML = (data) =>{

  const globalConfirmed = document.getElementById('confirmed');
  globalConfirmed.innerHTML = `${data.Global.TotalConfirmed}`;

  const globalRecovered = document.getElementById('recovered');
  globalRecovered.innerHTML = `${data.Global.TotalRecovered}`;

  const globalDeaths = document.getElementById('deaths');
  globalDeaths.innerHTML = `${data.Global.TotalDeaths}`;
  const tableBody =  document.getElementById('tableData');
  
  let dataHtml = '';
  for(let item of data.Countries) {
    dataHtml += `<tr>
                    <td>${item.Country}</td>
                    <td>${item.NewConfirmed}</td>
                    <td>${item.NewRecovered}</td>
                    <td>${item.TotalConfirmed}</td>
                    <td>${item.TotalDeaths}</td>
                    <td>${item.TotalRecovered}</td>
                  </tr>`
  }
  tableBody.innerHTML = dataHtml;
  
}
  