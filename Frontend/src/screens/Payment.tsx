import React, { useState } from 'react'

const Payment = () => {
  const [amount,setamount]=useState("");
  const [note,setnote]=useState("");
  const [category,setcategory]=useState("");

  const addExpense=async()=>{
    const res=await fetch('/expenses/add_expense',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({amount,category,note})
    });
    const data=await res.json();
    console.log(data);
    setamount("");
    setcategory("");
    setnote("");

  }

  return (
    <div>Payment

      <input type='number' placeholder='Input the expense' value={amount} onChange={(e)=>setamount(e.target.value)}/>
      <input type='text' placeholder='category' value={category} onChange={(e)=>setcategory(e.target.value)}/>
      <input type='text' placeholder='Note' value={note} onChange={(e)=>setnote(e.target.value)}/>
      <button onClick={addExpense}>Add expense</button>

    </div>
  )
}

export default Payment