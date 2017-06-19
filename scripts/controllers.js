/* global angular */

'use strict';

/* Controllers */
var appSeedControllers = angular.module('appSeedControllers', ['summernote'])

.controller('MainController', function($scope, $window, ModalService) {
    $scope.listen =function (){
       var issues =document.getElementsByClassName("note-editable")
       var documentResult = document.getElementsByClassName("note-editable");
      console.log('document.getElementsByClassName: ', documentResult[0].innerHTML);

      console.log(issues)
    }
	
})
