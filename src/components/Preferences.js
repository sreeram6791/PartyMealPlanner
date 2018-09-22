import React from 'react';
import Select from 'react-select';
import { cusines } from '../data/Cusines';

const options = cusines.map(cusine => ({ value: cusine, label: cusine }));

export class Preferences extends React.Component {
    state = {
        selectedOption: null,
    };

    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
    };

    render() {
        const { selectedOption } = this.state;

        return (
            <Select
                isMulti
                name="preferences"
                onChange={this.handleChange}
                options={options}
                className="basic-multi-select"
                classNamePrefix="select"
            />
        );
    }
}