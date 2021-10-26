// Variables information climate
const countryClimate = document.querySelector(".country");
const regionClimate = document.querySelector(".region");
const nameCountryClimate = document.querySelector(".name");
const iconImage = document.querySelector(".icon-climate");
const loader = document.querySelector(".loader");

const inputCountry = document.querySelector("#country");
const btnSearchCountry = document.querySelector("#search-country").addEventListener("click", getInformationCountry);

// Eventos
document.addEventListener("DOMContentLoaded", () => {
	inputCountry.addEventListener("input", readText);
});

// Array list countries
let countries = [
	"Afghanistan",
	"Albania",
	"Algeria",
	"Andorra",
	"Angola",
	"Antarctica",
	"Antigua and Barbuda",
	"Argentina",
	"Armenia",
	"Australia",
	"Austria",
	"Azerbaijan",
	"Bahamas",
	"Bahrain",
	"Bangladesh",
	"Barbados",
	"Belarus",
	"Belgium",
	"Belize",
	"Benin",
	"Bermuda",
	"Bhutan",
	"Bolivia",
	"Bosnia and Herzegovina",
	"Botswana",
	"Brazil",
	"Brunei",
	"Bulgaria",
	"Burkina Faso",
	"Burma",
	"Burundi",
	"Cambodia",
	"Cameroon",
	"Canada",
	"Cape Verde",
	"Central African Republic",
	"Chad",
	"Chile",
	"China",
	"Colombia",
	"Comoros",
	"Congo, Democratic Republic",
	"Congo, Republic of the",
	"Costa Rica",
	"Cote d'Ivoire",
	"Croatia",
	"Cuba",
	"Cyprus",
	"Czech Republic",
	"Denmark",
	"Djibouti",
	"Dominica",
	"Dominican Republic",
	"East Timor",
	"Ecuador",
	"Egypt",
	"El Salvador",
	"Equatorial Guinea",
	"Eritrea",
	"Estonia",
	"Ethiopia",
	"Fiji",
	"Finland",
	"France",
	"Gabon",
	"Gambia",
	"Georgia",
	"Germany",
	"Ghana",
	"Greece",
	"Greenland",
	"Grenada",
	"Guatemala",
	"Guinea",
	"Guinea-Bissau",
	"Guyana",
	"Haiti",
	"Honduras",
	"Hong Kong",
	"Hungary",
	"Iceland",
	"India",
	"Indonesia",
	"Iran",
	"Iraq",
	"Ireland",
	"Israel",
	"Italy",
	"Jamaica",
	"Japan",
	"Jordan",
	"Kazakhstan",
	"Kenya",
	"Kiribati",
	"Korea, North",
	"Korea, South",
	"Kuwait",
	"Kyrgyzstan",
	"Laos",
	"Latvia",
	"Lebanon",
	"Lesotho",
	"Liberia",
	"Libya",
	"Liechtenstein",
	"Lithuania",
	"Luxembourg",
	"Macedonia",
	"Madagascar",
	"Malawi",
	"Malaysia",
	"Maldives",
	"Mali",
	"Malta",
	"Marshall Islands",
	"Mauritania",
	"Mauritius",
	"Mexico",
	"Micronesia",
	"Moldova",
	"Mongolia",
	"Morocco",
	"Monaco",
	"Mozambique",
	"Namibia",
	"Nauru",
	"Nepal",
	"Netherlands",
	"New Zealand",
	"Nicaragua",
	"Niger",
	"Nigeria",
	"Norway",
	"Oman",
	"Pakistan",
	"Panama",
	"Papua New Guinea",
	"Paraguay",
	"Peru",
	"Philippines",
	"Poland",
	"Portugal",
	"Qatar",
	"Romania",
	"Russia",
	"Rwanda",
	"Samoa",
	"San Marino",
	" Sao Tome",
	"Saudi Arabia",
	"Senegal",
	"Serbia and Montenegro",
	"Seychelles",
	"Sierra Leone",
	"Singapore",
	"Slovakia",
	"Slovenia",
	"Solomon Islands",
	"Somalia",
	"South Africa",
	"Spain",
	"Sri Lanka",
	"Sudan",
	"Suriname",
	"Swaziland",
	"Sweden",
	"Switzerland",
	"Syria",
	"Taiwan",
	"Tajikistan",
	"Tanzania",
	"Thailand",
	"Togo",
	"Tonga",
	"Trinidad and Tobago",
	"Tunisia",
	"Turkey",
	"Turkmenistan",
	"Uganda",
	"Ukraine",
	"United Arab Emirates",
	"United Kingdom",
	"United States",
	"Uruguay",
	"Uzbekistan",
	"Vanuatu",
	"Venezuela",
	"Vietnam",
	"Yemen",
	"Zambia",
	"Zimbabwe",
];

// Functions

function readText(e) {
	newInformationCountry[e.target.id] = e.target.value;
}

let newInformationCountry = {
	country: "",
	KEY: "29b74c77ae35422f89c21401211410",
};

// Mejorar algunas cosas y agregar algunas mas funcionalidad
async function getInformationCountry() {
	let KEY = "29b74c77ae35422f89c21401211410";

	loader.style.display = "inline-block";

	if (countries.includes(newInformationCountry.country)) {
		const response = await axios({
			method: "get",
			baseURL: "http://api.weatherapi.com/v1",
			url: `/current.json?key=${KEY}&q=${newInformationCountry.country}&alerts=yes`,
		});
		console.log(response);
		printInformation(response); // @Sending all HTML
	} else {
		message("Falta Rellenar o ingresaste país equivocado");
	}

	loader.style.display = "none";
}

function printInformation(res) {
	// Creando la imagen
	removeChild(iconImage);

	const {
		current: {
			condition: { icon, text },
		},
		location: { country, region, name },
	} = res.data;

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
	}, 2000);
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
