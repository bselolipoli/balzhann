
const firstName = document.getElementById("gname");  
const startingBid = document.getElementById("sbid"); 
const education = document.getElementById("education"); 
const networth = document.getElementById("networth"); 
const age = document.getElementsByName("groom_age");
const gossips = document.getElementsByClassName("gossips");
const skills = document.getElementsByClassName("skills"); 
const love_letter = document.getElementById("loveletter");
const button = document.getElementById("submit");

function calculate() {
	let price = Number(document.getElementById("startingbid").value);
	let gname = document.getElementById("gname").value; 
	if (gname != "" && startingbid != "") {
		let loveletter = document.getElementById("loveletter").value; 
		price = price * Number(education.value); 
		price = price * Number(networth.value);
		price = getCheckboxValuesForLoop(skills, price);
		price = getRadioValue(age, price);
		price = getCheckboxValuesForLoop2(gossips, price);
	
	
		let person = {
			groom_name: gname,
			bride_price: price,
			love_letter: love_letter,  
		}
		document.getElementById("result").innerHTML = `The price for your bride ${person.groom_name} is ${bride_price.price} . Your love letter is ${love_letter.love_letter}`; 
	}
	else {
		alert("You must input the groom name and the starting bid")
	}
	return price;
	}



const getRadioValue = (node_list, price) => {  
	node_list.forEach(item => {
		if (item.checked) {
			price = price * Number(item.value)
		}
	})
	return price;
}

const getCheckboxValuesForLoop = (html_collection, price) => {
	for (let i=0; i < html_collection.length; i++) {  
		if (html_collection[i].checked && Number.isInteger(Number(html_collection[i].value))) {
			price = price + Number(html_collection[i].value)
		}
		else if (html_collection[i].checked && !Number.isInteger(html_collection[i].value)) {
			price = price * Number(html_collection[i].value)
		}
	}
	return price;
}
 
const getCheckboxValuesReduce= (html_collection, price) => {
    let list = Array.from(html_collection)
    let result = list.reduce((price,item) => {
        if (item.checked) {
            return price + Number (item.value)
        }
    }, price)
    return result;
}

if (networth != "blank" && education != "blank" && gname != "") {
	document.getElementById("submit") addEventListener('click',() =>  {
		
	})