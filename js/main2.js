$('.factbox').click(function(e) {
	e.preventDefault;
	console.log('trigger')
	var lightbox = 
	'<div id="lightbox">' +	'</div>';
		
	$(this).append(lightbox);

	console.log('triggered');
	$('#lightbox').load('data/Clause_04 .latin_text');});

