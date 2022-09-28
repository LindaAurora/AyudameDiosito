
let diositoyallevame= document.getElementById("resultadospan");

let aynose= document.getElementById ("primer_valor");
let yavalio= document.getElementById ("segundo_valor");
let ayudaaaa= aynose.value;
let necesitodormir= yavalio.value;


let yabasta= document.getElementById ("resta");
let toiharta= document.getElementById ("suma");
let nopuedomartha= document.getElementById ("multiplicacion");
let cobrate= document.getElementById ("division");
console.log(yabasta);

yabasta.addEventListener("click",()=>{
  let aynose= document.getElementById ("primer_valor");
let yavalio= document.getElementById ("segundo_valor");
let ayudaaaa= parseInt(aynose.value);
let necesitodormir= parseInt(yavalio.value);

  let saquenmedeaqui= ayudaaaa - necesitodormir;
  diositoyallevame.innerHTML= saquenmedeaqui;

});

toiharta.addEventListener("click",()=>{
    let aynose= document.getElementById ("primer_valor");
let yavalio= document.getElementById ("segundo_valor");
let ayudaaaa= parseInt(aynose.value);
let necesitodormir= parseInt(yavalio.value);

  
let saquenmedeaqui= ayudaaaa + necesitodormir;


diositoyallevame.innerHTML= saquenmedeaqui;
})
nopuedomartha.addEventListener("click",()=>{
    let aynose= document.getElementById ("primer_valor");
let yavalio= document.getElementById ("segundo_valor");
let ayudaaaa= parseInt(aynose.value);
let necesitodormir= parseInt(yavalio.value);

  let saquenmedeaqui= ayudaaaa * necesitodormir;
  diositoyallevame.innerHTML= saquenmedeaqui;
});
cobrate.addEventListener("click",()=>{
    let aynose= document.getElementById ("primer_valor");
let yavalio= document.getElementById ("segundo_valor");
let ayudaaaa= parseInt(aynose.value);
let necesitodormir= parseInt(yavalio.value);

  let saquenmedeaqui= ayudaaaa / necesitodormir;
  diositoyallevame.innerHTML= saquenmedeaqui;

});
