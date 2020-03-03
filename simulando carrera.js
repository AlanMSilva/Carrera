var c1=0,c2=0,l=1;
var cadena="";
function Dado(){
var numA=Math.floor(Math.random()*6+1);
return numA;
}

var v1=Dado();
function avance(){
    if(v1==1||v1==2){
        return 1;
    }else{
        if(v1==3){
            return 3;
        }else{
            return 2;
        }
    }
}




function carrera(){
do{
            if(l==1){
                c1+=avance();
                l--;
            }
            else{
                c2+=avance();
                l++;
            }
            cadena += "c1 = " + c1 + " c2 = " + c2 + " \n";
        }while(c1<100 && c2<100);

    if (c1>=100 && c2>=100)
        cadena +=  "empataron los vatos son buenos xd";
    else if(c1>=100)
        cadena += "corredor 1 gano";
    else
        cadena += "corredor 2 gano";
    return cadena;
}
console.log(carrera());


