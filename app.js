let button = document.getElementById("button");
let checkbox = document.getElementById("checkbox");
let textFirst = document.getElementById("text-first");
let textSecond = document.getElementById("text-second");
let email = document.getElementById("email");
let addressTxt = document.getElementById("address-txt");
let mobileNum = document.getElementById("mobileNum");
let fatherName = document.getElementById("fatherName");
let motherName = document.getElementById("motherName");
let pinCodeNum = document.getElementById("pinCodeNum");
let countryName = document.getElementById("countryName");
let error = document.querySelector("error");

button.addEventListener("click", e => {
	if (
		textFirst.value !== "" &&
		textSecond.value !== "" &&
		email.value !== "" &&
		addressTxt.value !== "" &&
		mobileNum.value !== "" &&
		fatherName.value !== "" &&
		motherName.value !== "" &&
		pinCodeNum.value !== "" &&
		countryName.value !== "" &&
		checkbox.checked == 1
	) {
		window.open("https://www.google.com/");
	} else {
		alert("Please fill all the fields & click on submit");
	}
});

