(function (app) {
    'use strict';

    var controller = function($scope){
        $scope.module = 'craft.index.child';
        console.log('craft-index-child-controller');
    };
    
    controller.$inject = ['$scope'];
    app.controllerProvider.register('craft-index-child', controller);

}(stylePlus));
