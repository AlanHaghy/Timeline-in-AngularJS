// Angular 1.x simple module using only ui.bootstrap module to show modal.

angular.module('theApp',['ui.bootstrap'])

.controller('timelineController', ['$scope', '$modal', function($scope, $modal) {
   
    var totalMemo = [];
    $scope.totalMemo = totalMemo;

    // to show Date/Time I used the default AngularJS Date filter as to needed format {{date | date:"h:mma:ss a', ' mm-dd-yyyy "}}
    // Simple forward the Date in JS to view as follow:
  
    $scope.submitMemo = function(){
        totalMemo.push({title : $scope.timelineTitle , body : $scope.timelineMessage});
        $scope.timelineTitle = $scope.timelineMessage = null;
        $scope.date = new Date();
    }

   $scope.open = function (selectedMemo) {
      
// instance to open the modal using 'myModalContent.html' template.
    var modalInstance = $modal.open({
      templateUrl: 'myModalContent.html',
      controller: ModalInstanceCtrl,
      resolve: {
        selectedMemo: function () {
          return selectedMemo;
        }
      }
    });
  };

  var ModalInstanceCtrl = function ($scope, $modalInstance, selectedMemo) {
  
    // OK confirms to remove the selectedMemo from totalMemo array.
    $scope.ok = function () {
      $modalInstance.close(); 
      totalMemo.splice(selectedMemo, 1);
     };
  
     // To cancle the Confirmation Modal
    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  };

}]);



