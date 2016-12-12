/**
 * Created by Nikhil-PC on 10/11/2016.
 */
var calculator = angular.module('calculatorApp',[]);

calculator.controller('calculatorCtrl', function ($scope, $http) {

    $scope.add = function () {
        $http({
            method : "POST",
            url : '/add',
            headers : {
              'content-type' : 'application/json'
            },
            data : {
                num1 : $scope.number1,
                num2 : $scope.number2
            }
        }).then(function (response) {
            //alert(JSON.stringify(response));
            $scope.output = response.data;
        }, function (response) {
            
        });
    }

    $scope.subtract = function () {
        $http({
            method : "POST",
            url : '/subtract',
            headers : {
                'content-type' : 'application/json'
            },
            data : {
                num1 : $scope.number1,
                num2 : $scope.number2
            }
        }).then(function (response) {
            //alert(JSON.stringify(response));
            $scope.output = response.data;
        }, function (response) {

        });
    }

    $scope.multiply = function () {
        $http({
            method : "POST",
            url : '/multiply',
            headers : {
                'content-type' : 'application/json'
            },
            data : {
                num1 : $scope.number1,
                num2 : $scope.number2
            }
        }).then(function (response) {
            // alert(JSON.stringify(response));
            $scope.output = response.data;
        }, function (response) {

        });
    }

    $scope.divide = function () {
        $http({
            method : "POST",
            url : '/divide',
            headers : {
                'content-type' : 'application/json'
            },
            data : {
                num1 : $scope.number1,
                num2 : $scope.number2
            }
        }).then(function (response) {
            // alert(JSON.stringify(response));
            $scope.output = response.data;
        }, function (response) {

        });
    }
});