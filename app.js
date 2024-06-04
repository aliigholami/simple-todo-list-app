const input=document.getElementById('input');
const btn=document.getElementById('btn');
const olist=document.getElementById('olist');
let i=0;
btn.addEventListener('click', ()=>{
    const task=document.createElement('li');
    task.innerHTML=input.value+`<div id='removebtn${i}' style="border: solid black 1px; display: flex; align-items:center; justify-content:center; border-radius:.5rem;">&#x274C</div>`;
    olist.appendChild(task);
    const removebtn=document.getElementById(`removebtn${i}`);
    removebtn.addEventListener('click', ()=>{
        olist.removeChild(task);
    })
    i++;
})
