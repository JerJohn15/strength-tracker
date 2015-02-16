'use strict';

// Declare app level module which depends on views, and components
angular.module('strengthTracker', [
  'ngRoute',
  'strengthTracker.workout',
  'strengthTracker.version',
  'strengthTracker.exerciseSelection',
  'strengthTracker.login',
  'angular-chartist',
  'ui.bootstrap'
]).
config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {
  $routeProvider.otherwise({redirectTo: '/workout'});
  $httpProvider.interceptors.push(function($q, $location) {
    return {
      response: function(response) {
        //on success
        return response;
      },
      responseError: function(response) {
        if (response.status == 401) {
          $location.url('/login');
        }
        return $q.reject(response);
      }
    };
  });
}]).
factory('WorkoutService',  function($http){
    var workoutService = new WorkoutService($http);
    return workoutService;
  }).
factory('OneRepMaxService', function() {
  return new OneRepMaxService();
}).
factory('ChartService', function() {
  return new ChartService();
}).
factory('SelectionService', function() {
  return new SelectionService();
}).
factory('LoginService', function($http) {
  return new LoginService($http);
}).
factory('UserProfileService', function() {
  return new UserProfileService();
});


