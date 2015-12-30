(function() {
    'use strict';

    var stylePlus = angular.module('stylePlus', ['ui.router', 'styleplus']);
    stylePlus.config([
        '$urlRouterProvider', '$stateProvider','$locationProvider', '$controllerProvider', '$compileProvider', '$filterProvider', '$httpProvider', '$provide', '$urlMatcherFactoryProvider',
        function($urlRouterProvider, $stateProvider,$locationProvider, $controllerProvider, $compileProvider, $filterProvider, $httpProvider, $provide, $urlMatcherFactoryProvider) {
            $locationProvider.html5Mode(true);
            /**
             * 平台的所有模块
             */
            var modules = ['consumer', 'craft', 'store'];
            /**
             * 模块依赖结果缓存
             */
            var stateDepsCache = {};

            /**
             * 提供register用于外部注册
             */
            stylePlus.controllerProvider = $controllerProvider;
            stylePlus.compileProvider = $compileProvider;
            stylePlus.filterProvider = $filterProvider;
            stylePlus.provide = $provide;
            stylePlus.registerState = function(state, config) {
                var baseUrl = '/module/' + state.replace(/\./ig, '\/') + '/';
                config = config || {
                    deps: []
                };

                $stateProvider.state(state, {
                    templateUrl: baseUrl + 'index.html',
                    resolve: {
                        load: function($q) {
                            if (stateDepsCache[state]) {
                                return;
                            }

                            var defer = $q.defer(),
                                controllerUrl = baseUrl + 'index.js';

                            require(config.deps || [], function() {
                                require([controllerUrl], function() {
                                    stateDepsCache[state] = true;
                                    defer.resolve();
                                });
                            });

                            return defer.promise;
                        }
                    }
                });
            };

            /**
             * ng-href 支持扩展
             */
            $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|javascript):/);

            /**
             * 支持 form data 格式的数据 POST
             */
            $httpProvider.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
            $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';

            /**
             * 路由重定向
             */
            $urlRouterProvider.when('/', '/consumer/index');
            $urlRouterProvider.when('/:module', '/:module/index');

            /**
             * 屏蔽地址编码
             */
            $urlMatcherFactoryProvider.type('nonURIEncoded', {
                encode: function(val){return val && val.toString()},
                decode: function(val){return val && val.toString()},
                is: function() {
                    return true;
                }
            });

            /**
             * 基础状态定义
             */
            modules.forEach(function(module) {
                $stateProvider.state(module, {
                    url: '/:module/{page:nonURIEncoded}',
                    templateUrl: '/module/' + module + '/layout.html',
                    controller: function($state, $stateParams, $rootScope) {
                        $state.go(module + '.' + $stateParams.page.replace(/\//ig, '.'));
                    },
                    resolve: {
                        stateDeps: function($q) {
                            var defer = $q.defer();
                            require(['/module/' + module + '/layout.js'], function() {
                                defer.resolve();
                            });
                            return defer.promise;
                        }
                    }
                });
            });
        }
    ]);

    window.stylePlus = stylePlus;
}());