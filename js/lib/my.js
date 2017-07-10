define(['mustache', 'jquery', 'q'], function(m, $, Q) {　　　　
	var add = function(x, y) {　　　　　　
		return x + y;　　　　
	};　
	var sub = function(x, y){
		return x - y;
	}　　　
	return {　　　　　　
		add: add,
		sub: sub　　　　
	};
});