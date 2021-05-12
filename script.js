const log = console.log;

const huiswerkMaken = (vak, callback) => {
    setTimeout( function(){
        log(`Ok, ok, ik ga nu mijn ${vak} huiswerk maken`);
      }, 500 );
    
    callback();
}

const klaarMetHuiswerk = () => {
    log("Kijk Paps/Mams, ik ben klaar met mijn huiswerk!")
}

huiswerkMaken("wiskunde", klaarMetHuiswerk);
