import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form'
import './form.css';

const onSubmit = (formData) => {
   console.log(formData); 
};

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

const ViewForm = () => {
    return(
        <div>
            <h1 className="form-header"> Find city : </h1>
            <FindReduxForm onSubmit={ onSubmit } />
        </div>
    )
}
  
export default ViewForm;