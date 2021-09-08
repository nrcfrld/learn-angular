let app = angular.module("FirstApp", []);
app.filter("rupiah", function () {
	return function (angka) {
		var rev = parseInt(angka, 10).toString().split("").reverse().join("");
		console.log(rev);
		var rev2 = "";
		for (var i = 0; i < rev.length; i++) {
			rev2 += rev[i];
			if ((i + 1) % 3 === 0 && i !== rev.length - 1) {
				rev2 += ".";
			}
		}
		return "Rp. " + rev2.split("").reverse().join("") + ",00";
	};
});
