let raceCars = [
    {
        brand: 'Audi',
        model: 'R8',
        power: 950,
        price: 200000
    },
    {
        brand: 'Bentley',
        model: 'Continental',
        power: 900,
        price: 500000
    },
    {
        brand: 'BMW',
        model: 'M5',
        power: 1000,
        price: 250000
    },
    {
        brand: 'Bugatti',
        model: 'Chiron',
        power: 1500,
        price: 2000000
    },
    {
        brand: 'Corvette',
        model: 'ZR-1',
        power: 950,
        price: 155000
    },
    {
        brand: 'Dodge',
        model: 'Viper',
        power: 1200,
        price: 180000
    },
    {
        brand: 'Ferrari',
        model: 'F12',
        power: 1000,
        price: 400000
    },
    {
        brand: 'Ford',
        model: 'Mustang GT',
        power: 1250,
        price: 160000
    },
    {
        brand: 'Honda',
        model: 'NSX',
        power: 1100,
        price: 150000
    },
    {
        brand: 'Koenigsegg',
        model: 'Regera',
        power: 1450,
        price: 1500000
    },
    {
        brand: 'Lamborghini',
        model: 'Veneno',
        power: 1300,
        price: 600000
    },
    {
        brand: 'Mazda',
        model: 'RX-7',
        power: 1000,
        price: 130000
    },
    {
        brand: 'Mclaren',
        model: 'F1',
        power: 1100,
        price: 300000
    },
    {
        brand: 'Mercedes-benz',
        model: 'AMG GT',
        power: 950,
        price: 270000
    },
    {
        brand: 'Mitsubishi',
        model: 'Lancer',
        power: 900,
        price: 160000
    },
    {
        brand: 'Nissan',
        model: 'Skyline',
        power: 1200,
        price: 200000
    },
    {
        brand: 'Porsche',
        model: '918 Spyder',
        power: 1100,
        price: 350000
    },
    {
        brand: 'Toyota',
        model: 'Supra',
        power: 1200,
        price: 190000
    }
];

let carsBrand = raceCars.map(function(obj) {
    let values = Object.values(obj);
    return values[0];
});
let carsModel = raceCars.map(function(obj) {
    let values = Object.values(obj);
    return values[1];
});
let carsPower = raceCars.map(function(obj) {
    let values = Object.values(obj);
    return values[2];
});
let carsPrice = raceCars.map(function(obj) {
    let values = Object.values(obj);
    return values[3];
});

let sliderWrapper = document.querySelector('.slider__wrapper');
let carsLogo = document.querySelector(".slider__wrapper .cars__logo");
let startBtn = document.querySelector(".slider__wrapper .buttons .start .startBtn");
let next = document.querySelector(".slider__wrapper .buttons .arrows .next");
let prev = document.querySelector(".slider__wrapper .buttons .arrows .prev");
let current_slide = 0;
let carsInfoWrapper = document.querySelector(".cars__info__wrapper");

function renderSlider() {
    carsLogo.innerHTML = '';

    for (let i = 0; i < carsBrand.length ; i++) {

        var logo = document.createElement('img');
        logo.classList.add('logo');
        logo.setAttribute('src', `images/${carsBrand[i].toLowerCase()}.svg`);
        logo.setAttribute('alt', `${carsBrand[i].toLowerCase()} logo`);
        logo.setAttribute('id', `${carsBrand[i].toLowerCase()}`);

        carsLogo.appendChild(logo);
    }
    function addCurrent() {
        return logo.classList.add('current');
    }

    function removeCurrent() {
        return logo.classList.remove('current');
    }
    
    document.addEventListener('DOMContentLoaded', addCurrent);
    next.addEventListener('click', removeCurrent);
    prev.addEventListener('click', removeCurrent);
}

renderSlider();

function renderCarInfo() {
    carsInfoWrapper.innerHTML = '';

    for (let i = 0, j = 0, k = 0, l = 0; i < carsBrand.length, j < carsModel.length, k < carsPower.length, l < carsPrice.length; i++, j++, k++, l++) {

        var carsWrapper = document.createElement('div');
        carsWrapper.classList.add('cars__wrapper');

        
        var carsTitle = document.createElement('h1');
        var carsTitleText = document.createTextNode(`${carsBrand[i]} ${carsModel[j]}`);
        carsTitle.appendChild(carsTitleText);

        var carsImage = document.createElement('img');
        carsImage.setAttribute('src', `images/cars/${carsBrand[i].toLowerCase()}.png`);
        carsImage.setAttribute('alt', `${carsBrand[i].toLowerCase()}`);
        carsImage.setAttribute('id', `${carsBrand[i].toLowerCase()}`);

        var carsInfoPower = document.createElement('h2');
        var carsInfoTextPower = document.createTextNode(`Power: ${carsPower[k]} HP`);
        carsInfoPower.appendChild(carsInfoTextPower);

        var carsInfoPrice = document.createElement('h2');
        var carsInfoTextPrice = document.createTextNode(`Price: ${carsPrice[l]} $`);
        carsInfoPrice.appendChild(carsInfoTextPrice);

        carsWrapper.appendChild(carsTitle);
        carsWrapper.appendChild(carsImage);
        carsWrapper.appendChild(carsInfoPower);
        carsWrapper.appendChild(carsInfoPrice);

        carsInfoWrapper.appendChild(carsWrapper);

    }

}



let carsLogoImg = document.querySelectorAll(".slider__wrapper .cars__logo img");

next.addEventListener("click", function () {
    carsLogoImg[current_slide].style.opacity = 0;
    if (current_slide == carsLogoImg.length-1) {
        current_slide = 0
    } else {
        current_slide++;
    }
    carsLogoImg[current_slide].style.opacity = 1;
});

prev.addEventListener("click", function () {
    carsLogoImg[current_slide].style.opacity = 0;
    if (current_slide == 0) {
        current_slide = carsLogoImg.length-1
    } else {
        current_slide--;
    }
    carsLogoImg[current_slide].style.opacity = 1;
});

renderCarInfo()

var carsInfoContainer = document.getElementsByClassName('cars__wrapper');
var newCarsInfoContainer = Array.from(carsInfoContainer);

// startBtn.addEventListener('click', function () {
    

//     for (let i = 0; i < newCarsInfoContainer.length; i++) {
//         if (logo.getAttribute('id') === carsImage.getAttribute('id')) {
//             return console.log(newCarsInfoContainer);
//         } else return console.log('')
//     }
// })
