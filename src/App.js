import React from 'react';
import {Header} from './components/Header';
import {Balance} from './components/Balance';
import {IncomeExpenses} from './components/IncomeExpenses';
import {TransactionList} from './components/TransactionList';
import {AddTransaction} from './components/AddTransaction';
import{GlobalProvider}from'./context/GlobalState';
import{Navbar} from './components/Navbar';
import{Route,Routes}from"react-router-dom";
import{About} from "./components/pages/About";
import{ExpenseTracker} from "./components/pages/ExpenseTracker";



import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Navbar />
      <Routes>
       
        <Route path="/about" element={<About />}/>
        <Route path="/services" element={<ExpenseTracker/>} />

      </Routes>
     <Header/>
     <div className="container">
      <Balance />
      <IncomeExpenses/>
      <TransactionList />
      <AddTransaction />
     </div>
    </GlobalProvider>
  );
}

export default App;
