(function (app) {
    'use strict';

    var controller = function($scope){
        $scope.module = 'craft.index';
        console.log('craft-index-controller');
    };
    
    controller.$inject = ['$scope'];
    app.controllerProvider.register('craft-index', controller);

}(stylePlus));
