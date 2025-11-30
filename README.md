<b>1) What is JSX, and why is it used?</b><br>
Ans: JSX means Javascript XML which is used in React for writing HTML like code inside Javascript. It is mainly used for,<br>
<ul>
  <li>Write HTML easily without long javascript functions which make code easier.</li>
  <li>The code become more readable and easier to understand because it looks like HTML and its UI Structure is clear.</li>
  <li>It detects early to find error.</li>
  <li>JSX converts into optimized javascript code which makes the UI become faster.</li>
</ul>
<br>
<b>2) What is the difference between State and Props?</b><br>
Ans:  State basically represents the internal data of components which is mutable means data possible to change over time. It managed with useState hook. <br>
On the other hand, Props are data which is used for sending data from parent to child. And the data is immutable means data can’t be changed.<br>
So the main difference between State and props is data mutable in State and immutable in props.<br><br>
<b>3) What is the useState hook, and how does it work?</b> <br>
Ans: useState is a react hook which is used for managing and storing the state of data. It remembers the component data during re-render & show the new update in UI
It works basically using two things,
<ol>
  <li>state variable : used to store current data</li>
  <li>setState function: used to update the state variable data. like, setCount(count + 1);</li>
</ol>
For example,
          const [count, setCount] = useState(0);
<br><br>

<b>4) How can you share state between components in React?</b><br>
Ans: Using the Lift Up State, it passes the data from parent component to child component. For example,<br>
<br>
<code>
const Parent = () =&gt; {<br>
&nbsp;&nbsp;const [count, setCount] = useState(0);<br>
&nbsp;&nbsp;return (<br>
&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;ChildA count={count} /&gt;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;ChildB setCount={setCount} /&gt;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br>
&nbsp;&nbsp;);<br>
};<br>
</code>

<br>

<b>5) How is event handling done in React?</b><br>
Ans:  Event handling done in React using the event attribute onclick . Instead of calling it we pass the function as event handler. For example,<br>

<code>
function App() {<br>
&nbsp;&nbsp;function handleClick() {<br>
&nbsp;&nbsp;&nbsp;&nbsp;alert("Button clicked!");<br>
&nbsp;&nbsp;}<br>
<br>
&nbsp;&nbsp;return (<br>
&nbsp;&nbsp;&nbsp;&nbsp;&lt;button onClick={handleClick}&gt;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Click Me<br>
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/button&gt;<br>
&nbsp;&nbsp;);<br>
}<br>
</code>

<br>
When we need to pass data inside the event handler function we use an arrow function inside the event handler to avoid execution immediately; it only runs when the event happens. For example,<br>
<br>

<code>
function App(data) {<br>
&nbsp;&nbsp;function handleClick() {<br>
&nbsp;&nbsp;&nbsp;&nbsp;alert(data);<br>
&nbsp;&nbsp;}<br>
<br>
&nbsp;&nbsp;return (<br>
&nbsp;&nbsp;&nbsp;&nbsp;&lt;button onClick={() =&gt; {handleClick(data)}}&gt;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Click Me<br>
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/button&gt;<br>
&nbsp;&nbsp;);<br>
}<br>
</code>
