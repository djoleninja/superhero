(function(angular) {
  'use strict';
angular.module('ngrepeatSelect', [])
  .controller('HeroCtrl', ['$scope', function($scope) {
    $scope.data = {
     repeatSelect: null,
     availableOptions: [
       {id: '1', name: 'Spider-Man', realname:'Peter Parker',  creator :'marvel' },
       {id: '2', name: 'Iron-Man', realname:'Edward "Tony" Stark', creator:'marvel'},
       {id: '3', name: 'Bat-Man', realname:'Bruce Wayne', creator:'DC'},
       {id: '4', name: 'Wolverine', realname:'James Howlett Logan', creator:'marvel'},
       {id: '5', name: 'Hulk', realname:' Robert Bruce Banner', creator:'marvel'},
       {id: '6', name: 'SuperMan', realname:'Clark Kent', creator:'DC'},
       {id: '7', name: 'Green Lenter', realname:'Alan Scott', creator:'DC'},
     ],
    };
 }]);
})(window.angular);

