function init() {
Tabletop.init( { key: 'https://docs.google.com/spreadsheets/d/1jDlsUV2mjoN85WLZhDFceB_eLFvtCA6BdA2oHI4zz1U/edit?usp=sharing',
callback: function(data, tabletop) { 
console.log(data)
},
simpleSheet: true } )
}

function showInfo(data, tabletop) {
for (var i = 0; i < data.length; i++) {
	// Looping through each row of the spreadsheet
	if (data[i].league_level === "FRANCHISE" && data[i].coast === "WEST") {		
		$("#table-body").append(
		'<tr class="row">' +
		'<td class="name-column">' + data[i].name + '</td>' +
		'<td class="last">' + data[i].score + '</td>' +
		'</tr>'
		); 
	}
} 
}