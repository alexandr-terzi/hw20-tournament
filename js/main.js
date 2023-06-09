const raceCars = [
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

function generateRandomName() {
    const racersNames = [
      'Max',
      'Oliver',
      'Jack',
      'Charlie',
      'Harry',
      'Thomas',
      'George',
      'Leo',
      'Arthur',
      'Noah',
      'Oscar',
      'William',
      'James',
      'Henry',
      'Alfie',
      'Joshua',
      'Freddie',
      'Theo',
      'Ethan',
      'Jacob',
      'Daniel',
      'Isaac',
      'Logan',
      'Joseph',
      'Samuel',
      'Alexander',
      'Benjamin',
      'Mason',
      'Elijah',
      'Aiden',
      'Matthew'
    ];

    const shuffledNames = racersNames.sort(() => Math.random() - 0.5);
    return shuffledNames;

  }
  
let carsNames = [];

function getCarNameArr() {
    for (let i = 0; i < raceCars.length; i++) {
        carsNames.push(raceCars[i].brand + ' ' + raceCars[i].model);
    }
    return carsNames;
}

function generateCarName() {
    const carNames = getCarNameArr();
    const randomIndex = Math.floor(Math.random() * carNames.length);
    return carNames[randomIndex];
}

let racers = generateRandomName();
let racersAndCars = [];

let sliderWrapper = document.querySelector('.slider__wrapper');
let carsLogo = document.querySelector(".slider__wrapper .cars__logo");
let startBtn = document.querySelector(".slider__wrapper .buttons .start .startBtn");
let next = document.querySelector(".slider__wrapper .buttons .arrows .next");
let prev = document.querySelector(".slider__wrapper .buttons .arrows .prev");
let current_slide = 0;
let carsInfoWrapper = document.querySelector(".cars__info__wrapper");
let startPageWrapper = document.querySelector(".start__page__wrapper");
let sliderWrapperTitle = document.querySelector(".slider__wrapper__title");
let carsAnimation = document.querySelector('.cars_animation');
let seeTable = document.getElementById('btn_seeTable');
let resultsTable = document.querySelector('.results__table');
let winnerPage = document.querySelector('.winner__page');

renderSlider();
renderStartPage();

let logoCurrent = document.getElementById('audi');
let carsLogoImg = document.querySelectorAll(".slider__wrapper .cars__logo img");


function renderStartPage() {
    startPageWrapper.innerHTML = '';

    var startPageTitle = document.createElement('h1');
    var startPageTitleText = document.createTextNode("let's go race!");
    startPageTitle.classList.add('start__page__title');
    startPageTitle.appendChild(startPageTitleText);

    var startPageImgWrapper = document.createElement('div');
    startPageImgWrapper.classList.add('start__page__img__wrapper');
    var startPageImg = document.createElement('img');
    startPageImg.setAttribute('src', 'images/raceTrack.jpg');
    startPageImgWrapper.appendChild(startPageImg);
    
    var startPageBtn = document.createElement('button');
    var startPageBtnText = document.createTextNode("Race settings");
    startPageBtn.appendChild(startPageBtnText);

    var selectPageWrapper = document.createElement('div');
    selectPageWrapper.classList.add('select__page__wrapper');

    
    var selectPageSettings = document.createElement('div');
    selectPageSettings.classList.add('select__page__settings');
    
    var selectPageTitle = document.createElement('h1');
    var selectPageTitleText = document.createTextNode('Racers settings');
    selectPageTitle.appendChild(selectPageTitleText);

    var UserNameLabel = document.createElement('label');
    UserNameLabel.classList.add('user__name__label');

    var UserNameLabelText = document.createTextNode('Enter your name, please');
    UserNameLabel.appendChild(UserNameLabelText);

    var userName = document.createElement('input');
    userName.classList.add('user__name');
    userName.setAttribute('type', 'text');
    UserNameLabel.appendChild(userName);
    

    var racersNumberContainer = document.createElement('div');
    racersNumberContainer.classList.add('racers__number__container');

    var racersNumberLabel = document.createElement('label');
    racersNumberLabel.classList.add('racers__number__label');

    var racersNumberLabelText = document.createTextNode('Choose racers number: 2-18');
    racersNumberLabel.appendChild(racersNumberLabelText);

    var racersNumber = document.createElement('input');
    racersNumber.classList.add('racers__number');
    racersNumber.setAttribute('type', 'number');
    racersNumber.setAttribute('min', '2');
    racersNumber.setAttribute('max', '18');
    racersNumberLabel.appendChild(racersNumber);

    var generateBtn = document.createElement('button');
    generateBtn.classList.add('generate__btn');
    var generateBtnText = document.createTextNode("Generate racers list");
    generateBtn.appendChild(generateBtnText);

    var racersList = document.createElement('ol');
    racersList.classList.add('racers__list');

    var chooseYourCarBtn = document.createElement('button');
    var chooseYourCarBtnText = document.createTextNode("Choose your car");
    chooseYourCarBtn.appendChild(chooseYourCarBtnText); 

    racersNumberContainer.appendChild(UserNameLabel);
    racersNumberContainer.appendChild(racersNumberLabel);
    selectPageSettings.appendChild(racersNumberContainer);
    selectPageSettings.appendChild(generateBtn);
    selectPageSettings.appendChild(racersList);
    selectPageWrapper.appendChild(selectPageTitle);
    selectPageWrapper.appendChild(selectPageSettings);
    selectPageWrapper.appendChild(chooseYourCarBtn);
    startPageWrapper.appendChild(startPageTitle);
    startPageWrapper.appendChild(startPageImgWrapper);
    startPageWrapper.appendChild(startPageBtn);
    startPageWrapper.appendChild(selectPageWrapper);

    startPageBtn.addEventListener('click', function() {
        selectPageWrapper.style.display = 'flex';
        startPageTitle.style.display = 'none';
        startPageImgWrapper.style.display = 'none';
        startPageBtn.style.display = 'none';
    })

    generateBtn.addEventListener('click', function() {
        if (userName.value.length < 1 || userName.value.length === '') {
            alert('Enter your name, please!');
        } else if (racersNumber.value > 18 || racersNumber.value === '') {
            alert('Choose correct number, please!');
        } else if (racersNumber.value <= 18) {
            racers.length = parseInt(racersNumber.value) + 1;
            generateList(racers);
            console.log(racersAndCars);
        } 
    });

    function generateList(racers) {
        let listHTML = '';
        racersAndCars.push({
            racer: userName.value,
            car: generateCarName()
        });
        for (let i = 2; i < racers.length; i++) {
          listHTML += `<li>${i}: ${racers[i]}</li>`;
          racersAndCars.push({
            racer: racers[i],
            car: generateCarName()
        });
        }
        racersList.innerHTML = `<li>1: ${userName.value}</li>` + listHTML;

    }

    chooseYourCarBtn.addEventListener('click', function() {
        if (userName.value.length < 1 || userName.value.length === '') {
            alert('Enter your name, please!');
        } else if (racersNumber.value > 18 || racersNumber.value === '') {
            alert('Choose correct number, please!');
        } else if (racersList.innerHTML === '') {
            alert('Generate list, please');
        } else if (racersNumber.value <= 18) {
            startPageWrapper.style.display = 'none';
            sliderWrapper.style.display = 'block';
            sliderWrapperTitle.innerHTML = `Choose your car, ${userName.value}`;
        } 
        
    })

} 

function renderSlider() {
    carsLogo.innerHTML = '';

    for (let i = 0; i < raceCars.length; i++) {
        const car = raceCars[i];

        var logo = document.createElement('img');
        logo.classList.add('logo');
        logo.setAttribute('src', `images/${car.brand.toLowerCase()}.svg`);
        logo.setAttribute('alt', `${car.brand.toLowerCase()} logo`);
        logo.setAttribute('id', `${car.brand.toLowerCase()}`);
        carsLogo.appendChild(logo);
    }

    function addCurrent() {
        logoCurrent.classList.add('current');
    }

    function removeCurrent() {
        logoCurrent.classList.remove('current');
    }

    document.addEventListener('DOMContentLoaded', addCurrent);
    next.addEventListener('click', removeCurrent);
    prev.addEventListener('click', removeCurrent);

    function renderCarInfo(car) {
        var carsWrapper = document.createElement('div');
        carsWrapper.classList.add('cars__wrapper');
        
        var carsTitle = document.createElement('h1');
        var carsTitleText = document.createTextNode(`${car.brand} ${car.model}`);
        carsTitle.appendChild(carsTitleText);

        var carsImage = document.createElement('img');
        carsImage.setAttribute('src', `images/cars/${car.brand.toLowerCase()}.png`);
        carsImage.setAttribute('alt', `${car.brand.toLowerCase()}`);

        var carsInfoPower = document.createElement('h2');
        var carsInfoTextPower = document.createTextNode(`Power: ${car.power} HP`);
        carsInfoPower.appendChild(carsInfoTextPower);

        var carsInfoPrice = document.createElement('h2');
        var carsInfoTextPrice = document.createTextNode(`Price: ${car.price} $`);
        carsInfoPrice.appendChild(carsInfoTextPrice);

        var btnsCarsContainer = document.createElement('div');
        btnsCarsContainer.classList.add('btns__cars__container');

        var backButton = document.createElement('button');
        backButton.classList.add('back__button');
        var startRaceBtn = document.createElement('button');
        startRaceBtn.classList.add('start__race__btn');

        btnsCarsContainer.appendChild(backButton);
        btnsCarsContainer.appendChild(startRaceBtn);
        carsWrapper.appendChild(carsTitle);
        carsWrapper.appendChild(carsImage);
        carsWrapper.appendChild(carsInfoPower);
        carsWrapper.appendChild(carsInfoPrice);
        carsWrapper.appendChild(btnsCarsContainer);

        carsInfoWrapper.appendChild(carsWrapper);

        backButton.addEventListener('click', function() {
            sliderWrapper.style.display = 'block';
            carsInfoWrapper.style.display = 'none';
        });

        startRaceBtn.addEventListener('click', function () {
            sliderWrapper.style.display = 'none';
            carsInfoWrapper.style.display = 'none';
            racersAndCars[0].car = carsTitle.textContent; 
            console.log(racersAndCars);
            carsAnimation.style.display = 'block';
        });

    }

    function removeCarInfo() {
        carsInfoWrapper.innerHTML = '';
    }

    startBtn.addEventListener('click', function() {
        sliderWrapper.style.display = 'none';
        carsInfoWrapper.style.display = 'block';
        removeCarInfo();
        renderCarInfo(raceCars[current_slide]);
    });

    

}

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

let container = document.getElementById('container');

startBtn.addEventListener('click', function() {
  createImage(0); // Start with the first image
});

function createImage(index) {
  if (index >= racersAndCars.length) {
    return; // Exit the function when all images have been created
  }

  setTimeout(function() {
    let image = document.createElement('div');
    image.className = 'image';
    image.style.backgroundImage = createImage1(index);
    container.appendChild(image);

    animateImage(image);

    createImage(index + 1); // Generate the next image
  }, 2500); // Delay between each image generation (1000 milliseconds = 1 second)
}

function createImage1(i) {
  const bgImg = `url(images/cars/${racersAndCars[i].car.split(" ")[0].toLowerCase()}.png)`;
  return bgImg;
}

function animateImage(image) {
  let startX = 0; 
  let endX = container.offsetWidth; 
  let duration = 5000; 
  let start = null;

  function step(timestamp) {
    if (!start) start = timestamp;
    let progress = timestamp - start;

    let x = startX + (endX - startX) * (progress / duration);
    image.style.left = x + 'px';

    if (progress < duration) {
      window.requestAnimationFrame(step);
    } else {
      container.removeChild(image);
    }
  }

  window.requestAnimationFrame(step);
}

seeTable.addEventListener('click', function() {
    carsAnimation.style.display = 'none';
    resultsTable.style.display = 'flex';
    racersAndCars.forEach(function(racer) {
        racer.time = Math.floor(Math.random() * (200 - 120 + 1)) + 120;
    });
    renderResultsTable();
});

function renderResultsTable() {
    var table = document.createElement("table");
    table.className = 'table_blur';

// Создание заголовка таблицы
var thead = document.createElement("thead");
var headerRow = document.createElement("tr");
var headers = ["Name", "Car", "Time"];

headers.forEach(function(header) {
  var th = document.createElement("th");
  th.textContent = header;
  headerRow.appendChild(th);
});

thead.appendChild(headerRow);
table.appendChild(thead);

// Создание строк с данными участников заезда
var tbody = document.createElement("tbody");

racersAndCars.forEach(function(racer) {
  var row = document.createElement("tr");

  var nameCell = document.createElement("td");
  nameCell.textContent = racer.racer;
  row.appendChild(nameCell);

  var carCell = document.createElement("td");
  carCell.textContent = racer.car;
  row.appendChild(carCell);

  var timeCell = document.createElement("td");
  timeCell.textContent = racer.time + " sec";
  row.appendChild(timeCell);

  tbody.appendChild(row);
});

table.appendChild(tbody);

var winnerBtn = document.createElement('button');
winnerBtn.className = 'winner__btn';

winnerBtn.textContent = 'Winner';

// Добавление таблицы на страницу
resultsTable.appendChild(table);
resultsTable.appendChild(winnerBtn);


function renderWinner() {
    winnerPage.innerHTML = '';
  
    var raceWinner = getWinner();
    var winnerPageTitle = document.createElement('h1');
    if (raceWinner.racer === racersAndCars[0].racer) {
        winnerPageTitle.textContent = `${raceWinner.racer}, you are winner! Congratulations! This is a new record: ${raceWinner.time} sec!`;
    } else winnerPageTitle.textContent = `Today you are not as fast as usual! Click here and try again!`;
  
    var winnerCar = document.createElement('div');
    var winnerCarImg = document.createElement('img');
    if (raceWinner.racer === racersAndCars[0].racer) {
        winnerCarImg.src = createImage(raceWinner);
    } else winnerCarImg.src = `images/sad.png`;

  
    winnerCar.appendChild(winnerCarImg);
  
    winnerPage.appendChild(winnerPageTitle);
    winnerPage.appendChild(winnerCar);
  }
  
  function getWinner() {
    var winner = racersAndCars[0]; // Предполагаем, что первый элемент - победитель
    for (let i = 1; i < racersAndCars.length; i++) {
      if (racersAndCars[i].time < winner.time) {
        winner = racersAndCars[i];
      }
    }
    return winner;
  }
  
  function createImage(raceWinner) {
    const img = `images/cars/${raceWinner.car.split(" ")[0].toLowerCase()}.png`;
    return img;
  }
  
  winnerBtn.addEventListener('click', function() {
    renderWinner();
    resultsTable.style.display = 'none';
    winnerPage.style.display = 'flex';
  });

  winnerPage.addEventListener('click', () => window.location.reload());
  

}

console.log(racersAndCars);

