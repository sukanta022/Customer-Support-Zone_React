<b>1) What is JSX, and why is it used?</b><br>
Ans: JSX means Javascript XML which is used in React for writing HTML like code inside Javascript. It is mainly used for,<br>
<ul>
  <li>Write HTML easily without long javascript functions which make code easier.</li>
  <li>The code become more readable and easier to understand because it looks like HTML and its U IStructure is clear.</li>
  <li>It detects early to find error.</li>
  <li>JSX converts into optimized javascript code which makes the UI become faster.</li>
</ul>
<br><br>
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
Ans: Using the Lift Up State, it pass the data from parent component to child component. For example,<br>
<pre><code> const Parent = () =&gt; { const [count, setCount] = useState(0); return ( &lt;div&gt; &lt;ChildA count={count} /&gt; &lt;ChildB setCount={setCount} /&gt; &lt;/div&gt; ); }; const ChildA = ({ count }) =&gt; &lt;h2&gt;Count: {count}&lt;/h2&gt;; const ChildB = ({ setCount }) =&gt; &lt;button onClick={() =&gt; setCount(prev =&gt; prev + 1)&gt;Increase&lt;/button&gt;; </code></pre> <ul> <li>The <b>Parent</b> component holds the state (<code>count</code>).</li> <li><b>ChildA</b> receives <code>count</code> as a prop to display the value.</li> <li><b>ChildB</b> receives <code>setCount</code> as a prop to update the value.</li> <li>Both children share the same state via the parent.</li> </ul> <br><br>


