import React from 'react';
import { Text, useFieldApi, useFormApi } from 'informed';

export const MyInput = () => {
	// const fieldApi = useFieldApi("number");
	const fieldApi = useFieldApi('number');
	const formApi = useFormApi()
	

	const phoneExp = new RegExp(/^(\+[1])?\s?(\d{1,3})\s?(\d{0,3})-?(\d{0,4})$/);

	const validateNumber = value => {
		// Just a basic RegExp for now
		// const phoneExp = new RegExp(/^(\+|1|)?\s?(\d{1,3})\s?(\d{0,3})-?(\d{0,4})$/);
		console.log(fieldApi.getError())
		console.log(formApi.getError('number'))

		// Chaining ternary expressions... Probably shouldn't do this, I just wanted to see if i could
		return !value || value.length < 10 ? 'Phone number must be 10 digits' : 
		!value.match(phoneExp) ? 'Number must match format!' : undefined
	}

	const onKeyDown = (e) => {
		
		let key = e.keyCode
		// console.log('Keydown Selection Start: ' + e.target.selectionStart)
		// console.log('Keydown Selection End: ' + e.target.selectionEnd)
		let string = e.target.value
		
		if(key === 8 && string.slice(-1) === '/') {  // 46 === delete
			e.target.value = string.substring(0, string.length - 1);
			key = undefined
			e.preventDefault();
	}
}

const keyUp = e => {
	let thing = e.target.value
	// console.log('Keyup Selection Start: ' + e.target.selectionStart)
	// console.log('Keyup Selection End: ' + e.target.selectionEnd)
}



	// Alright, lets try this input masking nonsense again, finally!
	const mask = (value) => {
		// debugger
		if (value == null) return { offset: 1, value };
		
		// // const sections = value.replace(/[^0-9/]/g, '').split(/(\/)/);

		// // // Fill in sections
		// // let offset = 0;
		// // let fragment = `${sections[0].slice(0, 2)}`;

		const stripDelim = value.replace(/\D|\+/g, '')

		let offset = 0;
		let arr = stripDelim.split('')
		console.log(arr)

		if (arr[0] && arr[0] !== '+') {
			arr.unshift('+')
		}

		// if (arr[3] )

	// 	if (value == null) return { offset: 0, value };
	// 	// // Get the length of the number, without whitespace
	// 	// let strLength = value.trim().length;
	// 	// // Check to see if backspace is allowed

		

	// 	if (match && match[1]) {
	// 		// const formatNum = `+${match[1]} (${match[2]}) ${match[3]}-${match[4]}`
	// }

	// debugger
	///////////////////////////////////////////////////////////////////////////////////////////////////////////
	// if (value == null) return { offset: 0, value };
	// // debugger
  // //.split(/(\/)/);     .split(/[(+|(|)|-|\s)]/);
	// const sections = value.replace(/[^0-9/]/g, '').split(/(\/)/);
	// if (sections.length > 1 && sections[0] === '') {
	// 	sections.shift()
	// }

  // // Fill in sections
  // let offset = 0;
	// let fragment = `${sections[0].slice(0, 1)}`;
	// // Then = `+#`

  // // Add + before the first section if it needs to be added
  // if (sections[0].length === 1 && sections[0] !== '/') {
  //   fragment = `/${fragment}`;
	// 	offset += 1;
	// 	// Now = `+#`  sections[0]sections[1]
	// }
	
	// // If sections[1] is defined, and isn't 1, add the 1 following the + and push the fragment to the end
	// if (sections[1] && sections[1].length === 1 && sections[1] !== 1) {
	// 	fragment = `/1${fragment}`;
	// 	offset += 1;
	// 	// Now = `+1 (|#...` sections[0]sections[1]sections[2]sections[3]
	// 	// /#/...
	// }

	// if (sections[2]) fragment = `${fragment}/${sections[2]}`
	// // /#/###

  
	// if (sections[4]) fragment = `${fragment}${sections[3].slice(0, 3)}`;
	// // /#//###...
	// if (sections[4] && sections[4].length === 3 && sections[5] !== '/') {
	// 	fragment = `${fragment}/`
	// 	offset += 1;
	// 	// /#//###/[6]
	// }

	// if (sections[6] && sections[6] !== '/') {
	// 	fragment = `${fragment}/`
	// 	offset += 1;
	// 	// /#//###//[7]
	// }

	// if (sections[7]) fragment = `${fragment}${sections[7].slice(0, 3)}`;
	// // /#//###//{3}
	
	// if (sections[7] && sections[7].length === 3 && sections[8] !== '/') {
	// 	fragment = `${fragment}/`
	// 	offset += 1;
	// 	// /#//###//###/[9]
	// }

	// if (sections[9]) fragment = `${fragment}${sections[9].slice(0, 4)}`
	// /#//###//###/####

	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


	// if (value === null) return { offset: 0, value };

  // Take the current value and blow it into sections
  // M M / D D / Y Y Y Y ------> [ M M, /, D D, /, Y Y Y Y ]
  // M / D D / Y Y Y Y   ------> [ M, /, D D, /, Y Y Y Y ]
  // M                   ------> [ M ]
  // M M                 ------> [ M M ]
	// / D D / Y Y Y Y     ------> [ /, D D, /, Y Y Y Y ]
	//////////////////////.replace(/[^0-9]/g, '').split(/(\/)/);
  // const sections = value.replace(/[^0-9/]/g, '').split(/(\/)/);

  // // Fill in sections
  // let offset = 0;
  // let fragment = `${sections[0].slice(0, 2)}`;

  // // Add slash after first section if it needs to be added
  // if (sections[0].length === 2 && sections[1] !== '/') {
  //   fragment = `${fragment}/`;
	// 	offset += 1;
  // }

  // // Add next section
  // if (sections[1]) fragment = `${fragment}${sections[1]}`;

  // // Add next section
  // if (sections[2]) fragment = `${fragment}${sections[2].slice(0, 2)}`;

  // // Add slash after third section if it needs to be added
  // if (sections[2] && sections[2].length === 2 && sections[3] !== '/') {
  //   fragment = `${fragment}/`;
  //   offset += 1;
  // }

  // // Add next section
  // if (sections[3]) fragment = `${fragment}${sections[3]}`;

  // // Add next section
  // if (sections[4]) fragment = `${fragment}${sections[4]}`;

  // return { value: fragment, offset };
  let output = arr.join('')
  console.log(output)
	return { value: output, offset }
	};

	return(
		<label>
			Phone#:
			<Text 
				field="number" 
				validate={validateNumber}
				maxLength="18"
				// value={!value && value !== 0 ? '' : value}
				// onKeyPress={checkKey}
				onKeyDown={onKeyDown}
				onKeyUp={keyUp}
				maskWithCursorOffset={mask}
				// maintainCursor
			/>
			{fieldApi.error ? (
        <small style={{ color: 'var(--aether)' }}>{fieldApi.error}</small>
      ) : null}
		</label>
	);

};