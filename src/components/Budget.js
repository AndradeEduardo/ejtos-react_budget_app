import React, { useContext } from 'react'; //This is the hook
// React is the defaul export from react; useContext is a named export from react
import { AppContext } from '../context/AppContext'; //This is the app context
const Budget = () => {
    const { budget, currency } = useContext(AppContext);//pegando dois objetos do AppContext
    // currenncy já foi enganchada por mim
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}{budget}</span>
        </div>
    );
};
export default Budget;
