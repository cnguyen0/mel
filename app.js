angular.module('MelApp', ['ngAnimate'])
    .controller('HomeController', function($scope) {
        'use strict';

        if (window.innerWidth > 768) {
            $scope.visible = false;

            $scope.toggle = function() {
                $scope.visible = !$scope.visible;
                document.getElementById('enter').style.display = 'none';
            }

        } else {
            document.getElementById('enter').style.display = 'none';
            $scope.visible = true;
        }

    });

angular.module('sliderApp', ['ngAnimate'])
	.directive('slider', function($timeout) {
		return {
		    restrict: 'AE',
		    replace: true,
		    scope: {
		      images: '='
		    },
		    link: function(scope, elem, attrs) {},
		    templateUrl: 'templates/templateurl.html'
		};
	    scope.currentIndex = 0; // Initially the index is at the first image

		scope.next = function() {
  			scope.currentIndex < scope.images.length - 1 ? scope.currentIndex++ : scope.currentIndex = 0;
		};

		scope.prev = function() {
		  scope.currentIndex > 0 ? scope.currentIndex-- : scope.currentIndex = scope.images.length - 1;
		};

		scope.$watch('currentIndex', function() {
			scope.images.forEach(function(image) {
		    	image.visible = false; // make every image invisible
		  	});

		  	scope.images[scope.currentIndex].visible = true; // make the current image visible
		});
	})

	.controller('SliderController', function($scope) {
		$scope.images = [{
			src: 'one.jpg',
			title: 'Pic 1'
		}, {
			src: 'two.jpg',
			title: 'Pic 2'
		}, {
			src: 'three.jpg',
			title: 'Pic 3'
		}, {
			src: 'four.jpg',
			title: 'Pic 4'
		}, {
			src: 'five.jpg',
			title: 'Pic 5'
		}];
	});