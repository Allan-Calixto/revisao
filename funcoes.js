var x = 0;
var y = 0;

if(x==y) {
    alert("Iguais");
}
else if(x > y){
    alert("Maior");
}
else{
    alert("Menor");
}

while(x <= 10){
    alert(x);
    x = x + 1; //mesma coisa de x++(incremento)
}

do{
	alert(x)
}while(x <= 10)