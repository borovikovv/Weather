import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import './form.css';
    class FindCityForm extends Component {

        render() {
            return(
                    <form onSubmit={this.props.handleSubmit}>
                        <Field 
                            className='form-input' 
                            placeholder="...write city" 
                            component={'input'}
                            name={'cityName'}>
                        </Field>
                        <button className="form-btn btn btn-primary">find</button>
                    </form>
            )
        }
    }

let FindReduxForm = reduxForm({
    form: 'cityName',
})(FindCityForm)

  
export default FindReduxForm;