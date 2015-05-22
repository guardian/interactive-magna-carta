var magnaCarta;
var imagelist =[];
function fetchDocument (){
	$.getJSON(
		"http://interactive.guim.co.uk/spreadsheetdata/1-bDOsAsRGhhJr-XWitDdVQLygka-ckjodRqIEDAX4QU.json",
		useDocument
	);}

function useDocument (data) {
	magnaCarta = data.sheets.Sheet1;
	chainImages();}

function chainImages() {
	$.each(magnaCarta, function(){		
		imagelist += '<img src="img/' + this.image + '" title="' + this.english + '">';
		document.getElementById("playground").innerHTML = imagelist;		
	});}


fetchDocument();