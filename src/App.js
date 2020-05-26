import React from 'react';
// Assets
import Ellipse from './Ellipse.svg';
// Informed
import { Form, Text, FormState } from 'informed';
// CSS
import './App.css';
// Components
import { 
  HOCForm, 
  HookForm, 
  ApiForm, 
  UseFormHook, 
  CustomInputErr
 } from './stateComps';

 import {
   MyInput
 } from './stateComps/personalComponents'



function App() {

  const validate = value => {
    if (!value || value.length < 5) return 'Value must be at least 5 characters in length';
  }

  // const validateForm = (values, errors) => {
  //   console.log(errors)
	// 	return errors ? 'Please fill the form out correctly' : undefined
	// }

  const submit  = values => window.alert(`Form successfully submitted with ${JSON.stringify(values)}`);


  return (
    <div className="App">
      <img src={ Ellipse } className="App-logo" alt="Heart" />


{/* RENDER PROPS */}
      <h1>formState through render props</h1>
      <Form onSubmit={submit} autoComplete="off">
        {({ formState }) => ( 

          <>
            
            <div className="form-left">
              <label>
                First Name:
                <Text field="name" validate={validate}/>
              </label>
              <button type="submit">Submit</button>
            </div>

            <div className="form-right">
              <label>Form State:</label>
              <pre>
              <code>{JSON.stringify(formState, null, 2)}</code>
              </pre>
            </div>

         </>

        )}
      </Form>


{/* HOC */}

      <h1>formState through hoc</h1>
      <HOCForm />

{/* HOOKS */}

      <h1>formState through hooks</h1>
      <HookForm />

{/* BAD API EXAMPLE */}
      <ApiForm />

{/* useForm Hook */}
      <h1>useform hook</h1>
      <UseFormHook />


{/* Custom Error Input Component */}
      <h1>Custom error input text</h1>
      <Form>
          <div className="form-left">
            
          <label>
            First name:
            <CustomInputErr
              field="name"
              validate={validate}
              validateOnChange
              validateOnBlur
            />
          </label>
          <button type="submit">Submit</button>
        </div>
        <div className="form-right">
          <FormState />
        </div>
      </Form>


    <h1>Simple Form Validation</h1>
    <Form autoComplete="off">

      <div className="form-left">
        <label>
          First Name:
          <Text field="name" />
        </label>
        <MyInput />
        <button type="submit">Submit</button>
      </div>

      <div className="form-right">
        <label>Form State:</label>
        <FormState />
      </div>
          
    </Form>
    </div>
  );
}

export default App;


