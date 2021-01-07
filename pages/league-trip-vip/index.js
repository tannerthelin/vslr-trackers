function init() {
Tabletop.init( { key: 'https://docs.google.com/spreadsheets/d/1IBhDaQP_P1D16K-wPaFOGNiRGHrFtTk5MImg9fqWIAg/edit?usp=sharing',
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
		'<td class="current_points">' + data[i].office + '</td>' +
		'<td class="current_points">' + data[i].wc + '</td>' +
		'<td class="last">' + data[i].status + '</td>' +
		'</tr>'
		); 
	}
}