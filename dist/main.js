/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _reservation = __webpack_require__(1);

var _reservation2 = _interopRequireDefault(_reservation);

var _slider = __webpack_require__(2);

var _form = __webpack_require__(3);

var _form2 = _interopRequireDefault(_form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var buttons = document.querySelectorAll('.button');
buttons.forEach(function (btn) {
  btn.addEventListener('click', function () {
    localStorageClicked(this.id);
  });
});
window.addEventListener('load', function () {
  if (!localStorage.type) {
    localStorage.setItem('type', 'DINNER');
  }
});
/*LOCAL STORAGE*/
function localStorageClicked(e) {

  if (e == 'dinner-card') {
    localStorage.setItem("type", 'DINNER');
  } else if (e == 'lunch-card') {
    localStorage.setItem("type", "LUNCH");
  } else if (e == 'catering-card') {
    localStorage.setItem("type", "CATERING");
  }
}
/*KRAJ*/

//window.addEventListener('load', slider);
//window.addEventListener("load", formatDate);
//window.addEventListener("load", people);
//window.addEventListener("load", time);
window.addEventListener('scroll', scrollHeader);
//HEADER SCROLL FUNKCJA
function scrollHeader() {

  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    document.getElementById("header").style.opacity = "1";
  } else {
    document.getElementById("header").style.opacity = "0.7";
  }
}
//KRAJ

//MENU START
function showMenu(e) {

  e.classList.toggle("change");
  document.getElementById('menu').classList.toggle('menu-show');
}

document.getElementById('cont').addEventListener('click', function () {
  showMenu(this);
});
/*MENU KRAJ*/

/* SLAJDER NA INDEX STRANI: POCETAK
let slideCount = 0;

function slider() {

  let slides = document.getElementsByClassName("slider-img");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideCount++;

  if (slideCount > slides.length) {
    slideCount = 1;
  }

  slides[slideCount - 1].style.display = "block";
  setTimeout(slider, 4000);
}
/*KRAJ*/

/*NE DOZVOLJAVA ODABIR DATUMA KOJI JE PRE SUTRASNJEG I POSTAVLJA DEFAULT VALUE NA SUTRASNJI DATUM*/
/*function formatDate(){
	
  let dateControl = document.querySelector('input[type="date"]');
  
  let date = new Date();
  let year=date.getFullYear();
  let day=date.getUTCDate();
  
  if (day<10){
	  day=`0${day}`;
  }
  
  let month=date.getMonth() + 1;
  
  dateControl.setAttribute('min',`${year}-${month}-${day}`);
  dateControl.value = `${year}-${month}-${day}`;
}
/*KRAJ*/

//POPUNJAVANJE DDL ZA VREME
/*function time(){
  let time=document.getElementById('time');
  let value=15;
  for (let i = 0; i < 9; i++){
    let newOption=document.createElement('option');
    newOption.setAttribute('value',`${value}:00`);
    let optionText=document.createTextNode(`${value}:00`);
    newOption.appendChild(optionText);
    time.appendChild(newOption);
    value++;
    }
};
//KRAJ

//POPUNJAVANJE DDL ZA BROJ LJUDI
/*function people(){
  let people=document.getElementById('people');
  let value=2;
  for (let i=0;i<22;i++){
    let newOption=document.createElement('option');
    newOption.setAttribute('value',value);
    let optionText=document.createTextNode(`${value} people`);
    newOption.appendChild(optionText);
    people.appendChild(newOption);
    value++;
  }
};
//KRAJ
/*
//GOOGLE MAP LOKACIJA
function initMap() {
        var uluru = {lat: 40.663059, lng: -73.962837};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 12,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }
//KRAJ*/

/*AJAX ZAHTEV*/
function request(url, f, typeOfFood) {

  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {
    if (xhttp.readyState === XMLHttpRequest.DONE && xhttp.status === 200) {
      f(this, typeOfFood);
    }
  };

  xhttp.open("GET", url);
  xhttp.responseType = 'text';
  xhttp.send();
}
/* KRAJ */

/* POPUNJAVANJE menu.html STRANICE SA RECEPTIMA IZ FAJLA food.json U ZAVISNOSTI KOJI RECEPTI SU ODABRANI*/
function getMenu(xml, type) {
  /* DRUGI ARGUMENT JE KEY U FAJLU food.json KAKO BI ZNAO KOJE RECEPTE DA DOVUCE IZ AJAX ZAHTEVA*/
  var obj = JSON.parse(xml.responseText);
  var number = void 0;
  var text = "";

  (function () {
    /* BRISE NASLOV I gold.png IZ DIV-a id='gold' KAKO BI SE NASLOV MENJAO NAKON ODABIRA RECEPTA*/
    var gold = document.getElementById("gold");
    while (gold.hasChildNodes()) {
      gold.removeChild(gold.firstChild);
    }
  })();

  (function () {
    /*PRAVI NOVI NASLOV I gold.png*/
    var heading = document.createElement('h1');
    var headingText = document.createTextNode(type);
    heading.appendChild(headingText);
    var gold = document.createElement('img');
    gold.setAttribute('src', 'images/other/gold.png');
    document.getElementById('gold').appendChild(heading);
    document.getElementById('gold').appendChild(gold);
  })();

  if (type == "DINNER") {
    //PROVERAVA KOJI KEY JE SELEKTOVAN U food.json I ONDA POPUNJAVA DIV id='gold' i DIV id='recipes'
    number = 0;
    text = "";
  } else if (type == 'LUNCH') {
    number = 1;
    text = "";
  } else if (type == 'CATERING') {
    number = 2;
    text = "";
  }
  for (var i = 0; i < obj[number][type].length; i++) {
    var name = obj[number][type][i].name;
    var desc = obj[number][type][i].desc;
    text += '<div class=\'recipe\'><h4>' + name + '</h4><p>' + desc + '</p></div>';
    document.getElementById('recipes').innerHTML = text;
  }
}
/*KRAJ*/
document.getElementById("btnDinner").addEventListener('click', function () {
  localStorage.setItem('type', 'DINNER');
  request('food.json', getMenu, 'DINNER');
});
document.getElementById('btnLunch').addEventListener('click', function () {
  localStorage.setItem('type', 'LUNCH');
  request('food.json', getMenu, 'LUNCH');
});
document.getElementById('btnCatering').addEventListener('click', function () {
  localStorage.setItem('type', 'CATERING');
  request('food.json', getMenu, 'CATERING');
});

window.addEventListener('load', function () {
  request('food.json', getMenu, localStorage.getItem('type'));
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Reservation = function () {
	function Reservation() {
		_classCallCheck(this, Reservation);

		this.first = document.querySelector('#first');
		this.last = document.querySelector('#last');
		this.people = document.querySelector('#people');
		this.email = document.querySelector('#email');
		this.date = document.querySelector('#date');
		this.time = document.querySelector('#time');
		this.phone = document.querySelector('#tel');
		this.buttons = document.querySelector('#submit');

		this._addListeners();
	}

	_createClass(Reservation, [{
		key: 'createReservation',
		value: function createReservation() {
			var _this = this;

			var divs = document.querySelectorAll('.order');

			if (divs.length > 0) {

				alert("Please confirm your reservation below or cancel it so you can make another one");
			} else {

				var newDiv = document.createElement('div');
				newDiv.setAttribute('class', 'order');

				var newSubmit = document.createElement('button');
				var newDelete = document.createElement('button');

				var cancel = document.createTextNode('Cancel');
				var proceed = document.createTextNode('Proceed');

				newDelete.setAttribute('class', 'for-delete');

				newDelete.appendChild(cancel);
				newSubmit.appendChild(proceed);

				var text = '<h3>' + this.first.value + ' ' + this.last.value + '</h3>\n\t\t\t\t<h4>' + this.phone.value + '</h4>\n\t\t\t\t<h4>' + this.email.value + '</h4>\n\t\t\t\t<p>' + this.date.value + '</p>\n\t\t\t\t<p>' + this.people.value + ' people</p>\n\t\t\t\t<p>' + this.time.value + '</p>';

				newDiv.innerHTML = text;
				newDiv.appendChild(newDelete);
				newDiv.appendChild(newSubmit);

				document.getElementById('orders').appendChild(newDiv);

				var forDelete = document.querySelectorAll('.for-delete');
				forDelete.forEach(function (element) {
					element.addEventListener('click', _this.removeReservation);
				});
			}
		}
	}, {
		key: 'removeReservation',
		value: function removeReservation() {

			this.parentNode.remove();
		}
	}, {
		key: '_addListeners',
		value: function _addListeners() {

			if (this.buttons) {
				this.buttons.addEventListener('click', this.createReservation.bind(this));
			}
		}
	}]);

	return Reservation;
}();

exports.default = new Reservation();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.slider = slider;
var slideCount = exports.slideCount = 0;

function slider() {
  var slides = document.getElementsByClassName("slider-img");

  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  exports.slideCount = slideCount += 1;

  if (slideCount > slides.length) {
    exports.slideCount = slideCount = 1;
  }

  slides[slideCount - 1].style.display = "block";
  setTimeout(slider, 4000);
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Form = function () {
    function Form() {
        _classCallCheck(this, Form);

        this.populateTime();
        this.populatePeople();
        this.formatDate();
    }

    _createClass(Form, [{
        key: 'populatePeople',
        value: function populatePeople() {
            var value = 2;
            var people = document.getElementById('people');
            if (people) {

                for (var i = 0; i < 22; i++) {
                    var newOption = document.createElement('option');
                    newOption.setAttribute('value', value);
                    var optionText = document.createTextNode(value + ' people');
                    newOption.appendChild(optionText);
                    people.appendChild(newOption);
                    value++;
                }
            }
        }
    }, {
        key: 'populateTime',
        value: function populateTime() {
            var time = document.getElementById('time');
            var value = 15;
            if (time) {
                for (var i = 0; i < 9; i++) {

                    var newOption = document.createElement('option');
                    newOption.setAttribute('value', value + ':00');
                    var optionText = document.createTextNode(value + ':00');
                    newOption.appendChild(optionText);
                    time.appendChild(newOption);
                    value++;
                }
            }
        }
    }, {
        key: 'formatDate',
        value: function formatDate() {
            var dateControl = document.querySelector('input[type="date"]');

            if (dateControl) {
                var date = new Date();
                var year = date.getFullYear();
                var day = date.getUTCDate();

                if (day < 10) {
                    day = '0' + day;
                }

                var month = date.getMonth() + 1;

                dateControl.setAttribute('min', year + '-' + month + '-' + day);
                dateControl.value = year + '-' + month + '-' + day;
            }
        }
    }]);

    return Form;
}();

exports.default = new Form();

/***/ })
/******/ ]);