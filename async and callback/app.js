/* using callback */
// function getData(dataId, getNextData) {
//     setTimeout(() => {
//         // console.log("data", dataId);
//         if (getNextData){
//             getNextData();
//         }
//     }, 2000);
// }

// getData(1, () => {
//     getData(2, () => {
//         getData(3)
//     })
// });



/* using promise - promise is an object in js, which has 3 states pending, resolved, rejected */
// let promise = new Promise((resolve, reject) => {
//     console.log("I am a promise");
//     resolve(233);
// })

function getData(dataId, getNextData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");
            if (getNextData){
                getNextData();
            }
        }, 5000);
    });
}


