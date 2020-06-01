import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
// import Typography from "@material-ui/core/Typography";
import {
	Slider,
	FilledInput,
	FormHelperText,
	FormControl,
	InputLabel,
} from "@material-ui/core";

import { useField } from 'informed';
// import "typeface-roboto";

const useStyles = makeStyles((theme) => ({
  root: {
    // width: 500,
    margin: "0 auto",
		// marginTop: theme.spacing(2),
		color: "",
		height: "80%",
	},
  margin: {
    height: theme.spacing(3),
	},
	container: {
		backgroundColor: "",
  	// marginTop: "5vh",
  	// padding: "3rem",
			bordeRadius: "1rem",
			// height: "calc()",
	},
	slider: {
		padding: "2rem",
		track: {
			color: 'var(--aether)',
		},
		// color: "var(--aether)",
	},	
	sliderOne: {
		marginTop: "3rem",
	}
}));

function valuetext(value) {
  return `${value}%`;
}

const validate = value => {
	return !value ? 'You can not have a zero percent spread' : undefined
}

 const sumSliders = (formState) => {
    return Object.values(formState.values).reduce((accu, curr) => accu + curr, 0)
	}
	

export const InformedLinkedSlider = ({
	field,
	formApi,
	formState,
	onChange,
	onBlur,
	...otherProps
}) =>	{
	
	const { fieldState, fieldApi, render } = useField({
		validate,
		field,
		sumSliders,
		...otherProps
	});
	// debugger;
	const { value } = fieldState;
	const { setValue, setTouched, getValue, getFieldState } = fieldApi;
	const classes = useStyles();

	// Hook to create a local state and set it based on the slider value
	// invoked through the onChange, at this time

	const [slidePer, setPer] = useState(0);

	// const localSum = (formState) => {
	// const [sliderVal, setSum] = useState(0);
	// }

	// Work on this more robust one later
	// const sliderValues = (initialPer = 0) => {
	// 	const [slidePer, setPer] = useState(initialPer);
	// 	const resetSlider = useCallBack(() => {
	// 		setPer(initialPer)
	// 	}, [initialPer])
	// 	return {
	// 		slidePer,
	// 		setPer
	// 	}
	// }

	// I will need to use the hook to create a piece of local state within the component to work with
  

  return render(
		
    <>
		{/* {console.log(formState)} */}
		{/* {console.log(slidePer)} */}
      <div className={`${classes.root} ${classes.container}`}>
				<label>Slide {slidePer}</label>

				<label
					style={sumSliders(formState) > 100 ? {color: 'var(--grapefruit)', backgroundColor: 'var(--midnight)'} : null }
				>
					Sum {sumSliders(formState)}
				</label>

        <Slider
					id={field}
					field={field}
					orientation="vertical"
					defaultValue={25}
					value={value ? value : "0"}
					onChange={(e, slideVal) => {
						setValue(slideVal);
						
						console.log(formState.values[field])
						setPer(slideVal)
						// sliderValues() // use later
						sumSliders(formState)
						onChange && onChange(e);
					}}
					onBlur={e => {
						setTouched(true);
						onBlur && onBlur(e);
					}}
					{...otherProps}
          getAriaValueText={valuetext}
          aria-labelledby="discrete-slider-always"
          step={1}
          valueLabelDisplay="on"
					className="slider" // This does nothing, at the moment
        />
      </div>
    </>
  );
}