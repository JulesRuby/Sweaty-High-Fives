import React from 'react';
import { BasicText, asField } from 'informed';

// const validate = value => {
// 	return !value || value.length < 5
// 		? 'Field must be at least five characters'
// 		: undefined;
// };
// export const MyField = asField(Field)

export const MyField = asField(({ fieldState, ...props }) => {
	// const validate = value => {
	// 	return !value || value.length < 5
	// 		? 'Field must be at least five characters'
	// 		: undefined;
	// };


	return(
		<>
			<label htmlFor="number">
				Number:
				<BasicText
					fieldState={fieldState}
					{...props}
					style={fieldState.error ? { border: 'solid 2px var(--midnight)' } : null}
					field="number" 
					id="number" 
					// validateOnBlur={validate}
				/>

				{fieldState.error ? (
					<small style={{ color: 'var(--aether)' }}>{ fieldState.error }</small>
				) : null}
			</label>
		</>
	);
});