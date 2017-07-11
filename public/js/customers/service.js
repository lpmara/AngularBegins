(function () {
    angular.module("MainApp").factory('customersService', ($http, $q) => {
        var x = {};
        x.readAllCustomers = () => {
            var defer = $q.defer();
            $http(
                {
                    method: 'GET',
                    url: '/customers',
                    contentType: 'application/json; charset=utf-8',
                    dataType: 'json'
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

