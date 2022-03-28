import { useState, useEffect } from 'react';
const CurrencyChange = (props) => {
    
    return (
        <div className='container mt-5'>
            <div className='button-layout'>
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu" data-bs-toggle="dropdown" aria-expanded="false">
                    Valuta
                </button>
                <ul className='dropdown-menu' aria-labelledby='dropdownMenu'>
                    <li><button onClick={(e) =>props.onCurrencyChange(e.target.value)} className='dropdown-item' type='button' value='sek'>SEK</button></li>
                    <li><button onClick={(e) =>props.onCurrencyChange(e.target.value)} className='dropdown-item' type='button' value='eur'>EUR</button></li>
                </ul>
            </div>
        </div>
    );
};

export default CurrencyChange;