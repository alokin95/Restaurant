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

var _formSelect = __webpack_require__(3);

var _formSelect2 = _interopRequireDefault(_formSelect);

var _request = __webpack_require__(7);

var _request2 = _interopRequireDefault(_request);

var _getMenu = __webpack_require__(8);

var _getMenu2 = _interopRequireDefault(_getMenu);

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
function localStorageClicked(value) {

  if (value == 'dinner-card') {
    localStorage.setItem("type", 'DINNER');
  } else if (value == 'lunch-card') {
    localStorage.setItem("type", "LUNCH");
  } else if (value == 'catering-card') {
    localStorage.setItem("type", "CATERING");
  }
}
/*KRAJ*/

window.addEventListener('load', slider);
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

// SLAJDER NA INDEX STRANI: POCETAK
var slideCount = 0;

function slider() {

  var slides = document.getElementsByClassName("slider-img");

  for (var i = 0; i < slides.length; i++) {
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

document.querySelector("#btnDinner").addEventListener('click', function () {
  localStorage.setItem('type', 'DINNER');
  (0, _request2.default)('food.json', _getMenu2.default, 'DINNER');
});
document.querySelector('#btnLunch').addEventListener('click', function () {
  localStorage.setItem('type', 'LUNCH');
  (0, _request2.default)('food.json', _getMenu2.default, 'LUNCH');
});
document.querySelector('#btnCatering').addEventListener('click', function () {
  localStorage.setItem('type', 'CATERING');
  (0, _request2.default)('food.json', _getMenu2.default, 'CATERING');
});

window.addEventListener('load', function () {
  (0, _request2.default)('food.json', _getMenu2.default, localStorage.getItem('type'));
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
                //this.phone=document.querySelector('#tel');
                //this.email=document.querySelector('#email');
                this.date = document.querySelector('#date');
                this.time = document.querySelector('#time');
                this.people = document.querySelector('#people');
                this.buttons = document.querySelector('#submit');

                this._addListeners();
        }

        _createClass(Reservation, [{
                key: 'validation',
                value: function validation() {

                        var errors = [];

                        var regPhone = "/^06[01234569]\/[0-9]{6,7}$/";

                        if (this.first.value < 3) {
                                errors.push(this.first.id);
                                this.first.classList.add('error');
                                this.first.classList.remove('data');
                        } else {
                                this.first.classList.remove('error');
                                this.first.classList.add('data');
                        }

                        if (this.last.value < 3) {
                                errors.push(this.last.id);
                                this.last.classList.add('error');
                                this.last.classList.remove('data');
                        } else {
                                this.last.classList.remove('error');
                                this.last.classList.add('data');
                        }

                        /*if (!this.phone.value.match(regPhone)){
                        errors.push(this.phone.id);
                        this.phone.style.borderColor='red';
                        }*/

                        var time = "";
                        if (this.time.value != '0') {
                                time = this.time.value;
                                this.time.classList.remove('error');
                                this.time.classList.add('data');
                        } else {

                                errors.push(this.time.id);
                                this.time.classList.add('error');
                                this.time.classList.remove('data');
                        }

                        var people = "";
                        if (this.people.value != '0') {

                                people = this.people.value;
                                this.people.classList.remove('error');
                                this.people.classList.add('data');
                        } else {

                                errors.push(this.people.id);
                                this.people.classList.add('error');
                                this.people.classList.remove('data');
                        }

                        console.log(errors);

                        if (errors.length == 0) {
                                this.createReservation();
                        }
                }
        }, {
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

                                var text = '<h3>' + this.first.value + ' ' + this.last.value + '</h3>\n\t\t\t\t\t<p>' + this.date.value + '</p>\n\t\t\t\t\t<p>' + this.people.value + ' people</p>\n\t\t\t\t\t<p>' + this.time.value + '</p>';

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

                                //this.buttons.addEventListener('click',this.createReservation.bind(this));
                                this.buttons.addEventListener('click', this.validation.bind(this));
                        }
                }
        }]);

        return Reservation;
}();

exports.default = new Reservation();

/***/ }),
/* 2 */,
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

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = request;
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

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getMenu;
function getMenu(xml, type) {
  var obj = JSON.parse(xml.responseText);
  var number = void 0;
  var text = "";

  (function () {
    var gold = document.getElementById("gold");
    while (gold.hasChildNodes()) {
      gold.removeChild(gold.firstChild);
    }
  })();

  (function () {
    var heading = document.createElement('h1');
    var headingText = document.createTextNode(type);
    heading.appendChild(headingText);
    var gold = document.createElement('img');
    gold.setAttribute('src', 'images/other/gold.png');
    document.getElementById('gold').appendChild(heading);
    document.getElementById('gold').appendChild(gold);
  })();

  if (type == "DINNER") {
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
    text += "<div class='recipe'><h4>" + name + "</h4><p>" + desc + "</p></div>";
    document.getElementById('recipes').innerHTML = text;
  }
}

/***/ })
/******/ ]);