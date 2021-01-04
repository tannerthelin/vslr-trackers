function init() {
Tabletop.init( { key: 'https://docs.google.com/spreadsheets/d/1huopDESH-JrUJqVN1OiIOuULEYRPx-l4Gm0wf2sr7uk/edit?usp=sharing',
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
		'<td>' + data[i].name + '</td>' +
		'</tr>'
		); 
	}
}