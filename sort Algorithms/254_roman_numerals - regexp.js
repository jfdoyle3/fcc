function convertToRoman(num) {
	roman=\^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$;
	roman_v2='(?=[MDCLXVI])M*(C[MD]|D?C{0,3})(X[CL]|L?X{0,3})(I[XV]|V?I{0,3})$)';
	console.log(roman);
//console.log(roman.join(""));

// return roman.join("");
}
convertToRoman(44);