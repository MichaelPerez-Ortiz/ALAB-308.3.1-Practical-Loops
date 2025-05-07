let csv = 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor\'s Assistant,26'

let cell = ''
let table = []
let row = []

for (let i = 0; i < csv.length; i++) {
	let char = csv[i] 
	// console.log(char)

	if (char !== ',' && char !== '\n') {
		cell = cell + char
	} 

	if (char === ',') {
		row.push(cell)
		cell = ''
	} 

	if (char === '\n' || i === csv.length - 1) {
		row.push(cell)
		cell = ''
		table.push(row)
		row = []
	}
}

console.log(table)


//part3

const tableObj = {};

let newNames = []

for (let i = 1; i < table.length; i++) {
    // console.log(table[i]);
    let obj = {
                id:table[i][0],
                names:table[i][1],
				occupation:table[i][2],
				age:table[i][3]\
	}
		newNames.push(obj)
}
	console.log(newNames)

//part4