import React, { Component } from 'react';

//controlled form
//we can make the user typed value as on change
// const Names = () => {
//   const [name, setName] = useState("");
//   const [fullName, setFullName] = useState();
//   const handleChange = (event) => {
//     console.log(event.target.value)
//     setName(event.target.value)
//   }
//   const onSubmit = () => {
//     setFullName(name);
//   }
//   return (
//     <>
//       <div>
//         <h1>Hello { fullName}</h1>
//         <input type="text" placeholder="Enter your name" onChange={ handleChange}/>
//         <button onClick={onSubmit}>Click me😯</button>
//       </div>
//     </>
//   )
// }

class UnControlled extends Component {
  constructor() {
    super();
    this.name = React.createRef();
    this.names="hardik"
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log(this.name.current.value);
  }
  render() { 
    return (
      <div>
        <h1>{this.names}</h1>
        <form
          onSubmit={(event) => {
            this.handleSubmit(event)
          }}
        >
          <input type="text" placeholder="Enter your name" ref={this.name} />
          <br />
          <br />
          <button type="submit">Submit😰</button>
        </form>
      </div>
    )
  }
}
 
export default UnControlled;

// export default Names;