function init() {
Tabletop.init( { key: 'https://docs.google.com/spreadsheets/d/1WQ1z-mcCWS23kPefDMs0ijZram6Iyvk6l4BVmkztiA0/edit?usp=sharing',
callback: function(data, tabletop) { 
console.log(data)
},
simpleSheet: true } )
}

function showInfo(data, tabletop) {
console.log(data);

for (var i = 0; i < data.length; i++) {

	$("#table-body").append(
	'<tr class="row">' +
	'<td class="name-column small-text">' + data[i].name + '</td>' +
	'<td class="current_points small-text blue">' + data[i].wc + '</td>' +
	'<td class="pace_prize small-text">' + data[i].pack + '</td>' +
	'</tr>'
); 

}

}