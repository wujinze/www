(function (app) {
    'use strict';

    var controller = function($scope){
        $scope.module = 'consumer.setting';
        console.log('consumer-setting-controller');
    };
    
    controller.$inject = ['$scope'];
    app.controllerProvider.register('consumer-setting', controller);

}(stylePlus));
