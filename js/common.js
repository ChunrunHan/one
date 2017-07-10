var require = {
	baseUrl: 'js/',
	paths: {
		mustache: 'lib/mustache.min',
		jquery: 'lib/jquery.min',
		md5: 'lib/md5.min',
		q: 'lib/q.min',
		my: 'lib/my'
	},
	shim: {　　　　
		mustache: {
			exports: 'mustache'
		},
		jquery: {
			exports: 'jquery'
		},
		md5: {
			exports: 'md5'
		},
		q: {
			exports: 'Q'
		},
		my: {
			exports: 'my'
		}
		
	}
};


