import angularMeteor from 'angular-meteor';
import { MyCollection } from '../imports/collection.js';

var app = angular.module('app',[
  angularMeteor
])

app.controller ('mainCtrl',function($scope) {
  // when landing on the page, get all todos and show them
  $scope.helpers({
    pics() {return MyCollection.find({})}
  })
  $scope.upvote = function(item){
      item.likes += 1;
    }

})
