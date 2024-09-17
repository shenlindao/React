import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Degrees() {
    const [celsius, setCelsius] = useState('');
    const [fahrenheit, setFahrenheit] = useState('');

    function changeCelsius(e) {
        const value = e.target.value;
        if (value === '') {
            setCelsius('');
            setFahrenheit('');
        } else {
            const parsedValue = parseFloat(value);
            if (!isNaN(parsedValue)) {
                setCelsius(parsedValue);
                setFahrenheit((parsedValue * 9) / 5 + 32);
            }
        }
    }

    function changeFahrenheit(e) {
        const value = e.target.value;
        if (value === '') {
            setFahrenheit('');
            setCelsius('');
        } else {
            const parsedValue = parseFloat(value);
            if (!isNaN(parsedValue)) {
                setFahrenheit(parsedValue);
                setCelsius(((parsedValue - 32) * 5) / 9);
            }
        }
    }

    return (
        <Box
            component="form"
            sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
            noValidate
            autoComplete="off"
        >
            <TextField
                id="celsius"
                label="Celsius"
                variant="filled"
                value={celsius}
                onChange={changeCelsius}
                color="secondary"
                focused
            />
            <TextField
                id="fahrenheit"
                label="Fahrenheit"
                variant="filled"
                value={fahrenheit}
                onChange={changeFahrenheit}
                color="success"
                focused
            />
        </Box>
    );
}
