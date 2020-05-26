import React from 'react';
import { Text, useForm } from 'informed';

const validate = value => {
	if (!value || value.length < 5) return 'Value must be at least 5 characters in length';
};

const onSubmit  = values => window.alert(`Form successfully submitted with ${JSON.stringify(values)}`);

export const UseFormHook = () => {
	const { formController, formState, render } = useForm({
		onSubmit
	});

	return render(
		<form
			onReset={formController.reset}
			onSubmit={formController.submitForm}
			onKeyDown={formController.keyDown}>
			
			<div className="form-left">
				<label>
					First Name:
					<Text field="name" validate ={validate} />
					<br/>
					<small style={{ color: 'var(--aether)' }}>{ formState.errors.name }</small>
				</label>

				<button type="submit">Submit</button>
			</div>

			<div className="form-right">
				<pre>
					<code>
						{JSON.stringify(formState, null, 2)}
					</code>
				</pre>
			</div>

		</form>
	);
}