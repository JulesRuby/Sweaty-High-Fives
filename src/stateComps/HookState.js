import React from 'react';
import { Form, Text, useFormState } from 'informed';



export function HookForm() {

	const validate = value => {
    if (!value || value.length < 5) return 'Value must be at least 5 characters in length';
  }

	const submit  = values => window.alert(`Form successfully submitted with ${JSON.stringify(values)}`);

	// HOOKS
  const HookState = () => {
    const formState = useFormState();
    return (
      <div className="form-right">
        <label>Form State:</label>
        <pre>
          <code>{JSON.stringify(formState, null, 2)}</code>
        </pre>
      </div>
    )
  }


	return(
		// <Form onSubmit={submit} autoComplete="off" onChange={formState => console.log(formState)}> 
		<Form onSubmit={submit} autoComplete="off"> 
						
			<>
				
				<div className="form-left">
					<label>
						First Name:
						<Text field="name" validate={validate} />
					</label>
					<button type="submit">Submit</button>
				</div>

				<HookState />

			</>
		</Form>
	);

};