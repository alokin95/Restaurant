class Reservation{
	
	constructor(){
		
		this.first=document.querySelector('#first');
		this.last=document.querySelector('#last');
		this.people=document.querySelector('#people');
		this.email=document.querySelector('#email');
		this.date=document.querySelector('#date');
		this.time=document.querySelector('#time');
		this.phone=document.querySelector('#tel');
		this.button=document.querySelector('#submit');
		
		this._addListeners();
	}
	
	createReservation(){
		
		let divs=document.querySelectorAll('.order');
		
		if (divs.length>0){
			
			
			
		}
		else {
			
			let newDiv=document.createElement('div');
			newDiv.setAttribute('class', 'order');
			
			let newSubmit=document.createElement('button');
			let newDelete=document.createElement('button');
			
			let cancel=document.createTextNode('Cancel');
			let proceed=document.createTextNode('Proceed');
			
			newDelete.setAttribute('class','for-delete');
			
			newDelete.appendChild(cancel);
			newSubmit.appendChild(proceed);
			
			let text=`<h3>${this.first.value} ${this.last.value}</h3>
				<h4>${this.phone.value}</h4>
				<h4>${this.email.value}</h4>
				<p>${this.date.value}</p>
				<p>${this.people.value} people</p>
				<p>${this.time.value}</p>`;

			
			newDiv.innerHTML=text;
			newDiv.appendChild(newDelete);
			newDiv.appendChild(newSubmit);
			
			document.getElementById('orders').appendChild(newDiv);
			
			let forDelete=document.querySelectorAll('.for-delete');
			forDelete.forEach(element=>{
				element.addEventListener('click',this.removeReservation);
			});
		}
		
	}
	
	removeReservation(){
		
		this.parentNode.remove();
	}
	
	_addListeners(){
		
		this.button.addEventListener('click',this.createReservation.bind(this));
	}
	
}

export default new Reservation();