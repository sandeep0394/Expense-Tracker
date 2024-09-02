import React from 'react'
import {useState,useContext} from 'react';
export const ExpenseContext=React.createContext();
export const ExpenseContextProvider=({children})=>{
    const [income,setIncome]=useState(Number(0));
    const [expense,setExpense]=useState(Number(0));
    const [history,setHistory]=useState([]);
    const [text,setText]=useState("");
    const add=(item)=>{
        setIncome(Number(income)+Number(item));
        let obj={
            text:text,
            cost:item
        }
        setHistory([...history,obj]);
        setText("");
    }
    const sub=(item)=>{
        setExpense(Number(expense)+Number(item));
        let obj={
            text:text,
            cost:item
        }
        setHistory([...history,obj]);
    }
    const ONCHANGE=(text)=>{
        setText(text);
    }
    const clear=()=>{
        setIncome(0);
        setExpense(0);
        setHistory([]);
        setText("");
    }
    return <ExpenseContext.Provider value={{income,expense,history,text,ONCHANGE,add,sub,clear}}>
        {children}
    </ExpenseContext.Provider>
}
export const useExpense=()=>{
    return useContext(ExpenseContext);
}