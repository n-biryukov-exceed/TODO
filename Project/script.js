$(document).ready(function () {
    
	$('.add-items').submit(function(event) 
	{
		event.preventDefault();

		let item = $('#todo-list-item').val();

		if(item) 
		{
			$('#list-items').append("<li><input class='checkbox' type='checkbox'/>" + item + "<a class='remove'>x</a><br></li>");
			let num = Math.floor(Math.random()*6) + 1;
			console.log(num);
			let liColor = 0;
			if (num==1) {
				liColor = "#ee6a68";
			} else if (num==2) {
				liColor = "#f077a2";
			} else if (num==3) {
				liColor = "#9282bb";
			} else if (num==4) {
				liColor = "#00BFFF";
			} else if (num==5) {
				liColor = "#00CCCC";
			} else if (num==6) {
				liColor = "#FDDB6D";
			}
			$('li:last-child').css('background-color', liColor);
			
			$('#todo-list-item').val("");
		}
		
	});

	$(document).on('change', '.checkbox', function() 
	{
		//start event click six buttons
		$('#color1').click(function(){
			$('li.completed').attr('style', 'background-color: #ee6a68;');
		});
		$('#color2').click(function(){
			$('li.completed').attr('style', 'background-color: #f077a2;');
		});
		$('#color3').click(function(){
			$('li.completed').attr('style', 'background-color: #9282bb;');
		});
		$('#color4').click(function(){
			$('li.completed').attr('style', 'background-color: #00BFFF;');
		});
		$('#color5').click(function(){
			$('li.completed').attr('style', 'background-color: #00CCCC;');
		});
		$('#color6').click(function(){
			$('li.completed').attr('style', 'background-color: #FDDB6D;');
		});
		//end event click six buttons
		if($(this).attr('checked')) 
		{
			$(this).removeAttr('checked');
		} 
		$(this).parent().toggleClass('completed');
	});

});
