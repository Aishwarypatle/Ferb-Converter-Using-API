let inputTxt = document.querySelector("#txt-input");
let translateBtn = document.querySelector("#btn-translate");
let Output = document.querySelector("#output");

let serverURL = 'https://api.funtranslations.com/translate/ferb-latin.json';

let getTranslation = (text) => {
  return serverURL + '?' + 'text=' + text;
}


let errorHandling = (error) => {
  console.log("error happened", error);
  alert("Server Error,Please try after some time");
}

let clickEvent = () => {
  fetch(getTranslation(inputTxt.value))
    .then(response => response.json())
    .then(json => Output.innerText = json.contents.translated)
    .catch(errorHandling);

}
translateBtn.addEventListener("click", clickEvent);