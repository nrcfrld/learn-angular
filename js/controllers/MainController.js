app.controller("MainController", [
	"$scope",
	function ($scope) {
		$scope.title = "Halo saya Rico";
		$scope.book = {
			title: "Belajar AngularJs Bersama Agung Setiawan",
			author: "Agung Setiawan",
			price: 80000,
			pubdate: new Date("2015", "09", "01"),
		};
	},
]);
