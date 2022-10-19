"use strict";
const newForm = document.querySelector('.js-new-form');
newForm.classList.remove("collapsed");

const listElement = document.querySelector('.js-list');

const kittenOneImage = "https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg";
const kittenOneName = "Anastacio";
const kittenOneNameUpper = kittenOneName.toUpperCase();


const kittenDesc = " Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!";
const kittenRace = "British Shorthair";


const kittenTwoImage = "https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg";
const kittenTwoName = "Fiona";
const kittenTwoNameUpper = kittenTwoName.toUpperCase();


const kittenThreeImage ="https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg";
const kittenThreeName = "Cielo";
const kittenThreeNameUpper = kittenThreeName.toUpperCase();


const kittenOne = `<li class="card">
<article>
  <img
    class="card_img"
    src= ${kittenOneImage}
    alt="gatito"
  />
  <h3 class="card_title">${kittenOneNameUpper }</h3>
  <h4 class="card_race">${kittenRace}</h4>
  <p class="card_description">
  ${kittenDesc}
  </p>
</article>
</li>`;

const kittenTwo = `<li class="card">
<img
  class="card_img"
  src= ${ kittenTwoImage}
  alt="gatito"
/>
<h3 class="card_title">${kittenTwoNameUpper}</h3>
<h4 class="card_race">${kittenRace}</h4>
<p class="card_description">
${kittenDesc}
</p>
</li>`;


const kittenThree = ` <li class="card">
<img
  class="card_img"
  src=${kittenThreeImage}
  alt="gatito"
/>
<h3 class="card_title">${kittenThreeNameUpper}</h3>
<h4 class="card_race">${kittenRace}</h4>
<p class="card_description">
${kittenDesc}
</p>
</li>`;

listElement.innerHTML = kittenOne + kittenTwo + kittenThree;

