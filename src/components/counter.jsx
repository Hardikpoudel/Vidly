// import { render } from '@testing-library/react';
import React, { useState } from 'react';
import axios from 'axios';
//first let me play with the react class components 
//then i'll go with the function component

// export default function Counter(props) {
//   return <h1>hello {props.name} { props.age}</h1>

// }
//  class Counter extends Component {
//    constructor() {
//      super();
//      this.state = {
//        count: 0,
//        name:"Hardik"
//      };
//    }
// //setting up the button that increments the counter by 1
//    render() { 
//      return (
//        <div>
//          <h1>Name is { this.state.name}</h1>
//          <h3>Current Count is {this.state.count}</h3>
//          <button onClick={()=>this.setState({count:this.state.count+1})}>Click to increase</button>
//        </div>
//       );
//    }
//  }
  
//  export default Counter;
//in functional component there is no constructor no this and no render()

// const  = () => {
const randomAPI = () => {
  return axios
    .get("https://randomuser.me/api")
    .then((response) => {
      // handle success
      console.log(response)
      // return response;
    })
    .catch((error) => {
      // handle error
      console.log(error)
    })
    .then(function () {
      // always executed
    })
}
function Counter(props) {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1>Myself {counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1)
        }}
      >
        {counter}
      </button>
      <button
        onClick={() => {
          randomAPI();
        }}
      >
        Fetch random data
      </button>
    </div>
  )
}



export default Counter;