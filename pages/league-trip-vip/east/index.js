function init() {
Tabletop.init( { key: 'https://docs.google.com/spreadsheets/d/1IBhDaQP_P1D16K-wPaFOGNiRGHrFtTk5MImg9fqWIAg/edit?usp=sharing',
callback: function(data, tabletop) { 
console.log(data)
},
simpleSheet: true } )
}

function showInfo(data, tabletop) {

	var atomic = ["CA-04", "CA-09", "CA-23", "CA-Solterra Dealer"];
	var core = ["CA-18", "CA-07", "CA-01", "CA-05", "CA-30"];
	var flow = ["CA-14", "CA-02", "CA-13", "CA-15"];
	var grit = ["IL-05", "NJ-02", "NJ-01", "IL-04", "PA-02", "NY-05", "NY-03", "NY-02", "IL-02", "NJ-03", "NJ-08", "NJ-11", "NJ-12", "PA-02", "IL-Solterra Dealer"];
	var legion = ["VA-01", "FL-01", "MD-02", "MD-01", "MD-04"];1
	var new_england = ["MA-01", "CT-01", "MA-05", "MA-02", "MA-03", "MA-04", "CT-03"];
	var originals = ["CA-21", "CA-10", "CA-12", "CA-06", "CA-36"];
	var republic = ["CA-03", "CA-20", "CA-16", "CA-11"];
	var topo = ["Hawaii", "CO-01", "NV-03", "AZ-02", "UT-01", "NM-01", "HI-01", "HI-02", "HI-03"];

	var east_coast = [...new_england, ...grit, ...legion];
	var west_coast = [...atomic, ...core, ...flow, ...originals, ...republic, ...topo];

for (var i = 0; i < data.length; i++) {
	// Looping through each row of the spreadsheet
	if (east_coast.includes(data[i].office)) {		
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
}