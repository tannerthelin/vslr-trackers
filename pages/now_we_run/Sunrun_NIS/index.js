function init() {
Tabletop.init( { key: 'https://docs.google.com/spreadsheets/d/19tHhdKGwKwI8Y_2GZbEjh5NXpMQPQ-49MipmUEzHXTY/edit?usp=sharing',
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
		'<td class="current_points small-text blue">' + data[i].opptys + '</td>' +
		'<td class="current_points small-text blue">' + data[i].sits + '</td>' +
		'<td class="pace_prize small-text">' + data[i].pack + '</td>' +
		'</tr>'
	); 

}

}