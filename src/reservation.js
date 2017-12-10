class Reservation {

    constructor() {

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

    validation() {

        let errors = [];

        const regPhone = "/^06[01234569]\/[0-9]{6,7}$/";

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

        let time = "";
        if (this.time.value != '0') {
            time = this.time.value;
            this.time.classList.remove('error');
            this.time.classList.add('data');
        } else {

            errors.push(this.time.id);
            this.time.classList.add('error');
            this.time.classList.remove('data');

        }

        let people = "";
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

    createReservation() {

        let divs = document.querySelectorAll('.order');

        if (divs.length > 0) {

            alert("Please confirm your reservation below or cancel it so you can make another one");

        } else {

            let newDiv = document.createElement('div');
            newDiv.setAttribute('class', 'order');

            let newSubmit = document.createElement('button');
            let newDelete = document.createElement('button');

            let cancel = document.createTextNode('Cancel');
            let proceed = document.createTextNode('Proceed');

            newDelete.setAttribute('class', 'for-delete');

            newDelete.appendChild(cancel);
            newSubmit.appendChild(proceed);

            let text = `<h3>${this.first.value} ${this.last.value}</h3>
					<p>${this.date.value}</p>
					<p>${this.people.value} people</p>
					<p>${this.time.value}</p>`;


            newDiv.innerHTML = text;
            newDiv.appendChild(newDelete);
            newDiv.appendChild(newSubmit);

            document.getElementById('orders').appendChild(newDiv);

            let forDelete = document.querySelectorAll('.for-delete');
            forDelete.forEach(element => {
                element.addEventListener('click', this.removeReservation);
            });
        }


    }

    removeReservation() {

        this.parentNode.remove();
    }


    _addListeners() {

        if (this.buttons) {

            //this.buttons.addEventListener('click',this.createReservation.bind(this));
            this.buttons.addEventListener('click', this.validation.bind(this));
        }

    }

}

export default new Reservation();