import React, { useRef } from 'react';
import { Form, Text, useFormApi } from 'informed';


export const ApiForm = () => {
	
	// React useRef
	const apiRef=useRef();

	// Dumb validation and submission rules
	const validate = value => {
    if (!value || value.length < 5) return 'Value must be at least 5 characters in length';
  }

	const submit  = values => window.alert(`Form successfully submitted with ${JSON.stringify(values)}`);


	// making use of the apiRef
	const handleClick = () => {
		console.log(apiRef.current)
		console.log(apiRef.current.getState());
		console.log(validate)
		console.log(apiRef.current.getValue('name'))

		const field = apiRef.current.getValue('name')
		console.log(field)
	
		console.log(apiRef.current.getState());
		console.log(apiRef)
	}

	// USING FORM API
	const NameButton = () => {
		const formApi = useFormApi();
		return (
			<button type="button" onClick={() => formApi.setValue("name", 'Dougie')}>MAKE HIM DOUGIE</button>
		)
	}

	// const onChange = (e) => {
	// 	const field = apiRef.current.getValue('name')
	// 	apiRef.current.setValue('name', field);
	// 	console.log(apiRef.current.getState())
	// }
	


	return (
		<>
		<h1>using an apiref</h1>
		<Form onSubmit={submit} autoComplete="off" apiRef={apiRef}> 
			
					<div className="form-left">
						<label>
							First Name:
							<Text field="name" validate={validate} />
						</label>
						<NameButton />
					</div>
					
					{/* <div className="form-right">
              <label>Form State:</label>
              <pre>
              <code>{JSON.stringify(apiRef.formState, null, 2)}</code>
              </pre>
          </div> */}
					
		</Form>
		<button type="submit" onClick={handleClick}>Submit + Log</button>
		</>
	);

};