import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import '../App.css'

const Currency = () => {
    const { dispatch } = useContext(AppContext);
    const backgroundColor = 'lightGreen';
    const textColor = 'white';
    const outlineStyle = 'none';
    const border = '0px'

    const changeLocation = (val) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val,
        })
    }


    return (
        <div className='alert alert-secondary'>
            <div style={{ 'color': "white", 'backgroundColor': backgroundColor, 'background': backgroundColor }}> Currency ({
                <select classNamePrefix="an-simple-select" style={{ 'color': "white", 'backgroundColor': backgroundColor, 'outline': outlineStyle, 'background': backgroundColor, 'border': "0px" }} name="select" id="select" onChange={event => changeLocation(event.target.value)}>texto
                    <option style={{ 'backgroundColor': backgroundColor }} value="$">$ Dollar</option>
                    <option selected style={{ 'backgroundColor': backgroundColor }} value="£">£ Pound</option>
                    <option style={{ 'backgroundColor': backgroundColor }} value="€">€ Euro</option>
                    <option style={{ 'backgroundColor': backgroundColor }} value="₹">₹ Ruppee</option>
                </select>
            })
            </div >
        </div >
    );
};

export default Currency;