(function (app) {
    'use strict';

    var controller = function($scope){
        $scope.module = 'consumer.index.child';
        console.log('consumer-index-child-controller');
    };
    
    controller.$inject = ['$scope'];
    app.controllerProvider.register('consumer-index-child', controller);

}(stylePlus));
