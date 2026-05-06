import { useRef } from "react";

 

 


const App = () => {
     let firstName,lastName=useRef()
      const change=()=>{
          let fName=firstName.value;
          let lName=lastName.value;
          alert(fName+" "+lName)
      }
      

 return(
  <div>
      <h1>Hello Bangladesh</h1>
      <input ref={(a)=>firstName=a} type="text" placeholder="FirstName"/><br />
      <input ref={(a)=>lastName=a} type="text" placeholder="LastName"/><br />
      <button onClick={change}>Click</button>
  </div>
 )
};

export default App;
 

 