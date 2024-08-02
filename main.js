let inpu=document.getElementById('inpu')
let inpu1=document.getElementById('inpu1')
let two=document.getElementById('two')

inpu.addEventListener('change',()=>{
    inpu.style.backgroundColor=inpu.value
})

inpu1.addEventListener('change',()=>{
    two.style.backgroundColor=inpu1.value
})

