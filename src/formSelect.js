class Form {

    constructor() {
        this.populateTime();
        this.populatePeople();
        this.formatDate();
    }

    populatePeople() {
        let value = 2;
        let people = document.getElementById('people');
        if (people) {

            for (let i = 0; i < 22; i++) {
                let newOption = document.createElement('option');
                newOption.setAttribute('value', value);
                let optionText = document.createTextNode(`${value} people`);
                newOption.appendChild(optionText);
                people.appendChild(newOption);
                value++;
            }
        }

    }

    populateTime() {
        let time = document.getElementById('time');
        let value = 15;
        if (time) {
            for (let i = 0; i < 9; i++) {

                let newOption = document.createElement('option');
                newOption.setAttribute('value', `${value}:00`);
                let optionText = document.createTextNode(`${value}:00`);
                newOption.appendChild(optionText);
                time.appendChild(newOption);
                value++;
            }
        }

    }

    formatDate() {
        let dateControl = document.querySelector('input[type="date"]');

        if (dateControl) {
            let date = new Date();
            let year = date.getFullYear();
            let day = date.getUTCDate();

            if (day < 10) {
                day = `0${day}`;
            }

            let month = date.getMonth() + 1;

            dateControl.setAttribute('min', `${year}-${month}-${day}`);
            dateControl.value = `${year}-${month}-${day}`;
        }
    }
}

export default new Form();