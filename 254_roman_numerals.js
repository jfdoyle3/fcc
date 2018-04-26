function convertToRoman(num) {
	var rNum=["I","V","X","L","C","D","M"];
	var dNum=[1,5,10,50,100,500,1000];
	var roman=[];
 while (num >0){
	if (num > 5000){
		str="Number To big";
		console.log(str);
		return str;
	} else
	if (num >=1000 && num <= 5000){
  	 roman.push(rNum[6]);
  	 num -= 1000;
	  }  else
	if (num >= 10 && num <= 43){
		  roman.push(rNum[2]);
		  num -= 10;
	  } else
	if (num >= 5 && num <=8){
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
// return roman.join("");
}
convertToRoman(44);