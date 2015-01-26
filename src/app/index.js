'use strict';

angular.module('kfgono', ['ui.router', 'ngMaterial'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        resolve:{
        	redirect: function($window) {
        		console.log('redirecting');
        		//$window.location.href="http://slides.com/christianekrem/kfgo/";
        		return;
        	}
        }
      })
      .state('blog', {
      	url: '/blog/:post?',
      	controller: 'BlogCtrl as blog',
      	templateUrl: 'app/blog/blog.html'
      })
      ;

    $urlRouterProvider.otherwise('/');
  })
;
