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
                    console.log('Can Read All Customers.');
                }).catch((result) => {
                    defer.reject(result);
                    console.log('Cannot Read Customers.');
                });
            return defer.promise;
        };

        x.readCustomers = ((id) => {
            console.log(id);
            var defer = $q.defer();
            $http({
                method: 'GET',
                url: '/customers/edit/' + id,
                contentType: 'application/json; charset=utf-8',
                dataType: 'json'
            }).then((data) => {
                defer.resolve(data);
                console.log('Can get data from DB.');
            }).catch((data) => {
                defer.reject(data);
                console.log('Cannot get data from DB.');
            });
            return defer.promise;
        });

        x.createNewCustomers = ((obj) => {
            console.log(obj.name);
            var defer = $q.defer();
            $http({
                method: "POST",
                url: '/customers/saveadd',
                contentType: 'application/json; charset=utf-8',
                data: {
                    name: obj.name,
                    address: obj.address,
                    email: obj.email,
                    phone: obj.phone
                },
                dataType: 'json'
            }).then((data) => {
                defer.resolve(data);
                console.log('User Created.');
            }).catch((data) => {
                defer.reject(data);
                console.log('User Cannot Create.');
            });
            return defer.promise;
        });

        x.updateCustomers = ((obj, id) => {
            var defer = $q.defer();
            $http({
                method: "POST",
                url: '/customers/save_edit/' + id,
                data: {
                    name: obj.name,
                    address: obj.address,
                    email: obj.email,
                    phone: obj.phone
                },
                contentType: 'application/json; charset=utf-8',
                dataType: 'json'
            }).then((data) => {
                defer.resolve(data);
                console.log('User Updated.');
            }).catch((data) => {
                defer.reject(data);
                console.log(data);
                console.log('User Cannot Update.');
            });
            return defer.promise;
        });

        x.deleteCustomers = ((id) => {
            console.log(id);
            var defer = $q.defer();
            $http({
                method: 'GET',
                url: '/customers/delete_customer/' + id,
                contentType: 'application/json; charset=utf-8',
                dataType: 'json'
            }).then((data) => {
                defer.resolve(data);
                console.log('Deleted.');
            }).catch((data) => {
                defer.reject(data);
                console.log('Cannot Delete');
            });
            return defer.promise;
        });
        return x;
    });
})();

