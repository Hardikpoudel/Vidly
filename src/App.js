// import logo from "./logo.svg"
import "./App.css"
import React,{useState} from 'react'
// function App() {
//   return (
//     <main className="container">
//       <h1>Hello world</h1>
//     </main>
//   )
// }
export default function App() {
  const [formState, setFormState] = useState({});
 
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormState((prev) => ({
      ...prev,
      [name]: value
    }));
  };
 
  return (
    <form>
      <input
        value={formState.firstName}
        onChange={handleChange}
        name="firstName"
        type="text"
      />
      <input
        value={formState.password}
        onChange={handleChange}
        type="password"
        name="password"
      />
    </form>
  );
}