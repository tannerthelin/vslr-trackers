function init() {
Tabletop.init( { key: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vScrU9ETzmGOVP7V9DRfmg4CByTfsd9XEOm1lphS0zvF52ufz3S59oYOlsqcCXERGcpl7_svx1SI-qy/pubhtml',
callback: function(data, tabletop) { 
console.log(data)
},
simpleSheet: true } )
}

function showInfo(data, tabletop) {
console.log(data);


for (var i = 0; i < data.length; i++) {
	
	// Change this variable to switch the office!
	var currentOffice = "IL-01 Chicago Solar";

	document.getElementById("page-title").innerHTML = currentOffice;


	if (data[i].office == currentOffice) {
	$("#table-body").append(
		'<tr>' +
		'<td class="name-column">' + data[i].name + '</td>' +
		//'<td class="office-column">' + data[i].office + '</td>' +
		'<td class="WC-column needed">' + data[i].wc_needed + '</td>' +
		'<td class="WC-column last">' + data[i].current_wc + '</td>' +
		'</tr>'
		);
	}
	
}

}