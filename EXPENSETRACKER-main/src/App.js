import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { ExpenseContext,ExpenseContextProvider,useExpense } from './expenseContext/ExpenseContext';
function App() {
  const[amount,setAmount]=useState();
  let a=useExpense();
  console.log(a);
  return (
    <center>
      <div className="App">
      <center><h2>Expense Tracker using Reactjs</h2></center>
      <div className='balance'>
        <b>YOUR BALANCE</b>
        <b className='balancemoney'>${a.income+a.expense}</b>
      </div>
      <div className='incexp'>
        <div className='income'>
          <b>Income</b>
          <b className='incomemoney'>${a.income}</b>
        </div>
        <div className='expense'>
          <b>Expense</b>
          <b className='expensemoney'>${a.expense}</b>
        </div>
      </div>
      <div className='history'>
        <b>History</b>
        <hr></hr>
        {a.history.map((eachitem)=>{
          return (
            <div className='historyitem'>
              <p>{eachitem.text}</p>
              <p>{eachitem.cost}</p>
            </div>
          )
        })}
      </div>
      <div>
        <p className='newtra'>Add New Transaction</p>
        <hr></hr>
        <div className='text'>
          <p><b>Text</b></p>
          <input onChange={(e)=>{a.ONCHANGE(e.target.value)}} type='text' placeholder='enter text...'/>
        </div>
        <div className='Amount'>
          <p><b>Amount</b>(Negative-expense,Positive-income)</p>
          <input value={amount} onChange={(e)=>{setAmount(e.target.value)}} type='number' placeholder='enter amount...'/>
          <button className='addtr' onClick={amount>0?()=>{a.add(amount)}:()=>{a.sub(amount)}}>Add Transaction</button>
        </div>
        <button onClick={()=>{a.clear()}} className='clear'>CLEAR ALL</button>
      </div>
    </div>
    </center>
  );
}

export default App;
