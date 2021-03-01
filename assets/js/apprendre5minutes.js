function fnCalculHypotenuse(){
	var a = document.getElementById("a-cote-oppose").value;
	var b = document.getElementById("b-cote-adjacant").value;
	document.getElementById("c-hypotenuse").value="";
	if ((a > 0) && (b > 0)) {
		var c = Math.sqrt(a*a + b*b);
		document.getElementById("c-hypotenuse").value = c;
	}
}
