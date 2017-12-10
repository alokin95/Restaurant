export default function request(url, f, typeOfFood) {

    const xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (xhttp.readyState === XMLHttpRequest.DONE && xhttp.status === 200) {
            f(this, typeOfFood);
        }
    }

    xhttp.open("GET", url);
    xhttp.responseType = 'text';
    xhttp.send();

}

