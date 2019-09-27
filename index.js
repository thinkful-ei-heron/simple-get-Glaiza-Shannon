// 'use strict';

// function getImages(num) {
//   fetch('https://dog.ceo/api/breeds/image/random/50')
//     .then(res => {
//       //console.log(res);
//       return res.json();
//     })
//     .then(resData => extractImages(resData, num))
//     .catch(error => console.log(error));
// }


// function extractImages(resData, num) {
//   let {
//     message,
//   } = resData;
//   for (let i=0; i < num; i++){
//     console.log(message[i]);
//     $('.results').append(`<img src = ${message[i]}>`);

//   }
// }

// function submitButton() {
//   $('.searchDogImages').submit(function(event) {
//     event.preventDefault();
//     $('.results').html('');
//     let numberInput = $('.userInputNumber').val();
//     getImages(numberInput);
//     $('.userInputNumber').val('');
//   });
// }

// $(submitButton);



let root = 'https://dog.ceo/api/breed/${userinput}/images/random';


function getImages(breed) {
  fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(res => {
      return res.json();
    })
    .then(resData => extractImages(resData))
    .catch(error => {
      console.log(error);
    });
}

function extractImages(resData) {
  let {
    message,
    status,
    code
  } = resData;

  if (status !== 'success') {
    $('.results').append(`Error: ${code}. ${message}`);
  } else {
    $('.results').append(`<img src = ${message}>`);
  }
}


function submitButton() {
  $('.searchDogImages').submit(function (event) {
    event.preventDefault();
    $('.results').html('');
    let breedInput = $('.userInputBreed').val();
    getImages(breedInput);
    $('.userInputBreed').val('');
  });
}


$(submitButton);