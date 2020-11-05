function init() {
Tabletop.init( { key: 'https://docs.google.com/spreadsheets/d/1U5DZdzXuDVt30VFTVTxoPakTK_bw-U0u5dvWbJsB2V0/edit?usp=sharing',
callback: function(data, tabletop) { 
console.log(data)
},
simpleSheet: true } )
}

function showInfo(data, tabletop) {
console.log(data);

for (var i = 0; i < data.length; i++) {
	
	// Change this variable to switch the office!
	// Offices in the GRIT REGION
	//var currentOffice = data[i]
		$("#table-body").append(
		'<tr class="row">' +
		'<td class="name-column small-text">' + data[i].name + '</td>' +
		'<td class="current_points small-text blue">' + data[i].orders + '</td>' +
		'<td class="current_points small-text blue">' + data[i].caps + '</td>' +
		'<td class="pace_prize small-text">' + data[i].pack + '</td>' +
		'</tr>'
	); 

}

}