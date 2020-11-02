function init() {
Tabletop.init( { key: 'https://docs.google.com/spreadsheets/d/11TwG8KEMts9HppTZYVJXT9VfdgTSe4l98AjyVW2fqss/edit?usp=sharing',
callback: function(data, tabletop) { 
console.log(data)
},
simpleSheet: true } )
}

function showInfo(data, tabletop) {
for (var i = 0; i < data.length; i++) {
	// Looping through each row of the spreadsheet
	if (data[i].highest_LL == "FRANCHISE") {		
			$("#table-body").append(
			'<tr class="row">' +
			'<td class="name-column">' + data[i].name + '</td>' +
			'<td class="office-column">' + data[i].office + '</td>' +
			'<td class="current_points">' + data[i].league_score + '</td>' +
			'<td class="orange">' + data[i].coat + '</td>' +
			'</tr>'
		); 
		}
	}
}