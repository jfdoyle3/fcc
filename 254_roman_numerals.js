function convertToRoman(num) {
	var rNum=["I","V","X","L","C","D","M"];
	var roman=[];
 while (num >0){
	if (num > 5000){
		str="Number To big";
		console.log(str);
		return str;
	}
	if (num >=1000 && num <= 5000){
  	 roman.push(rNum[6]);
  	 num -= 1000;
	  }  else
	if (num >= 10 && num <= 50){
		  roman.push(rNum[2]);
		  num -= 10;
	  }
	if (num >= 5 && num <=9){
		  console.log(num);
  		roman.push(rNum[1]);
  	   num -= 5;
	  }   else
	if (num == 4){
		  roman.push(rNum[0]);
		  roman.push(rNum[1]);
		  num -= 4;
		  } else            
	if (num<=3){
	  roman.push(rNum[0]);
	  num -= 1;
  	}
	 }
console.log(roman.join(""));
// return rom_num;
}

//console.log(convertToRoman(3));
convertToRoman(6000);



//max
// I  3
// V  1
// X  4
// D,C,M  4
//
    
    