 import React, {Component} from 'react';
 

class App extends Component {
  render(){
    return(
      <React.Fragment>
        <label htmlFor="">bar</label>
        <input type="text" onChange={() => {console.log("I'm clicked.")}} />
      </React.Fragment>
    ) 
  }
}

export default App;
