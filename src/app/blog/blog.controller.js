(function() {
    'use strict';

    angular
        .module('kfgono')
        .controller('BlogCtrl', BlogCtrl);

    /* @ngInject */
    function BlogCtrl($stateParams, $mdSidenav, BlogFactory) {
        /*jshint validthis: true */
        var blog = this;

        blog.post = $stateParams.post;

        blog.toggleMenu = function() {
        	$mdSidenav('left').toggle();
        }
        
        BlogFactory.getEntries()
        	.then(function(data) {
        		blog.entries = data;
        	});
    }
})();