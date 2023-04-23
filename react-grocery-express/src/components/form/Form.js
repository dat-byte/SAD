import React from 'react'
import styled from 'styled-components'
import './Form.css'

const FormInput = styled.input.attrs(props => ({
    placeholder: props.placeholder
}))`
    padding: 15px;
    margin: 10px 0px;
    width: 96%;
`;

const Form = ({placeholder, value, name, onChange}) => {
    return (
        <div className='info-form'>
            <form>
                <FormInput name={name} onChange={onChange} placeholder={placeholder} value={value} required/>
            </form>
        </div>
    )
}

export default Form
