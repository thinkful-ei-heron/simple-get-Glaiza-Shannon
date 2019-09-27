'use strict';

function getImages(num) {
  fetch('https://dog.ceo/api/breeds/image/random/50')
    .then(res => {
      //console.log(res);
      return res.json();
    })
    .then(resData => extractImages(resData, num))
    .catch(error => console.log(error));
}


function extractImages(resData, num) {
  let {
    message,
  } = resData;
  for (let i=0; i < num; i++){
    console.log(message[i]);
    $('.results').append(`<img src = ${message[i]}>`);
    
  }
}

function submitButton() {
  $('.searchDogImages').submit(function(event) {
    event.preventDefault();
    let numberInput = $('.userInputNumber').val();
    getImages(numberInput);
  });
}

$(submitButton);

