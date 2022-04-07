var newArr=[]
function reload(){
    if(!localStorage.getItem('CashApp')){
        // var cash=[]
        // localStorage.setItem('CashApp',cash)
        elements=document.getElementById('element').innerText=""
        balance=document.getElementById('balance').innerText=0
    }
    else{
        newArr=JSON.parse(localStorage.getItem('CashApp'))
        elements=""
        elements=document.getElementById('element')
        elements.innerHTML=''
        balance=document.getElementById('balance')
        sum=0;
        for(let i=0; i<newArr.length; i++){
            let h6=document.createElement('h6')
            let span=document.createElement('span')
            let span2=document.createElement('span')
            span2.innerText=newArr[i].date
            h6.innerText=newArr[i].desc
            
            if(newArr[i].status=='deposit'){
                sum+=newArr[i].amount
                h6.className='alert alert-success d-flex justify-content-between'
                span.innerHTML="+"+newArr[i].amount+"&#2547"
            }
            else{
                sum-=newArr[i].amount
                h6.className='alert alert-danger d-flex justify-content-between'
                span.innerHTML="-"+newArr[i].amount+"&#2547"
            }
            h6.appendChild(span2)
            h6.appendChild(span)
            elements.appendChild(h6)
        }
        if(sum>0){
            balance.innerText="+"+sum
        }
        else{
            balance.innerText="-"+sum
        }
        
    }
}
reload()

function jomaKoro(){
    depositDescription=document.getElementById('depositDescription').value
    depositAmount=parseFloat(document.getElementById('depositAmount').value)
    if(depositDescription && depositAmount){
        obj={
            desc:depositDescription,
            amount:depositAmount,
            date: new Date().toDateString(),
            status:'deposit'
        }
        newArr.push(obj)
        
        localStorage.setItem('CashApp',JSON.stringify(newArr))
        document.getElementById('depositDescription').innerHTML=""
        depositAmount=""
        reload()
    }
    else{
        alert("please fill up all the filleds")
    }
}

function khoroch(){
    withdrawDescription=document.getElementById('withdrawDescription').value
    withdrawAmount=parseFloat(document.getElementById('withdrawAmount').value)
    if(withdrawDescription && withdrawAmount){
        obj={
            desc:withdrawDescription,
            amount:withdrawAmount,
            date: new Date().toDateString(),
            status:'withdraw'
        }
        newArr.push(obj)
        console.log(newArr)
        localStorage.setItem('CashApp',JSON.stringify(newArr))
        withdrawDescription=""
        withdrawAmount=""
        reload()
    }
    else{
        alert("please fill up all the filleds")
    }
}

function clearAll(){
    localStorage.removeItem('CashApp')
    newArr=[]
    reload()
    alert("Memeory Cleared Successfully")
}