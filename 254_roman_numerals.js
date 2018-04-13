
function convertToRoman(num) {
	var rNum=["I","V"];
	var dNum=[1,5];
	var roman=[];
	for (i=0; i< num; i++){
	  if (num<=3){
	   roman.push(rNum[0]);
	   return roman.join("");

  	}                       
	}
//console.log(roman.join(""));
}

//console.log(convertToRoman(3));
convertToRoman(3);
