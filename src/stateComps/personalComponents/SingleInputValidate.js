import React from 'react';
import {
	 Text, 
	//  useFieldApi, 
	//  useFormApi, 
	 useFieldState 
	} from 'informed';

export const MyInput = () => {
	const fieldState = useFieldState("number");
	// const fieldApi = useFieldApi('number');
	// const formApi = useFormApi()
	

	const phoneExp = new RegExp(/^(\+[1])\s?(\(\d{3}\))\s?(\d{3})-?(\d{4})$/);
	

	const validateNumber = value => {
		// Just a basic RegExp for now
		// const phoneExp = new RegExp(/^(\+|1|)?\s?(\d{1,3})\s?(\d{0,3})-?(\d{0,4})$/);

		// Chaining ternary expressions... Probably shouldn't do this, I just wanted to see if i could
		return !value || value.length < 10 ? 'Phone number must be 10 digits' : 
    value && value.length > 15 ? 'Phone number is too long, please check for extra characters' :
		!value.match(phoneExp) ? 'Number must match format!' : undefined;
	}

	const onKeyDown = (e) => {
		// I can use the positionStart and positionEnd values of the cursor to compare against the character in the position of the character in the input string.
		// Then use the 
		let positionStart = e.target.selectionStart;
		let positionEnd = e.target.selectionEnd;
		let key = e.keyCode;
		let string = e.target.value

		console.log(positionStart)
		console.log(positionEnd)

		
		if(key === 8 && string.slice(-1) === '/') {  // 46 === delete
			 e.target.value = string.substring(0, string.length - 1);
			 key = undefined
			 e.preventDefault();
		}
	}

		// const keyUp = e => {
		// 	let thing = e.target.value
		// 	// console.log('Keyup Selection Start: ' + e.target.selectionStart)
		// 	// console.log('Keyup Selection End: ' + e.target.selectionEnd)
		// }



	// Alright, lets try this input masking nonsense again, finally!
	const mask = (value) => {
		// debugger
		if (value == null) return { offset: 1, value };
		
		// const captureGroups = new RegExp(/^(\+)([1])(\s)(\()(\d{1,3})(\))(\s)(\d{1,3})(-)(\d{1,4})$/);

		// Individual Groups
		// ^(\+)   ([1])   (\s)   (\()   (\d{1,3})   (\))   (\s)   (\d{1,3})   (-)   (\d{1,4})

		// const testString = value
		// const testMatch = testString.match(captureGroups)

		// if (testMatch) {
		// 	testMatch.forEach(match => console.log(match))
		// }

		// strip off delimeters that do not match the regex (digits, specified literal characters)
		const stripDelim = value.replace(/[\D]/g, '')
		// const stripDelim = value
		// const stripDelim = value.replace(/^([+])(1{1})(\s{1})(\({1})([\d]{1,3})(\){1})(\s{1})([\d]{1,3})(\-{1})([\d]{1,4})$/, '')
		
		// const stripDelim = value.replace(/^([^+])([^1])([^\s])([^(])([\D]{3})([^)])([^\s])([\D]{3})([^-])([\D]{4})$/, '')
		// const stripDelim = value.replace(/^[^+][^1][^\s][^(][\D]{3}[^)][^\s][\D]{3}[^-][\D]{4}$/, '')
		// console.log('value')
		// console.log(value)

		// console.log('value match')
		// let matchGroups = value.match(captureGroups)
		// console.log(matchGroups)
		// ...matchGroups.forEach(group => { console.log(group)})

		// console.log('--------stripping--------------')
		// console.log(stripDelim)
		// console.log('--------stripping--------------')
		// debugger
		// Offset may not be needed yet, but we'll see
		let offset = 0;
		// Split the string into individual characters
		let arr = stripDelim.split('')


		// If the first character in the array is defined, is not +, place a + at the start
		if (arr[0] && arr[0] !== '+') {
			arr.unshift('+')
		}

		// if (arr[0]) {
		// 	if (arr[0] !== '+') {
		// 		return arr[0].replace(/[^+]/, '')
		// 	}
		// }

		// Maybe I can input this logic to assess and replace dynamically?

		// if (arr[0]) {
		// 	console.log(arr)
		// 	if (arr[0] === '1') {
		// 		arr.unshift('+')
		// 	} else if (arr[0] !== '+') {
		// 			arr[0].replace(/[^+]/, '')
		// 	}
		// }

		// if the second character is defined and is not a 1, insert a 1 into that position
		if (arr[1] && arr[1] !== '1') {
			arr.splice(1, 0, '1')
		}

		// if (arr[0]) {
		// 	if (arr[0] === '1') {
		// 		return arr.unshift('+')
		// 	} else if (arr[0] !== '+') {
		// 		return arr[0].replace(/[^+]/, '')
		// 	}
		// }

		//if the third character is defined, and is not an empty white space, insert the whitespace at this position 
		if (arr[2] && arr[2] !== ' ') {
			arr.splice(2, 0, ' ')
		}

		//if the fourth character is defined, and is not a(, insert the ) at this position
		if (arr[3] && arr[3] !== '(') {
			arr.splice(3, 0, '(')
		}

		//if the eighth character is defined, and is not a ), insert the ) at this position
		if (arr[7] && arr[7] !== ')') {
			arr.splice(7, 0, ')')
		}

		//if the ninth character is defined, and is not a ' ', insert the ' ' at this position
		if (arr[8] && arr[8] !== ' ') {
			arr.splice(8, 0, ' ')
		}

		//if the thirteenth character is defined, and is not a -, insert the - at this position
		if (arr[12] && arr[12] !== '-') {
			arr.splice(12, 0, '-')
		}

	
	// declare a variable as 'output' in which we run a join on the array, to change it back into a string, passing in '' as an argument to remove any character-based delimeters
		let output = arr.join('')
		// console.log(output)	
			// console.log('End function value');
			// console.log(output)
		// return value as the output variable
		return { value: output, offset }
	};

	

	return(
		<>
		<label>
			Phone#:
			<Text 
				field="number" 
				validateOnBlur
				validate={validateNumber}
				maxLength="17"
				// value={!value && value !== 0 ? '' : value}
				// onKeyPress={checkKey}
				onKeyDown={onKeyDown}
				// onKeyUp={keyUp}
				maskWithCursorOffset={mask}
				// maintainCursor
				style={fieldState.error ? { boxShadow: '0px 0px 5px 2px var(--grapefruit)' } : null}
			/>
		</label>
		{fieldState.error ? (
			<small style={{ color: 'var(--aether)' }}>{fieldState.error}</small>
		 ) : null}
		 </>
	);

};