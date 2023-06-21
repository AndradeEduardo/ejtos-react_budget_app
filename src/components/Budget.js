import React, { useContext } from 'react'; //This is the hook
// React is the defaul export from react; useContext is a named export from react
import { AppContext } from '../context/AppContext'; //This is the app context
const Budget = () => {
    const { dispatch, budget, currency, remaining } = useContext(AppContext);//pegando dois objetos do AppContext



    // currenncy já foi enganchada por mim
    const setBudget = (value) => {
        console.log(remaining)
        let updateValue = parseInt(value)
        updateValue = value - budget;
        console.log(updateValue);
        console.log(Math.abs(updateValue));
        if (Math.abs(updateValue) === 1) {
            updateValue = updateValue * 10
            updateValue = budget + updateValue
        }
        else {
            updateValue = parseInt(value)
        }
        dispatch({
            type: 'SET_BUDGET',
            payload: updateValue,
        });
        /*dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });*/
    };
    return (
        <div className='alert alert-secondary'>
            <span style={{ 'text-align': "right" }}>Budget: {currency}</span>
            <input
                type='number'
                name='Budget'
                id='Budget'
                value={budget}
                onChange={(event) => setBudget(event.target.value)}

            />
        </div>

    );
};
export default Budget;
