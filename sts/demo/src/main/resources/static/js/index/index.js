var proposals = ['百度1', '百度2', '百度3', '百度4', '百度5', '百度6', '百度7','呵呵呵呵呵呵呵','百度','新浪','a1','a2','a3','a4','b1','b2','b3','b4'];

$(document).ready(function(){
	$('#search-form').autocomplete({
		hints: proposals,
		width: 300,
		height: 30,
		onSubmit: function(text){
			$('#message').html('Selected: <b>' + text + '</b>');			
		}
	});
});