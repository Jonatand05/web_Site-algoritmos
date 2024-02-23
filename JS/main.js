function suma() {
    //explicacion algoritmo
    alert("algoriTmo que realiza una suma entre dos valores ingresados por un usuario")
    //Declaracion de variables nesesarias
    let A= 0;
    let B= 0;
    let S= 0;
    // capturamos los datos
     A= parseInt(prompt("Ingrese el primer valor"));
     B = parseInt(prompt ("Ingrese el segundo valor"));
    // Realizamos la operacion
    S = A+B;
    // Damos el resultado o respuesta
alert("El resultado de la suma es:"+ S)
}

function operacioness() {
    alert("algoritmo que realiza operaciones basicas entre dos valores ingresados por un usuario")

    let q= 0;
    let w= 0;
    let s= 0;
    let r= 0;
    let m= 0;
    let d= 0;

    q= parseInt(prompt("Ingrese el primer valor"));
    w = parseInt(prompt ("Ingrese el segundo valor"));

    s =q+w;
    r =q-w;
    m = q*w;
    d= q/w;

    alert("El resultado de la suma es:"+ s);
    alert("El resultado de la resta es:"+ r);
    alert("El resultado de la multiplicacion es:"+ m);
    alert("El resultado de la divicion  es:"+ d)
}

function nCuadrado(){
    //Explicaci├│n del ejercicio
    alert ("Algoritmo que calcula el cuadrado de un numero ingresado");
    //Declaraci├│n de variables
    let N,C= 0;
    //Capturamos los datos
    N= parseInt(prompt("Ingrese el numero "));
    //Realizamos la operaci├│n
    C= N * N;
    //Mostramos el resultado
    alert("El cuadrado de " + N + " Es "  + C );
}

function aTriangulo(){
    //Explicaci├│n del ejercicio
    alert("Algoritmo que determina el area de un triangulo ingresando la base y la altura");
    //Declaraci├│n de variables
    let B,A=0;

    //Capturamos los datos
    B= parseInt(prompt("Ingrese la base del triangulo"));
    A= parseInt(prompt("Ingrese el area del triangulo"));
    //Realizamos la operaci├│n
    Ar= B * A /2;
    //Mostramos el resultado
    alert ("El resultado de la base " + B + " Por la altura " + A + " Es igual a " + Ar);
}

function ConversionM(){
    //Explicaci├│n del ejercicio
    alert("Algoritmo que determina las pulgadas, los Km y milimetros de un valor dado en metros ");
    //Declaraci├│n de variables
    let vi,p,km,mm=0;

    //Capturamos los datos
    vi= parseInt(prompt("ingrese el valor en metros"));
    //Realizamos la operaci├│n
    p= vi * 39.3701;
    km= vi / 1000;
    mm= vi * 1000;
    //Mostramos el resultado
    alert ("Numero ingresado es "+vi +" Metros"+" Las pulgadas del valor ingresado "+p+" los kilometros del valor ingresado "+km+" Y los milimetros son " +mm);
}

function Mayor(){
    //Explicaci├│n del ejercicio
    alert("Algoritmo que determina el numero mayor de dos numeros ingresado");
    //Declaraci├│n de variables
    let N1,N2= 0;

    //Capturamos los datos
    N1= parseInt(prompt("Ingrese el primer numero"));
    N2= parseInt(prompt("Ingrese el segundo numero"));
    //Realizamos la operaci├│n  AND //Mostramos el resultado
    if (N1==N2){
        alert("Los valores ingresados son iguales")
    } else if (N1>N2) {
        alert ("El numero uno " + N1 + " Es mayor que el numero " + N2)
    } else {
        alert ("El numero dos " + N2 + "  Es mayor que el numero " + N1)
    }
    
    
}

function Menor(){
    //Explicaci├│n del ejercicio
    alert("Algoritmo que determina el menor de tres numeros");
    //Declaraci├│n de variables
    let N1,N2,N3=0;
    //Capturamos los datos
    N1= parseInt (prompt("Ingrese el primer numero"));
    N2= parseInt(prompt("Ingrese el segundo numero"));
    N3= parseInt(prompt("Ingrese el tercer numero"));
    //Realizamos la operaci├│n AND //Mostramos el resultado
    if ((N1==N2)&&(N1==N3)){
        alert("Los valores ingresados son iguales");
    } else if ((N1==N2)&&(N1<N3)){
        alert("El numero uno " +N1+" Es menor que " +N3 +" e igual que el numero "+N2);
    } else if ((N1==N3)&&(N1<N2)){
        alert("El numero uno " +N1+" Es menor que " +N2 +" e igual que el numero "+N3);
    } else if ((N2==N1)&&(N2<N3)){
        alert("El numero dos " +N2+" Es menor que " +N3 +" e igual que el numero "+N1);
    } else if ((N2==N3)&&(N2<N1)){
        alert("El numero dos " +N2+" Es menor que " +N1 +" e igual que el numero "+N3);
    } else if ((N3==N1)&&(N3<N2)){
        alert("El numero tres " +N3+" Es menor que " +N2 +" e igual que el numero "+N1);
    } else if ((N3==N2)&&(N3<N1)){
        alert("El numero tres " +N3+" Es menor que " +N1 +" e igual que el numero "+N2);
    } else if((N1<N2)&&(N1<N3)){
        alert("El numero uno "+N1+ " Es menor que " +N2+" y "+N3);
    }else if((N2<N1)&&(N2<N3)){
        alert("El numero dos "+N2+ " Es menor que " +N1+" y "+N3);
    } else {
        alert("El numero tres "+N3+ " Es menor que "+N1 +" y "+N3);
    }
}

function Pnotas(){
    //Explicaci├│n del ejercicio
    alert("Algoritmo que determina si aprueba o reprueba la materia de algoritmica teniendo en cuenta que son en total 7 notas entre 1 y 10 y se aprueba con 6.1 o mas");
    //Declaraci├│n de variables
    let N1,N2,N3,N4,N5,N6,N7=0;

    //Capturamos los datos
    N1= parseInt (prompt("Ingrese la primera nota"));
    N2= parseInt(prompt("Ingrese la segunda nota"));
    N3= parseInt(prompt("Ingrese la tercer nota"));
    N4= parseInt (prompt("Ingrese la cuarta nota"));
    N5= parseInt(prompt("Ingrese la quinta nota"));
    N6= parseInt(prompt("Ingrese la sexta nota"));
    N7= parseInt(prompt("Ingrese la septima nota"));
    //Realizamos la operaci├│n
    RF= (N1+N2+N3+N4+N5+N6+N7)/7;
    //Mostramos el resultado
    if(RF>=6.1){
        alert("┬б┬бFelicidades!! aprobo la materia, con el promedio de "+RF)
    } else {
        alert ("No aprobo la materia, vuelva el proximo trimestre, perdio con "+RF)
    }
}

function DesCompras() {

    alert("Algoritmo que aplica descuento según el número de kilos comprados");

    let K, M, S, D, T;

    K = parseInt(prompt("Ingrese el número de Kg: "));
    M = parseInt(prompt("Ingrese el valor de las manzanas: "));
    S = K * M;

    alert("El subtotal es " + S);

    if (K <= 2) {
        D = 0;
        T = S; 
        alert("No se aplicó ningún descuento, el total es " + T);
    } 
    else if (K >= 3 && K <= 5) {
        D = S * 0.1;
        T = S - D; 
        alert("Se aplicó un descuento del 10%, el total es " + T);
    } 
    else if (K >= 6 && K <= 10) {
        D = S * 0.15;
        T = S - D;
        alert("Se aplicó un descuento del 15%, el total es " + T);
    } 
    else if (K >= 11) {
        D = S * 0.2;
        T = S - D;
        alert("Se aplicó un descuento del 20%, el total es " + T);
    }    
}

    function SalarioSemanal(){

    alert ("Algoritmo que calcula las horas trabajadas semanales de un trabajador")
 
        let L, MA , MI, J , V , S, D, T, X = 0;

    L=parseInt(prompt("ingrese el total de horas trabajadas el lunes, si no trabajo ese dia ingrese 0: "));  
    MA=parseInt(prompt("ingrese el total de horas trabajadas el martes, si no trabajo ese dia ingrese 0: "));  
    MI=parseInt(prompt("ingrese el total de horas trabajadas el miercoles, si no trabajo ese dia ingrese 0: "));  
    J=parseInt(prompt("ingrese el total de horas trabajadas el jueves, si no trabajo ese dia ingrese 0: "));  
    V=parseInt(prompt("ingrese el total de horas trabajadas el viernes, si no trabajo ese dia ingrese 0: "));  
    S=parseInt(prompt("ingrese el total de horas trabajadas el sabado, si no trabajo ese dia ingrese 0: "));  
    D=parseInt(prompt("ingrese el total de horas trabajadas el domingo, si no trabajo ese dia ingrese 0: "));  
 
    T=(L+MA+MI+J+V+S+D);
    Horas = 12500;
    Extras = 18000;
    if (T <= 40){
        alert("El total de horas trabajadas es: " + T + "y el total devengado es $"+ T * Horas);
    }
    else if (T > 40){
        X = T-40;
        alert("El total de horas trabajadas es: " + T )
        alert("Valor a pagar por 40 horas = $"+ (Horas*40) + " + " +X+" horas extras = $" + (X*Extras));    
        alert("El total devengado es $"+ ((40 * Horas) +(X*Extras)));
    }
}
