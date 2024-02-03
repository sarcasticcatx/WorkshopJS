console.log("hi");

const containerPeople = document.querySelector(".containerPeople");
const containerShip = document.querySelector(".containerShip");

const swapiPeople_url = "https://swapi.dev/api/people?page=1";
const swapiSpaceShips_url = "https://swapi.dev/api/starships/?page=1";

function fetchPeople(url) {
  fetch(url)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
      renderTablePeople(containerPeople, data.results);
    });
}

//First Buttons for the people

nextButton = document.querySelector(".next");
prevButton = document.querySelector(".previous");

let pages = 1;
function clickNext() {
  pages++;
  console.log("next clicked");
  fetchPeople(`https://swapi.dev/api/people?page=${pages}`);
}

function clickPrev() {
  if (pages > 1) {
    pages--;
  }
  fetchPeople(`https://swapi.dev/api/people?page=${pages}`);
}
nextButton.addEventListener("click", clickNext);
prevButton.addEventListener("click", clickPrev);

// fetchPeople();

//tabela za people

function renderTablePeople(containerPeople, peopleData) {
  let personHTML = "";
  for (let person of peopleData) {
    personHTML += `
        <tr>
          <td> ${person.name}</td> 
          <td>${person.height}</td>
          <td>${person.mass}</td>
          <td>${person.birth_year}</td>
          <td>${person.gender}</td>
          <td>${person.films.length}</td>
        </tr>
        `;
  }
  containerPeople.innerHTML = `<table class="peopleTable">
  <thead>
    <tr>
      <th>People</th>
      <th> Height</th>
      <th> Mass</th>
      <th> Birth Year</th>
      <th> Gender</th>
      <th> Appereances </th>
    </tr>
  </thead>
  <tbody>
    ${personHTML}
  </tbody>
</table>
`;
}

//add image
let imgOne = document.querySelector(".secondpic");

imgOne.addEventListener("click", function () {
  console.log("clicked");
  fetchPeople(swapiPeople_url);
});

function fetchSpaceShips() {
  fetch(swapiSpaceShips_url)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
      renderTableSpaceShips(containerShip, data.results);
    });
}

//Second Buttons for the ships

let otherPages = 1;
function clickOtherNext() {
  otherPages++;
  console.log("other next clicked");
  fetchSpaceShips(`https://swapi.dev/api/starships/page=${otherPages}`);
}

function clickOtherPrev() {
  if (otherPages > 1) {
    otherPages--;
  }
  fetchSpaceShips(`https://swapi.dev/api/starships/page=${otherPages}`);
}

otherNextButton = document.querySelector(".otherNext");
otherPrevButton = document.querySelector(".otherPrevious");

otherNextButton.addEventListener("click", clickOtherNext);
otherPrevButton.addEventListener("click", clickOtherPrev);

// fetchSpaceShips();

//ushe edna tabela za space ships

function renderTableSpaceShips(containerShip, informationData) {
  let infoHTML = "";
  for (let info of informationData) {
    infoHTML += `
          <tr>
            <td> ${info.name}</td> 
            <td>${info.manufacturer}</td>
            <td>${info.cost_in_credits}</td>
            <td>${info.crew}</td>
            <td>${info.passengers}</td>
            <td>${info.starship_class}</td>
          </tr>
          `;
  }

  // Add headers to both people and ships tables
  containerShip.innerHTML = `<table class="shipsTable">
    <thead>
      <tr>
    <th>Name</th>
    <th>Model</th>
    <th>Manufacturer </th>
    <th>Cost</th>
    <th>Crew </th>
    <th>Class</th>
      </tr>
    </thead>
    <tbody>
      ${infoHTML}
    </tbody>
  </table>
  `;
}
//ship imges
let imgTwo = document.querySelector(".thirdpic");
imgTwo.addEventListener("click", function () {
  console.log("clicked");
  fetchSpaceShips(swapiSpaceShips_url);
});
