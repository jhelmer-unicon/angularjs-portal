'use strict';

(function() {
  var app = angular.module('portal.marketplace.directives', []);
  app.directive('marketplacePortlet', function() {
      return {
        restrict : 'E',
        templateUrl : 'partials/marketplace-portlet.html'
      }
    });
  
})();
