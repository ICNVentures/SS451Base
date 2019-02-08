four51.app.controller('CategoryListCtrl', ['$routeParams', '$scope', 'Category',
    function ($routeParams, $scope, Category) {
        if (typeof ($routeParams.parentInteropID) !== "undefined") {
            angular.forEach($scope.tree, function (tr) {
                if (tr.InteropID == $routeParams.parentInteropID) {
                    $scope.CatList = tr.SubCategories;
                }
            });
        }
        else {
            $scope.CatList = $scope.tree;
        }

        $scope.ParentLink = function () {
            var link = '';

            if (typeof ($routeParams.parentInteropID) !== "undefined") {
                angular.forEach($scope.tree, function (tr) {
                    if (tr.InteropID == $routeParams.parentInteropID) {
                        link = '<a style="color:#0a3c61;" href="catalog/">&lt; Home</a>&nbsp;&nbsp;&nbsp;' + tr.Description;
                    }
                });
            }

            return link;
        }
    }]);
