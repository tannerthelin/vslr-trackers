function init() {
Tabletop.init( { key: 'https://docs.google.com/spreadsheets/d/1PslWZVD8Cv6AKKdqBH4udzZisU3fw0zu33U0-KtTKZM/edit?usp=sharing',
callback: function(data, tabletop) { 
console.log(data)
},
simpleSheet: true } )
}

function showInfo(data, tabletop) {
for (var i = 0; i < data.length; i++) {
	// Looping through each row of the spreadsheet		
		$("#table-body").append(
		'<tr class="row">' +
		'<td class="name-column">' + data[i].name + '</td>' +
		'<td class="current_points">' + data[i].one_wc + '</td>' +
		'<td class="current_points">' + data[i].three_wc + '</td>' +
		'<td class="current_points">' + data[i].six_wc + '</td>' +
		'<td class="orange">' + data[i].credits + '</td>' +
		'</tr>'
		); 
	}
}