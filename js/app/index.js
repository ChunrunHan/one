define(['mustache', 'jquery','q','my'], function(m, $, Q,my) {
	//	alert('hello');
	$('p').click(function() {
		$(this).hide()

	});
	console.log('2+4='+my.add(2,4));
	console.log('4-2='+my.sub(4,2));
	
	var doit = function(callback)
	{
	    var a = 1,
	        b = 2,
	        c = 3;
	    var t = callback(a,b,c);
	    return t + 10;
	};
	var d = doit(function(x,y,z){
	    return (x+y+z);
	});
	console.log(d);
//	ajax 请求完数据后处理数据
//	$.get(url,function(data,status){
//		模拟数据data
		var data = {
             "stooges" : [ {
                  "name" : "Moe"
              }, {
                  "name" : "Larry"
              }, {
                  "name" : "Curly"
              } ]
          };
//		Mustache 方法
		var template = [
			'{{#stooges}}',
	        '<p>{{name}}</p>',
			'{{/stooges}}',
	    ].join('');
	    
	    var demo = m.render(template,data);
		console.log(demo);
	
		$('.box').html(demo);
//		最笨的方法
		var arry = [];
		var datalist = data.stooges;
		for(index in datalist){
			console.log(datalist[index].name)
			var html = '<p>' + datalist[index].name + '</p>';
			arry.push(html);
		}
		arry = arry.join('');
		$('.box1').html(arry);
//	});	

});