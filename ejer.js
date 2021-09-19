//---------------------------------------------------
//----------------------Ejercicio 1-----------------
//----------------------------------------------------
//variables para almacenar los promedios

 let avgRicks;
 let avgMortys;
 //funciones para calcular el promedio de los ricks y morthis
const calcAverageRicks = (puntajericks1, puntajericks2, puntajericks3) =>{
    avgRicks = (puntajericks1+puntajericks2+puntajericks3)/3;
    console.log(avgRicks);
} ;
const calcAverageMortys = (puntajemortys1, puntajemortys2, puntajemortys3) => {
    avgMortys = (puntajemortys1+puntajemortys2+puntajemortys3)/3;
    console.log(avgMortys);

};
//llamamos a la funcion y enviamos parametros
console.log(calcAverageRicks(96, 108, 89));
console.log(calcAverageMortys(88, 91 ,110));
//funcion para ver los resultados
 const checkWinner = (avgMortys, avgRicks)=>{
     if (avgMortys < 100 && avgRicks < 100) {
            console.log("Ninguno gana el premio");
    }
    else{
    
    if (avgMortys === avgRicks && (avgMortys > 99 || avgRicks > 99)) {
        console.log("Empate");
    }
    if (avgMortys>avgRicks) {
        console.log("los Mortys ganan  " + avgMortys + " contra  " + avgRicks);
        
    }
     if (avgRicks>avgMortys) {
        console.log("los Ricks ganan  " + avgRicks + " contra  " + avgMortys);
        
    }
    }
 };
 //enviamos los promedios a la funcion para ver los resultados
console.log(checkWinner(avgMortys, avgRicks));
//---------------------------------------------------
//----------------------Ejercicio 2-----------------
//----------------------------------------------------
//
//parte 1

let tip = [120];

const calcTip = (tip) => {
    let propina = tip >= 50 && tip <= 300 ? tip * 0.15 : tip * 0.20;
    let total = (Number(tip)) + (Number(propina));
    console.log(`la factura fue ${tip} la propina fue ${propina} y el valor total es ${total}`);
};
console.log(calcTip(tip));