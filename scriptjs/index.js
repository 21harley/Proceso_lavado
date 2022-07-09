import Bloque from "./Bloque/Bloque.js";
let datos=0;
const $root=document.querySelector("#root");
const $inicio=document.querySelector("#inicio");
const $datos=document.querySelector("#datos");
const $reinicio=document.querySelector("#reinicio");
const $detalle=document.querySelector("#detalle");
const $menu={
    menu_show:(document.querySelector("#menu-show")),
    activar:(document.querySelector("#activar"))
}

const listaBloques=[
    new Bloque('Inicio Proceso',1000,'Inicio',{
        valorA:"blue",
        valorB:"white"
    },1)
    ,
    new Bloque('Lavado',1000,'PC',{
        valorA:"blue",
        valorB:"white"
    },1)
    , 
    new Bloque('Enjabonado',1000,'DA',{
        valorA:"blue",
        valorB:"white"
    },2)
    ,
    new Bloque('Secado',1000,'SC',{
        valorA:"blue",
        valorB:"white"
    },1)
    ,
    new Bloque('Final',1000,'FP',{
        valorA:"blue",
        valorB:"white"
    },1)
];

$menu.activar.addEventListener("click",()=>{
    mover();
})

$inicio.addEventListener("click",()=>{
    if(datos==0){
        listaBloques.forEach((el)=>{
            $root.innerHTML+=el.generarHTML();
        })
        datos=1;
        $menu.menu_show.style.display='block';
    }
})

$reinicio.addEventListener("click",()=>{
    if(datos==1){
        $root.innerHTML="";
        datos=0;
        $menu.menu_show.style.display='none';
    }
})

function mover(){
    if(datos!=0){
        listaBloques.forEach((el,index)=>{
            el.cambioColor('valorA','valorB');
            let cam=setInterval(()=>{
             let retuCam=setInterval(()=>{
                 el.cambioColor("valorA",'valorB');
                 clearInterval(retuCam);
             },el.Time,[el]);
               el.cambioColor("valorB",'valorA');
               clearInterval(cam);
            },el.Time*(index+1),[el]);
         });
    }
}