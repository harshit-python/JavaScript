/* Fetch API
The Fetch API provides and interface for fetching (sending/receiving) resources.
It uses Request and Response objects.
The fetch() method is used to fetch a resource (data).
*/

const url = "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");

/* using async await */
const getFacts = async () => {
    let response = await fetch(url);
    let data = await response.json();
    factPara.innerText = data[0].text;
}
btn.addEventListener("click", getFacts);


/* using promise chaining */
function getCatFacts() {
    fetch(url)
    .then ((response) => {
        return response.json()
    }).then((data) => {
        console.log(data);
        factPara.innerText = data[1].text;
    });
}

btn.addEventListener("click", getCatFacts);