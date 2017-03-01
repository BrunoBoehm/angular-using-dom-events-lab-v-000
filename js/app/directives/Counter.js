function Counter() {
	return {
		template: [
			'<div>',
				'<h3>Counter</h3>',
				'<div>Click anywhere to increment the counter!</div>',
				'<div>Current count: {{ ctrl.count }}</div>',
			'</div>'
		].join(''),
		controller: function ($scope) {
			this.count = 0;
		},
		require: 'counter', // gives us ctrl in the link function
		controllerAs: 'ctrl', // use this and ctrl.count
		link: function(scope, element, attrs, ctrl){
			element.on('click', function(){
				ctrl.count++;
				scope.$apply(); // we're outside of the controller scope, we need to remind it
			});

			scope.$on('$destroy', function(){
				element.off();
			});			
		}
	}
}

angular
	.module('app')
	.directive('counter', Counter);