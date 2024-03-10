// promise and promise chaining

function asyncFunc1(data1) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("some data1", data1);
            resolve("success");
        }, 2000);
    });
}

function asyncFunc2(data2) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("some data2", data2);
            resolve("success");
        }, 2000);
    });
}

function asyncFunc3(data3) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("some data3", data3);
            resolve("success");
        }, 2000);
    });
}

// promise chaining
asyncFunc1(1111)
    .then((res1) => {
        return asyncFunc2(2222);
    })
    .then((res2) => {
        return asyncFunc3(3333);
    })
    .then((finalResult) => {
        console.log(finalResult);
    })
    .catch((error) => {
        console.error(error);
    });

