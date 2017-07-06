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