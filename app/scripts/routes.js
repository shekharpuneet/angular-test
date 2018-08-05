'use strict';

angularTestApp.config(function($stateProvider, $urlRouterProvider) {
	//
	// For any unmatched url, redirect to /state1
	$urlRouterProvider.otherwise("/manage-users/user-profile");
	// Now set up the states
	$stateProvider
	.state('userProfile', {
		url : "/manage-users/user-profile",
		templateUrl : "partials/modules/manageUsers/userProfile.html",
		controller : 'user_profile',
		data : {
			displayName : 'User Profile'
		}
	})
	.state('testLink', {
		url : '/testLink',
		templateUrl : 'partials/modules/testLink/testLink.html',
		controller : 'testLink',
		data : {
			displayName : 'Test Link'
		},
		onEnter : function() {
			console.log("Enter Test Link");
		}
	})
	.state('testLink.results', {
		url : '/result',
		templateUrl : 'partials/modules/testLink/testLinkView.html',
		controller : 'testLink',
		data : {
			displayName : 'Results'
		},
		onEnter : function() {
			console.log("Enter Test Link Results");
		}
	})
});

