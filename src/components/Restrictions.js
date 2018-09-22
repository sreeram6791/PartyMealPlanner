import React from 'react';
import AsyncSelect from 'react-select/lib/Async';
import { ingredients } from '../data/Ingredients';

const options = ingredients.map(ingredient => ({ value: ingredient, label: ingredient }));

const filterOptions = (inputValue) =>
    options.filter(option =>
        option.label.toLowerCase().includes(inputValue.toLowerCase())
    );

const loadOptions = (inputValue, callback) => {
    setTimeout(() => {
        callback(filterOptions(inputValue));
    }, 1);
};

export class Restrictions extends React.Component {
    state = {
        selectedOption: null,
        inputValue: ''
    };

    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
    };

    handleInputChange = (newValue) => {
        const inputValue = newValue.replace(/\W/g, '');
        this.setState({ inputValue });

        return inputValue;
    };

    render() {
        const { selectedOption } = this.state;

        return (
            <AsyncSelect
                cacheOptions
                isMulti
                loadOptions={loadOptions}
                name="restrictions"
                onInputChange={this.handleInputChange}
                onChange={this.handleChange}
                options={options}
                className="basic-multi-select"
                classNamePrefix="select"
            />
        );
    }
}