const outputElement = document.querySelector('#output');
const btnCopy = document.querySelector('#btnCopy');
const passwordLengthElement = document.querySelector('#length');
const numberElement= document.querySelector('#number');
const captitalElement= document.querySelector('#capital');
const smallElement = document.querySelector('#small');
const symbolElement = document.querySelector('#symbol');
const frm = document.querySelector('#frm');







btnCopy.addEventListener('click',async()=>{
    const pass= output.value;
    if(pass){
 await navigator.clipboard.writeText(pass);
 alert('copied to clipbord')
    }else{
        alert('there is no password')
    }
})



function generateRandomChar(min,max){
    const limit= max-min+1;
    return String.fromCharCode(Math.floor(Math.random()*limit)+min);

}
function captitalValue(){
    return generateRandomChar(65,90);
}
function smallValue(){
    return generateRandomChar(97,122);
}
function numberValue(){
    return generateRandomChar(48,57);
}
function symbolValue(){
   const symbols = '~!@#$%^&*()?/.><}{';
   return symbols[Math.floor(Math.random()*symbols.length)]
}

const functionArray =[
    {
        element:captitalElement,
        fun:captitalValue
    },
    {
        element:smallElement,
        fun:smallValue
    },
    {
        element:numberElement,
        fun:numberValue
    },
    {
        element:symbolElement,
        fun:symbolValue
     }

];

frm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const limit = passwordLengthElement.value;
    
    let generatedPassword= "";
    const funArray = functionArray.filter(({element})=>element?.checked); 

    for(i=0;i<limit;i++){
        const index = Math.floor(Math.random()*funArray.length);
        const letter =funArray[index].fun();
        generatedPassword+=letter;
    }
    outputElement.value=generatedPassword;
});

