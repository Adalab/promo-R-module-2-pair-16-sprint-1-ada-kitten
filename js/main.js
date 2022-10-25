"use strict";
const newForm = document.querySelector('.js-new-form');
// newForm.classList.remove("collapsed");

const listElement = document.querySelector('.js-list');

const kittenOneImage = "https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg";
const kittenOneName = "Anastacio";
const kittenOneNameUpper = kittenOneName.toUpperCase();
const kittenOneDesc = " Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!";
const kittenOneRace = "";


const kittenTwoImage = "https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg";
const kittenTwoName = "Fiona";
const kittenTwoNameUpper = kittenTwoName.toUpperCase();
const kittenTwoDesc = " Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!";
const kittenTwoRace = "British Shorthair";


const kittenThreeImage = "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg";
const kittenThreeName = "Cielo";
const kittenThreeNameUpper = kittenThreeName.toUpperCase();
const kittenThreeDesc = " Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!";
const kittenThreeRace = "British Shorthair";

// const input_search_desc = document.querySelector('.js_in_search_desc');
// input_search_desc.value = '';
// const descrSearchText = input_search_desc.value;


// let kittenOne = `<li class="card">
// <article>
//   <img
//     class="card_img"
//     src= ${kittenOneImage}
//     alt="gatito"
//   />
//   <h3 class="card_title"> ${kittenOneNameUpper}</h3>`;

//   if (kittenOneRace === "") {
//     kittenOne += `No se ha especificado la raza`;
//   } else {
//     kittenOne += kittenOneRace;
//   }
  
//   kittenOne += `<p class="card_description">
//   ${kittenOneDesc}
//   </p>
// </article>
// </li>`;

// let kittenTwo = `<li class="card">
// <img
//   class="card_img"
//   src= ${kittenTwoImage}
//   alt="gatito"
// />
// <h3 class="card_title">${kittenTwoNameUpper}</h3>`;

// if (kittenTwoRace === "") {
//   kittenTwo += `No se ha especificado la raza`;
// } else {
//   kittenTwo += kittenTwoRace;
// }
// kittenTwo += `<p class="card_description">
// ${kittenTwoDesc}
// </p>
// </li>`;


// let kittenThree = ` <li class="card">
// <img
//   class="card_img"
//   src=${kittenThreeImage}
//   alt="gatito"
// />
// <h3 class="card_title">${kittenThreeNameUpper}</h3>`;

// if (kittenThreeRace === "") {
//   kittenThree += `No se ha especificado la raza`;
// } else {
//   kittenThree += kittenThreeRace;
// }
// kittenThree += `<p class="card_description">
// ${kittenThreeDesc}
// </p>
// </li>`;

// listElement.innerHTML = kittenOne + kittenTwo + kittenThree;





const plusCircle = document.querySelector(".js-plus-circle");
// ESTE EVENTO LO HE MOVIDO A LA FUNCION MAS ABAJO
// plusCircle.addEventListener("click", (event) =>{
//   event.preventDefault();
//   if (newForm.classList.contains('collapsed')) {
//     newForm.classList.remove('collapsed')
// } else {
//     newForm.classList.add('collapsed')
// }
  // 
// })

const btnAdd = document.querySelector(".js-btn-add");
const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const inputRace = document.querySelector(".js-input-race");
const labelMesageError = document.querySelector('.js-label-error');




btnAdd.addEventListener('click', addNewKitten);
function addNewKitten(event) {
  event.preventDefault();
  const valueDesc = inputDesc.value;
  const valuePhoto = inputPhoto.value;
  const valueName = inputName.value;
  if (valueDesc === '' || valuePhoto === '' || valueName === '') {
    labelMesageError.innerHTML = "Debe rellenar todos los valores";
  } else {
    labelMesageError.innerHTML = "" ;
  }
}


const btnSearch = document.querySelector(".js-button-search");
const searchDesc = document.querySelector('.js_in_search_desc');
const searchRace = document.querySelector (".js_in_search_race");
const searchResult = document.querySelector (".js-result-search");


btnSearch.addEventListener("click", (event) =>{
  event.preventDefault();
  const valueDesc = searchDesc.value;
  const valueRace = searchRace.value;
  if (valueDesc === '' || valueRace === '') {
    searchResult.innerHTML = "Debe rellenar todos los valores";
  }
   else {
    searchResult.innerHTML = "" ;
  }
})


const filterKitten = (event) => {
  const kitten = cat1.kittenOneDesc;
  const valueDesc = searchDesc.value;
  
  if (kitten.includes(valueDesc)) {
  console.log('jsjs');
    listElement.innerHTML += kitten;
  }
  // if (kittenTwoDesc.includes(descrSearchText)) {
  //   listElement.innerHTML += kitten;
  // }
  // if (kittenThreeDesc.includes(descrSearchText)) {
  //   listElement.innerHTML += kittenThree;
  // }
  
}  


btnSearch.addEventListener('click', filterKitten);






const btnCancel = document.querySelector(".js-btn-cancel");
const valueRace = inputRace.value;

const cancelNewKitten = (event) => {
  event.preventDefault();
  newForm.classList.add("collapsed");
  inputName.value = "";
  inputPhoto.value = "";
  inputDesc.value = "";
  inputRace.value = "";

};
btnCancel.addEventListener("click", cancelNewKitten);

// funciones

// estas funciones las pedian en el ejercicio pero no hacen nada.
// function showNewCatForm() {
//   newForm.classList.remove('collapsed');
  
// }
// function hideNewCatForm() {
//   newForm.classList.add('collapsed');
// }

plusCircle.addEventListener('click', handleClickNewCatForm);

function handleClickNewCatForm(event) {
  event.preventDefault();
  if (newForm.classList.contains('collapsed')) {
    newForm.classList.remove('collapsed');
  } else {
    newForm.classList.add('collapsed');
  }
}

// crear un nuevo gatito



debugger;

function renderKitten(url, desc, name, race) {
  
  let result = `<li class="card">
  <article>
  <img
    class="card_img"
    src = ${url}
    alt="gatito"
  />
  <h3 class="card_title"> ${name}</h3>`;

  if (race === "") {
    result += `No se ha especificado la raza`;
  } else {
    result += race;
  }
  
  result += `<p class="card_description">
  ${desc}
  </p>
</article>
</li>`;
return result;
}

//  Preguntar mañana
// const cat1 = renderKitten ("https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg", " Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!","Anastacio", "British Shorthair" );
// const cat2 =renderKitten  ("https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg", " Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!","Fiona", "British Shorthair" );
// const cat3 = renderKitten  ("https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg", " Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!","Cielo", "British Shorthair" );


const cat1 = renderKitten(`${kittenOneImage}`, `${kittenOneDesc}`, `${kittenOneNameUpper}`, `${kittenOneRace}`);
const cat2 = renderKitten(`${kittenTwoImage}`, `${kittenTwoDesc}`, `${kittenTwoNameUpper}`, `${kittenTwoRace}`);
const cat3 = renderKitten(`${kittenThreeImage}`, `${kittenThreeDesc}`, `${kittenThreeNameUpper}`, `${kittenThreeRace}`);

listElement.innerHTML = cat1 + cat2 + cat3;