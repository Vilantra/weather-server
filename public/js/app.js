console.log('Client side javascript file is loaded!');

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');

/*
Goal: Render content to paragraphs
1. Select the second message p  from Javascript
2. Just before fetch, render loading message and empty p 
3. If error, render error
4. If no error, render Location and forecast
5. Test your work, Search for errores and for valid locations.
*/

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const location = search.value
        // console.log(location);

    messageOne.textContent = 'Loading...';
    messageTwo.textContent = ''

    fetch(`http://localhost:3000/weather?address=${location}`).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error;
                // console.log(data.error);
            } else {
                messageOne.textContent = data.location;
                messageTwo.textContent = ` The temperature is ${data.forecast.temperature} and Feelslike ${data.forecast.feelslike}`
                    // console.log(data.location);
                    // console.log(data.forecast);
            }
        })
    })

})