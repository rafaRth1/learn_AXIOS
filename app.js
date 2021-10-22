// Variables information climate
const countryClimate = document.querySelector(".country");
const regionClimate = document.querySelector(".region");
const nameCountryClimate = document.querySelector(".name");
const iconImage = document.querySelector(".icon-climate");

const inputCountry = document.querySelector("#country");
const btnSearchCountry = document.querySelector("#search-country").addEventListener("click", getInformationCountry);

// Eventos
document.addEventListener("DOMContentLoaded", () => {
	inputCountry.addEventListener("input", readText);
});

let newInformationCountry = {
	country: "",
	KEY: "29b74c77ae35422f89c21401211410",
};

function readText(e) {
	newInformationCountry[e.target.id] = e.target.value;
}

// Petition with AXIOS the API
function petitionAPI() {
	let KEY = "29b74c77ae35422f89c21401211410";

	axios({
		method: "get",
		baseURL: "http://api.weatherapi.com/v1",
		url: `/current.json?key=${KEY}&q=${newInformationCountry.country}`,
	}).then((res) => {
		puttingInformactionAPI(res);
	});
}

function getInformationCountry() {
	if (inputCountry.value) {
		petitionAPI();
	} else {
		message("Falta Rellenar");
	}
}

function puttingInformactionAPI(res) {
	// Creando la imagen
	removeChild(iconImage);

	const {
		current: {
			condition: { icon, text },
		},
		location: { country, region, name },
	} = res.data;

	console.log(text);

	const imageClimate = document.createElement("img");
	imageClimate.src = icon;
	imageClimate.alt = "Image Climate";

	// the countries informations
	countryClimate.textContent = country;
	regionClimate.textContent = region;
	nameCountryClimate.textContent = name;

	// Name Climate

	const textNameClimate = document.querySelector(".name-climate span");
	textNameClimate.textContent = text;

	//  DOM
	iconImage.appendChild(imageClimate);
}

function message(typeMessage) {
	// Creando el mensaje
	const contentError = document.querySelector(".content-error");

	// removing nodes
	removeChild(contentError);

	const message = document.createElement("p");
	message.textContent = typeMessage;
	message.classList.add("errorMessage");

	contentError.appendChild(message);

	setTimeout(() => {
		message.remove();
	}, 1000);
}

function removeChild(elementParent) {
	while (elementParent.hasChildNodes()) {
		clear(elementParent.firstChild);
	}

	function clear(elementParent) {
		while (elementParent.hasChildNodes()) {
			clear(elementParent.firstChild);
		}
		elementParent.parentNode.removeChild(elementParent);
	}
}

/* function getInformationCountry() {
	removeChild(iconImage);

	const inputCountry = document.querySelector("#country");

	informationCountry = {
		country: inputCountry,
	};

	// Petition with AXIOS the API
	if (inputCountry) {
		let KEY = "29b74c77ae35422f89c21401211410";

		axios({
			method: "get",
			baseURL: "http://api.weatherapi.com/v1",
			url: `/current.json?key=${KEY}&q=${informationCountry.country}`,
		}).then((res) => {
			// Creando la imagen
			const imageClimate = document.createElement("img");
			imageClimate.src = res.data.current.condition.icon;
			imageClimate.alt = "Image Climate";

			// the countries informations
			country.textContent = res.data.location.country;
			region.textContent = res.data.location.region;
			nameCountryClimate.textContent = res.data.location.name;

			//  DOM
			iconImage.appendChild(imageClimate);
		});
	} else {
		console.log("Rellenar Campo");

		errorMessage();
	}
}

function errorMessage() {
	const inputCountry = document.querySelector("#country").addEventListener("input", () => {
		console.log(e.target.value);
	});
	const contentError = document.querySelector(".content-error");

	// Creando el mensaje
	const messagError = document.createElement("p");
	const message = document.createTextNode("Rellanar campo obligatorio");

	messagError.appendChild(message);
	contentError.appendChild(messagError);

	// Insertanto estilos para el mensaje de error

	messagError.classList.add("errorMessage");
}

// IMPORTANTE ENTENDER ESTO FALTA ENTEDERLO

function removeChild(elementParent) {
	while (elementParent.hasChildNodes()) {
		clear(elementParent.firstChild);
	}

	function clear(elementParent) {
		while (elementParent.hasChildNodes()) {
			clear(elementParent.firstChild);
		}
		elementParent.parentNode.removeChild(elementParent);
	}
}

const inputCountry2 = document.querySelector("#country2");
inputCountry2.addEventListener("input", function (e) {
	console.log(e.target.value);
});

console.log(inputCountry2);
 */
