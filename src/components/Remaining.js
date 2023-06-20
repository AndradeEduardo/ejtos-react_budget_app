
import React, { useContext } from 'react'; //importa o hook
import { AppContext } from '../context/AppContext'; //importa o AppContext
const Remaining = () => { // define uma função sem argumentos
    const { expenses, budget, currency } = useContext(AppContext); // pega os valores das 3 variáveis
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';
    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining: {currency}{budget - totalExpenses}</span>
        </div>
    );
};
export default Remaining;