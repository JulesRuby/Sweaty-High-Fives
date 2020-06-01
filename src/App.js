import React from 'react';
// Assets
import Ellipse from './Ellipse.svg';
// Informed
import { Form, Text, FormState } from 'informed';
// CSS
import './App.css';
// Components
import { 
  // HOCForm, 
  // HookForm, 
  // ApiForm, 
  // UseFormHook, 
  // CustomInputErr
 } from './stateComps';

 import {
   MyInput,
  //  AdvancedInput,
  //  InformedLinkedSlider,
   InformedPhoneField,
   InformedLinkedSlider,
   InformedLinkedSliders,
 } from './stateComps/personalComponents'



function App() {

  // const validate = value => {
  //   if (!value || value.length < 5) return 'Value must be at least 5 characters in length';
  // }

  // const validateForm = (values, errors) => {
  //   console.log(errors)
	// 	return errors ? 'Please fill the form out correctly' : undefined
	// }

  // const submit  = values => window.alert(`Form successfully submitted with ${JSON.stringify(values)}`);

  // Wrote a reducer function to map an array from the values of the formState.values object, interate through them, and return the sum, which I use to output on the side.

  // This is mostly to test my understanding for discovering a way to access and manipulate the data from the slider. I should set to work on researching and creating a hook to work with this, now that I know that my idea can be used, to some degree

  // I will need to use the hook to create a piece of local state within the component to work with
  
  const sumSliders = (formState) => {
    return Object.values(formState.values).reduce((accu, curr) => accu + curr, 0)
  }


  return (
    <div className="App">
      <img src={ Ellipse } className="App-logo" alt="Heart" />


      {/* RENDER PROPS */}
      {/* <h1>formState through render props</h1>
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
      </Form> */}


      {/* HOC */}
{/* 
      <h1>formState through hoc</h1>
      <HOCForm /> */}

      {/* HOOKS */}

      {/* <h1>formState through hooks</h1>
      <HookForm /> */}

      {/* BAD API EXAMPLE */}
      {/* <ApiForm /> */}

      {/* useForm Hook */}
      {/* <h1>useform hook</h1>
      <UseFormHook /> */}


      {/* Custom Error Input Component */}
      {/* <h1>Custom error input text</h1>
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
      </Form> */}


      <h1>Simple Form Validation</h1>
      <Form autoComplete="off">

        <div className="form-left">
          <label>
            {/* First Name:
            <Text field="name" /> */}
          </label>
          <MyInput />
          <InformedPhoneField field="phone-number"/>
          <button type="submit">Submit</button>
        </div>

        <div className="form-right">
          <label>Form State:</label>
          <FormState />
        </div>
            
      </Form>

      {/* <h1>Advanced Input Integration</h1>
      <Form autoComplete="off">

        <div className="form-left">
          <label>
            First Name:
            <Text field="name" />
          </label> */}
          {/* <MyInput /> */}
          {/* <AdvancedInput field="number" />
          <InformedTextField field="phone"/>
          <button type="submit">Submit</button>
        </div>

        <div className="form-right">
          <label>Form State:</label>
          <FormState />
        </div>
            
      </Form> */}

      <h1>Linked valued slider | max sum</h1>
      <Form>
       {({ formState, formApi }) => (
         <>
        <div className="form-left">
          <div className="form-left-sliders">
           
            <InformedLinkedSlider field="sliders-from-appjs-1" formState={formState} formApi={formApi} />
            
            <InformedLinkedSlider field="sliders-from-appjs-2" formState={formState} formApi={formApi}/>

            <InformedLinkedSlider field="sliders-from-appjs-3" formState={formState} formApi={formApi}/>
          {/* <InformedLinkedSlider /> */}
          </div>
          <button type="submit" className="slideSubmit">Submit</button>
        </div>

        <div className="form-right">
          <FormState />
       <label>Sum: {sumSliders(formState)}</label>
          <pre>
            <code>
              {JSON.stringify(formState.values, null, 2)}
            </code>
          </pre>

        </div>
        </>
        )}
      </Form>

      {/* <h1>Relative valued slider | max sum</h1>
      <Form>
       {({ formState, formApi }) => (
         <>
        <div className="form-left">
          <div className="form-left-sliders">
           
            <InformedLinkedSliders formState={formState} formApi={formApi} field="[yawp]"/>
            
          </div>
          <button type="submit" className="slideSubmit">Submit</button>
        </div>

        <div className="form-right">
          <FormState />
       <label>Sum: {sumSliders(formState)}</label>
          <pre>
            <code>
              {JSON.stringify(formState.values, null, 2)}
            </code>
          </pre>

        </div>
        </>
        )}
      </Form> */}
    </div>
  );
}

export default App;


