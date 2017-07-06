var app = {};
(function() {
app = angular.module("MainApp", ['ngRoute', 'ngSanitize', 'ngResource', 'ngAnimate', 'mgcrea.ngStrap'])
app.config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(false).hashPrefix('!');
    $routeProvider
        .when("/", {
            templateUrl: '/views/index.html', controller: 'mainCtrl'
        })
        .when("/customers", {
            templateUrl: '/views/customers/customers.html', controller: 'customersCtrl'
        }).otherwise({
            redirectTo: "/"
        });
});
})();





// var token = "XXX";
// (function() {
 
// })();
   (function(){
    app.controller("globalCtrl", function ($scope) {
        $scope.pageData = [
            {Name: 'Home'},
            {Name: 'Customers'}
        ];
        $scope.directiveTest = "YO YO Mgular";
    });
   })();
(function () {
    console.log('Check point1');
    app.controller('customersCtrl', ($scope) => {
        console.log('OK');
    //     $scope.activePage = 2; //"Customers";
    //     $scope.readCustomersData = [];

    //     $scope.createNewCustomers = function () {
    //         customersService.createNewCustomers($scope.modalData).then((result) => {
    //             if (result) {
    //                 $scope.readCustomersData.push(result.data);
    //             }
    //         });
    //     }
    //     $scope.modalData = {};
    //     $scope.readAllCustomers = function () {
    //         console.log('OK');
    //         customersService.readAllCustomers().then((result) => {
    //             if (result != null) { 
                    
    //                 $scope.readCustomersData = result.data;
    //             }
    //         });
    //     };
    //     $scope.updateCustomers = function () {
    //         var id = $scope.currentID;
    //         var index = $scope.currentIndex;
    //         customersService.updateCustomers($scope.modalData, id).then((result) => {
    //             if (result) {
    //                 $scope.readCustomersData[index] = $scope.modalData;
    //             }
    //         });
    //     };

    //     $scope.deleteSample = function () {
    //         var id = $scope.currentID;
    //         var index = $scope.currentIndex;
    //         customersService.deleteSample(id).then((result) => {
    //             if (result) {
    //                 $scope.readCustomersData.splice(index, 1);
    //             }
    //         });
    //     };

    //     $scope.checkData = function () {
    //         switch ($scope.modalMode) {
    //             case "create":
    //                 $scope.createNewCustomers();
    //                 break;
    //             case "edit":
    //                 $scope.updateCustomers();
    //                 break;
    //         }
    //     }
    //     $scope.showCustomers = function (type, id, index) {
    //         $scope.modalMode = type;
    //         $scope.currentID = id;
    //         $scope.currentIndex = index;
    //         var myOtherModal = $modal({ scope: $scope, template: '/views/sample/modal/customersModal.ejs', show: false });

    //         switch (type) {
    //             case 'create':
    //                 $scope.modalData = {};
    //                 $scope.modalData.readOnly = false;
    //                 myOtherModal.$promise.then(myOtherModal.show);
    //                 break;
    //             case 'edit':
    //                 $scope.read(id, function (result) {
    //                     if (result != "ERROR") {
    //                         myOtherModal.$promise.then(myOtherModal.show);
    //                         $scope.modalData = result;
    //                         $scope.modalData.bCreate = JSON.parse(result.bCreate);
    //                         $scope.modalData.readOnly = false;
    //                     }
    //                 });
    //                 break;
    //         }
    //     };

    });
})();
(function () {
    app.factory('customersService', ($http, $q) => {
        let x = {};
        x.readAllCustomers = () => {
            var defer = $q.defer();
            $http(
                {
                    method: 'GET',
                    url: '/customers',
                    contentType: 'application/json; charset=utf-8',
                    dataType: 'json'
                    // headers: {
                    //     'RequestVerificationToken': token
                    // }
                })
                .then((result) => {
                    defer.resolve(result);
                }).catch((result) => {
                    defer.reject(result);
                });
            return defer.promise;
        };

        x.createNewCustomers = function (obj) {
            var defer = $q.defer();
            $http({
                method: "POST",
                url: '/customers/saveadd',
                contentType: 'application/json; charset=utf-8',
                data: {
                    Name: obj.name,
                    Address: obj.address,
                    Email: obj.email,
                    Phone: obj.phone
                },
                dataType: 'json'
                // headers: {
                //     'RequestVerificationToken': token
                // }
            }).then(function (data) {
                defer.resolve(data);
            }, function (data) {
                defer.reject(data);
            });
            return defer.promise;
        };

        x.updateCustomers = function (obj, id) {
            var defer = $q.defer();
            $http({
                method: "POST",
                url: '/save_edit/' + id,
                data: {
                    Name: obj.name,
                    Address: obj.address,
                    Email: obj.email,
                    Phone: obj.phone
                },
                contentType: 'application/json; charset=utf-8',
                dataType: 'json'
                // headers: {
                //     'RequestVerificationToken': token
                // }
            }).then(function (data) {
                defer.resolve(data);
            }, function (data) {
                defer.reject(data);
            });
            return defer.promise;
        };

        x.deleteCustomers = function (id) {
            var defer = $q.defer();
            $http({
                method: 'GET',
                url: '/delete_customer/' + id,
                contentType: 'application/json; charset=utf-8',
                dataType: 'json'
                // headers: {
                //     'RequestVerificationToken': token
                // }
            }).then(function (data) {
                defer.resolve(data);
            }, function (data) {
                defer.reject(data);
            });
            return defer.promise;
        };

        return x;
    });
})();


(function(){
    app.controller('mainCtrl', function ($scope) {
        $scope.activePage = 1; // Home     
    });
})();

