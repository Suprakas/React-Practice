import './App.css'
import Counter from "./components/Counter";

function App() {
  return (
   <>
   <h1>
    useReducer demo
   </h1>
   <Counter />
   </>
  )
}

export default App


/*
useReducer() -> useReducer hook is a react hook to manage complex state logic by using reducer functions 
and actions.

syntax : const [state, dispatch] = useReducer(reducer, initialState);

where, 
state -> current state
dispatch -> function to trigger updates
reducer -> logic function
initial state -> starting value

structure ->

const initialState = { count : 0 }; ---> Initial state declare

---> Reducer function creation ( A function that takes current state and actions and returns new state)

function reducer(state, action) {
switch(action.type){

case "INC":
  return {count: state.count + 1};
case "DEC":
  return {count: state.count - 1};
default:
  return state;
  }
}

---> calling diapatch actions

dispatch({type: "INC"});

*** Real life example ->

intialState = your bank balance
action = deposit/withdrawl
reducer = bank rules
dispatch = your request

*/