(function (app) {
    'use strict';

    var controller = function($scope){
        $scope.module = 'craft.setting';
        console.log('craft-setting-controller');
    };
    
    controller.$inject = ['$scope'];
    app.controllerProvider.register('craft-setting', controller);

}(stylePlus));
