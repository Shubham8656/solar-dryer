let mi,mf;
let buttonclick1=()=>{
  mi=89.4;
  mf=10;
  console.log("hiiii")
  let inp=`<label>Enter the mass of product<input onChange="kg()" type="number" id="mass">(kg)</label>`
  document.querySelector(".input").innerHTML=inp

}

let kg= ()=>{
 let pmass = document.querySelector("#mass").value
 
let mm=(mi - mf)/(100-mf)

let mw=mm*pmass

let td=mw/1.5
if(td>24){
    let hours =Math.floor(td%24)
    td=Math.floor(td/24)
    
    alert (`Approximate time required for drying your product is ${td} days and ${hours} hours`)
}
else{
    td=Math.floor(td)
    alert (`Approximate time required for drying your product is ${td} hrs`)
    document.querySelector(".output").innerHTML=`<div>Approximate time required : ${td} hrs</div>`
    }
}

let buttonclick2=()=>{
  mi=75;
  mf=13;
  console.log("hiiii")
  let inp=`<label>Enter the mass of product<input onChange="kg()" type="number" id="mass">(kg)</label>`
  document.querySelector(".input").innerHTML=inp

}
let buttonclick3=()=>{
  mi=80;
  mf=10;
  console.log("hiiii")
  let inp=`<label>Enter the mass of product<input onChange="kg()" type="number" id="mass">(kg)</label>`
  document.querySelector(".input").innerHTML=inp

}

let buttonclick4=()=>{
  mi=82;
  mf=4;
  console.log("hiiii")
  let inp=`<label>Enter the mass of product<input onChange="kg()" type="number" id="mass">(kg)</label>`
  document.querySelector(".input").innerHTML=inp

}

let buttonclick5=()=>{
  mi=85;
  mf=18;
  console.log("hiiii")
  let inp=`<label>Enter the mass of product<input onChange="kg()" type="number" id="mass">(kg)</label>`
  document.querySelector(".input").innerHTML=inp

}

let buttonclick6=()=>{
  mi=80;
  mf=15;
  console.log("hiiii")
  let inp=`<label>Enter the mass of product<input onChange="kg()" type="number" id="mass">(kg)</label>`
  document.querySelector(".input").innerHTML=inp

}

let buttonclick7=()=>{
  mi=70;
  mf=5;
  console.log("hiiii")
  let inp=`<label>Enter the mass of product<input onChange="kg()" type="number" id="mass">(kg)</label>`
  document.querySelector(".input").innerHTML=inp

}

let buttonclick8=()=>{
  mi=80;
  mf=20;
  console.log("hiiii")
  let inp=`<label>Enter the mass of product<input onChange="kg()" type="number" id="mass">(kg)</label>`
  document.querySelector(".input").innerHTML=inp

}

let buttonclick9=()=>{
  mi=80;
  mf=4;
  console.log("hiiii")
  let inp=`<label>Enter the mass of product<input onChange="kg()" type="number" id="mass">(kg)</label>`
  document.querySelector(".input").innerHTML=inp

}

let buttonclick10=()=>{
  mi=80;
  mf=8;
  console.log("hiiii")
  let inp=`<label>Enter the mass of product<input onChange="kg()" type="number" id="mass">(kg)</label>`
  document.querySelector(".input").innerHTML=inp

}