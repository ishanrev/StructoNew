function select(memory){
    // Write your code here
    // memory = ', '+memory
    let names = memory.split(', ')
    let final = []
    for(let x=0;x<names.length;x++){
        let name = names[x]
        if(name.substring(0,1)==='!'){
            x=x+1;
        }else{
            final.push(name)
        }
    }
    return final.join(', ')
}

console.log(select('Digital Daggers, !Kiny Nimaj, Rack Istley, Digital Daggers, Digital Daggers'))