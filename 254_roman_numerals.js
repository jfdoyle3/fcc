
function convertToRoman(num) {
	var rNum=["I","V"];
	var dNum=[1,5];
	var roman=[];
	for (i=0; i< num; i++){
	  if (num<=3){
	  roman.push(rNum[0]);
  	}                       
	}
console.log(roman.join(""));
// return rom_num;
}

//console.log(convertToRoman(3));
convertToRoman(3);
