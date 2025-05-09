import React from "react";

import CounterButtons from "./CounterButtons";
import CounterComponent from "./CounterComponent";
import MessageDisplay from "./MessageDisplay";
import MessageUpdate from "./MessageUpdate";
import ThemeContainer from "./ThemeContainer";
import ThemeButton from "./ThemeButton";
import AuthStatus from "./AuthStatus";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import CounterDisplay from "../Components/CounterDisplay";


const Task1 = () => {
  return (
    <div style={{textAlign:"center"}}>
        <h1>Task1</h1>
      <h2>Introduction to Redux</h2>
      <p>
        Redux is a predictable state management library for JavaScript applications,
        commonly used with React. It helps organize and centralize application data,
        making state updates efficient and predictable.
      </p>
      <h3>Why is Redux Important?</h3>
      <ul style={{listStyleType:"none"}}>
        <li><strong>Centralized State:</strong> Keeps application state in a single store.</li>
        <li><strong>Predictability:</strong> Uses reducers to update state in an immutable way.</li>
        <li><strong>Efficient Data Flow:</strong> Eliminates prop drilling and simplifies component interactions.</li>
        <li><strong>Middleware Support:</strong> Handles async operations efficiently using Redux Thunk or Redux Saga.</li>
      </ul>
      <p>
        Redux improves **scalability and maintainability**, making complex state interactions more manageable.
      </p>
      <h1>Task2</h1>
      <p>npm install redux react-redux. installed</p>
      <h1>Task3 completed</h1>
     <p> Set up a basic Redux store with an initial state.</p>
     <p>A Basic Redux Store Created with Initial State</p>
     <h1>Task4 completed</h1>
     <p> Write simple action creators to increment and decrement 
     a counter</p>
     <p>A simple action creators to increment and decrement Created </p>
     <h1>Task5 completed</h1>
     <p> Reducers: Implement a reducer function to handle increment and 
     decrement actions.</p>
     <p>A Reducer Function Created to handle increment and 
     decrement actions. </p>
     <h1>Task6 completed</h1>
     <p> Use the &#x3C;Provider&#x3E; component to pass the 
store to the React app.
.</p>
<pre>
  <code>
    &lt;Provider store={'{store}'}&gt; <br />
      &lt;App /&gt; <br />
    &lt;/Provider&gt;
  </code>
</pre>
<h1>Task7 completed</h1>
<p>Counter display Component created</p>
<h1>see the counter value</h1>
<CounterDisplay/>
<h1>Task8 completed</h1>
<CounterButtons/>
<h1>Task9 completed</h1>
<p>authReducers  Component created</p>
<h1>Task10 completed</h1>
<CounterComponent  initialCount={0}/>
<h1>Task11 completed</h1>
<p>Redux DevTools Enabled for debugging</p>
<h1>Task12 completed</h1>   
<p>Middleware Setup: Set up a simple logger middleware with Redux.see the log</p> 
<div style={{ textAlign: "center" }}>
<h1>Task13</h1>
      <h1>Global Message State App</h1>
      <MessageDisplay />
      <MessageUpdate />
      <h1>Miniproject1</h1>
      <ThemeContainer>
      <h1>Theme Switcher App</h1>
      <ThemeButton />
    </ThemeContainer>
    </div>
    <h1>Miniproject2</h1>
    <div style={{ textAlign: "center" }}>
      <h1>Authentication App</h1>
      <AuthStatus />
      <LoginButton />
      <LogoutButton />
    </div>

    </div> 
      
  );
};

export default Task1;