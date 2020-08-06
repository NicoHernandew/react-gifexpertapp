import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategories = ({fnSetCategoria}) => {

    const [inputValue, setInputValue] = useState(''); 

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim().length > 2){
            fnSetCategoria(cat=>[inputValue,...cat]);
            setInputValue('');
        }
    //console.log('Submit hecho');
    }
    return (
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                />
            </form>
    )
}

AddCategories.propTypes = {
    fnSetCategoria : PropTypes.func.isRequired
}

export default AddCategories;