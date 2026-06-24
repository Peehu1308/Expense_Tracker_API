import React, { useState } from 'react'

const History = () => {

  const [expenses,setexpenses]=React.useState([]);
  const [activeTab,setactivetab]=useState("All");
  const getExpenses=async()=>{
    const res=await fetch('/expenses/get_expenses');
    const data=await res.json();
    console.log(data.data);
    setexpenses(data.data);
  };

  const filteredExpenses=activeTab==='All'
  ?expenses:expenses.filter((expense)=>expense.category===activeTab);

  const tabs = ['All', 'Food', 'Misc', 'Rent', 'Clothing', 'Books'];

  const sum=filteredExpenses.reduce((acc,expense)=>acc+expense.amount,0);
  return (
    <div>History

      <div className='flex gap-4 mb-4'> 
        {tabs.map((tab)=>(
          <button
          key={tab}
          onClick={()=>setactivetab(tab)}
          className={`px-3 py-1 rouonded ${
            activeTab===tab?'bg-blue-500 text-white':'bg-gray-200'
          }`}>
            {tab}
          </button>
        ))}

      </div>
      {filteredExpenses.length>0?(
        filteredExpenses.map((expense)=>(
          <div key={expense._id} className='flex flex-row gap-3'>
            <div key={expense._id} className="flex flex-row gap-3">
      <p>{expense.category}</p>
      <p>{expense.amount}</p>
      <p>{expense.note}</p>
    </div>
            </div>
        ))
      ):(
<p>No expense</p>
      )
}
  <p>Total expense {sum}</p>
      <button onClick={getExpenses}>Get Expenses</button>
    </div>
  )
}

export default History