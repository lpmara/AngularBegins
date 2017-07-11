(function () {
    angular.module("MainApp").controller('customersCtrl', function ($scope, $route, $modal, customersService) {
        $scope.activePage = 2; //"Customers";
        $scope.readCustomersData = [];

        $scope.createNewCustomers = (() => {
            customersService.createNewCustomers($scope.modalData).then((result) => {
                if (result) {
                    $route.reload();
                    $scope.readCustomersData.push(result.data);
                }
            });
        });
        $scope.modalData = {};
        $scope.readCustomers = ((id, cb) => {
            customersService.readCustomers(id).then((result) => {
                cb(result.data);
            });
        });
        $scope.readAllCustomers = (() => {
            customersService.readAllCustomers().then((result) => {
                if (result != null) {
                    $scope.readCustomersData = result.data;
                }
            });
        });
        $scope.updateCustomers = (() => {
            var id = $scope.currentID;
            var index = $scope.currentIndex;
            customersService.updateCustomers($scope.modalData, id).then((result) => {
                if (result) {
                    $route.reload();
                    $scope.readCustomersData[index] = $scope.modalData;
                }
            });
        });

        $scope.deleteCustomers = ((id) => {
            var index = $scope.currentIndex;
            customersService.deleteCustomers(id).then((result) => {
                if (result) {
                    $route.reload();
                    $scope.readCustomersData.splice(index, 1);
                }
            });
        });

        $scope.checkData = (() => {
            switch ($scope.modalMode) {
                case "create":
                    $scope.createNewCustomers();
                    break;
                case "edit":
                    $scope.updateCustomers();
                    break;
            }
        });
        $scope.showCustomers = ((type, id, index) => {
            $scope.modalMode = type;
            $scope.currentID = id;
            $scope.currentIndex = index;
            var myOtherModal = $modal({ scope: $scope, template: '/views/customers/modal/customersModal.html', show: false });

            switch (type) {
                case 'create':
                    $scope.modalData = {};
                    myOtherModal.$promise.then(myOtherModal.show);

                    break;
                case 'edit':
                    $scope.readCustomers(id, ((result) => {
                        console.log(result);                   
                        if (result != "ERROR") {
                            myOtherModal.$promise.then(myOtherModal.show);
                            $scope.modalData = result[0];
                        }
                    }));
                    break;
            }
        });

    });
})();