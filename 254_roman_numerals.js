function convertToRoman(num) {
	var rNum=["I","V","X","L","C","D","M"];
	var roman=[];
 while (num >0){
		if (num >=1000){
  	 roman.push(rNum[6]);
  	 num -= 1000;
  	}  else
	  if (num == 5){
  		console.log(num);
  		roman.push(rNum[1]);
  	   num -= 5;
  	}               
	  if (num<=3){
	  roman.push(rNum[0]);
	  num -= 1;
  	}
	 }
console.log(roman.join(""));
// return rom_num;
}

//console.log(convertToRoman(3));
convertToRoman(7);



//max
// I  3
// V  1
// X  4
// D,C,M  4
//
    
    