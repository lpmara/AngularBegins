   (function(){
    angular.module("MainApp").controller("globalCtrl", function ($scope) {
        $scope.pageData = [
            {Name: 'Home'},
            {Name: 'Customers'}
        ];
        $scope.directiveTest = "YO YO Mgular";
    });
   })();