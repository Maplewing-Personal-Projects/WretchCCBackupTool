var callback = function(){
	var xdrequest = "http://knightzone.org/ba-simple-proxy.php?callback=?&url=";
	$.getJSON( xdrequest + "http://www.wretch.cc/blog/" + $('#username').val() + "%26list%3D1", function(data){
		data = data.contents;
		$('#result').html("<ul><h2>文章列表：</h2></ul>");
		var $content = $(data).find(".blogbody table tr");
		$content.each(function(){
			var tdContent = $(this).find("td").html();
			$('#result ul').append("<li>" + tdContent + "</li>");
		});
	});
	return false;
};

$(document).ready(function(){
	
	$('#inputForm').submit(callback);
	$('#getAllArticle').click(callback);
});