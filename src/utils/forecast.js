const request = require('request');

const forecast = (latitud, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=1c4a11231aa6929591c456d5e048c33d&query=${latitud},${longitude}`;
    request({ url: url, json: true }, (error, response) => {
        const { temperature, feelslike } = response.body.current;
        if (error) {
            callback('Unable to connect to weather services!', undefined);
        } else if (response.body.current.length === 0) {
            callback('Unable to find weather, Try another search', undefined)
        } else {
            callback(undefined, {
                temperature: temperature,
                feelslike: feelslike,
            })
        }
    });
}

module.exports = forecast;