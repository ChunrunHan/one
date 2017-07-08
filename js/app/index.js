define(['mustache', 'jquery'], function(m, $) {
	//	alert('hello');
	$('p').click(function() {
		$(this).hide()

	});

//	var data = {
//		"status": 1,
//		"msg": "获取成功",
//		"data": {
//			"index5-1": {
//				"data": {
//					"id": 3,
//					"type": 1,
//					"title": "5-1",
//					"url": "http://laravelacademy.org/post/6742.html",
//					"content": "",
//					"img": null,
//					"created_at": "2017-07-07 14:44:33",
//					"updated_at": "2017-07-07 14:44:33",
//					"version": "2017154"
//				},
//				"display": 1
//			},
//			"index5-2": {
//				"data": "",
//				"display": 0
//			},
//			"index5-3": {
//				"data": "",
//				"display": 0
//			},
//			"index5-4": {
//				"data": "",
//				"display": 0
//			}
//		}
//	}
	 var data = {
              "stooges" : [ {
                  "name" : "Moe"
              }, {
                  "name" : "Larry"
              }, {
                  "name" : "Curly"
              } ]
          };
	
	var template = [
		'{{#stooges}}',
        '<p>{{name}}</p>',
		'{{/stooges}}',
    ].join('');
	
	
	var demo = m.render(template,data);
	console.log(demo);
	
	$('.box').html(demo);
	

});