console.log("hi");

const containerPeople = document.querySelector(".containerPeople");
const containerShip = document.querySelector(".containerShip");

const swapiPeople_url = "https://swapi.dev/api/people/";
const swapiSpaceShips_url = "https://swapi.dev/api/starships/?page=1";

function fetchPeople() {
  fetch(swapiPeople_url)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
      renderTablePeople(containerPeople, data);
    });
}
// fetchPeople();

//tabela za people
const person = [];

function renderTablePeople(containerPeople, people) {
  let personHTML = "";
  for (let person of people) {
    personHTML += `
        <tr>
          <td> ${person.name}</td> 
          <td>${person.height}</td>
          <td>${person.mass}</td>
          <td>${person.birth_year}</td>
          <td>${person.gender}</td>
          <td>${person.appearence}</td>
        </tr>
        `;
  }
  containerPeople.innerHTML = `<table>
  <thead>
    <tr>
      <th>People</th>
    </tr>
  </thead>
  <tbody>
    ${personHTML}
  </tbody>
</table>
`;
}
//add image
let img = document.getElementsByClassName("secondpic");

img.addEventListener("click", function () {
  console.log("clicked");
});
document.body.appendChild(table);

function fetchSpaceShips() {
  fetch(swapiSpaceShips_url)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
      //   renderTableSpaceShips(containerShip, data);
    });
}

// fetchSpaceShips();

//ushe edna tabela za space ships
const info = [];

function renderTableSpaceShips(containerShip, information) {
  let infoHTML = "";
  for (let info of information) {
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
  containerShip.innerHTML = `<table>
    <thead>
      <tr>
        <th>Ship</th>
      </tr>
    </thead>
    <tbody>
      ${infoHTML}
    </tbody>
  </table>
  `;
}
