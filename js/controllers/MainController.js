app.controller("MainController", [
	"$scope",
	function ($scope) {
		$scope.title = "Halo saya Rico";
		$scope.books = [
			{
				title: "Belajar AngularJs Bersama Agung Setiawan",
				author: "Agung Setiawan",
				price: 80000,
				pubdate: new Date("2015", "09", "09"),
				likes: 0,
			},
			{
				title: "Belajar Ruby",
				author: "Penulis Satu",
				price: 65000,
				pubdate: new Date("2015", "10", "09"),
				likes: 0,
			},
			{
				title: "Belajar Ruby on Rails",
				author: "Penulis Dua",
				price: 90000,
				pubdate: new Date("2015", "11", "09"),
				likes: 0,
			},
		];

		$scope.logToConsole = function (index) {
			var book = $scope.books[index];
			console.log(book);
		};
		$scope.likes = function (index) {
			$scope.books[index].likes += 1;
		};
	},
]);
