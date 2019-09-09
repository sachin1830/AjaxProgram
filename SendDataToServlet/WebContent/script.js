$(function() {
$('#btn1').click(function() {
	var select= $('#selectname').val(); 
	$.ajax({
		type: 'POST' ,
		url: 'Controller',
		data:{select:select},
		success:function(result){
			var data=result;
		}
	});
});
});