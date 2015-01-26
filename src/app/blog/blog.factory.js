(function() {
    'use strict';

    angular
        .module('kfgono')
        .factory('BlogFactory', BlogFactory);

    /* @ngInject */
    function BlogFactory($http, $q) {
    	var factory = {};

    	factory.getEntries = getEntries;

    	function getEntries() {
    		return $q(function(resolve, reject) {
    			$http.get('http://www.kfgo.no/blog.php')
    				.then(function(response) {
    					var data = response.data;
    					data.splice(0,2);
    					angular.forEach(data, function(value, key) {
    						data[key] = data[key].slice(0, -5);
    					});
    					resolve(data);
    				});
    		});
    	}

    	return factory;
    }
})();