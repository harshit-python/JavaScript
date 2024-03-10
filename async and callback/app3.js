/* async and await 
async function always returns a promise
await pauses the execution of its surroundings async function until the promise is settled
await is always used inside async function
*/

function api() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("weather data");
            resolve(200);
        }, 2000);
    });
}

async function getWeatherData() {
    await api();        // 1st call
    await api();        // 2nd call
}


function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");
        }, 2000);
    });
}

// async await
async function getAllData() {
    await getData(45);
    await getData(55);
    await getData(65);
}


/* IIFE: Immediately Invoked Function Expression 
IIFE is a function that is called immediately as soon as it is defined
*/
(async function () {
    await getData(45);
    await getData(55);
    await getData(65);
})();