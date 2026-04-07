import { useReducer } from 'react'
import  FormReducer, { initialState }  from '../reducers/FormReducer'

const FormComponent = () => {
    const [state, dispatch] = useReducer(FormReducer, initialState);

    function handleChange(e) {
        dispatch({
            type: "SET_FIELD",
            field: e.target.name,
            value: e.target.value,
        });
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (!state.email.includes("@")) {
            dispatch({
                type: "SET_ERROR",
                payload: "Invalid email",
            });
            return;
        }

        if(state.password.length < 6){
            dispatch({
                type: "SET_ERROR",
                payload: "Password must be at least 6 characters"
            });
            return;
        }

        dispatch({ type: "SET_SUCCESS", payload: "Login Successful"});

        dispatch({ type: "SET_ERROR", payload: "" });

        console.log("Form Data", state);
    }
    return (
        <form onSubmit={handleSubmit}>
            <h2>Login Form</h2>
            <input 
                name='username'
                placeholder='username'
                value={state.name}
                onChange={handleChange}
            />
            <input
                name='email'
                placeholder='Email'
                value={state.email}
                onChange={handleChange}
            />

            <input
                name='password'
                placeholder='password'
                value={state.password}
                onChange={handleChange}
            />

            {state.error && <p style={{ color: "red" }}>{state.error}</p>}
            {state.success && <p style={{ color: "green" }}>{state.success}</p>}

            <button type='submit' disabled={!state.email || !state.password}>Login</button>

            <button
                type='button'
                onClick={() => dispatch({ type: "RESET" })}
            >
                Reset
            </button>
        </form>
    )
}

export default FormComponent