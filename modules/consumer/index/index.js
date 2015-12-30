(function (app) {
    'use strict';

    var controller = function($scope){
        $scope.module = 'consumer.index';
        console.log('consumer-index-controller');
    };
    
    controller.$inject = ['$scope'];
    app.controllerProvider.register('consumer-index', controller);

}(stylePlus));
