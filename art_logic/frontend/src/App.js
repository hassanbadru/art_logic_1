import React, { Component } from 'react';
import './css/App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {operation: 'encoding', user_input: '', file_upload: true}
  }

  render() {
    return (
      <div id={"intro"}>
        <div className={"intro-body"}>
          <div className={"container"}>

            <div className={"row"}>
              <div className={"col-md-12"}>
                <h1>ART +<span class={"brand-heading"}> LOGIC</span></h1>
                <p className={"intro-text"}>Use this app to encode and decode data...</p>
              </div>
             </div>

             <div className={'row'}>

               <UserInput
                 toEncode={() => this.setState({operation: 'encoding'})}
                 toDecode={() => this.setState({operation: 'decoding'})}
                 user_input={(user_input) => this.setState({user_input})}
                 currentOperation={this.state.operation} />

               <ResultDisplay
                 currentOperation={this.state.operation}
                />
             </div>



            </div>
        </div>
      </div>

    );
  }
}

export default App;

const UserInput = (props) => {

  let encodingStatus = props.currentOperation === 'encoding'

  return (
    <div className={"form"}>
        <form action="">
          <h4>Select an operation</h4>
          <span className={'message'}>

              <label className={"radio-inline message"}>&nbsp;<input type="radio" name="optradio" onChange={props.toEncode} checked={encodingStatus} />Encode</label>
              <label className={"radio-inline message"}>&nbsp;<input type="radio" name="optradio" onChange={props.toDecode} checked={!encodingStatus}/>Decode</label>

          </span>
          <input
            type="text"
            placeholder={(encodingStatus) ? 'Enter Decimal Value' : 'Enter Hexadecimal Value'}
            name="encode"
            onChange={(value) => props.user_input(value)}
          />
          <button>Compute</button>
        </form>

        <br/>
        <p style={{color: '#000'}}>Have a text file? <a href="#" style={{color: 'orange'}}>Upload</a> instead</p>
      </div>
  )
}

const ResultDisplay = (props) => {
  return (
    <div className={"result_view"}>
        <h4 style={{color: '#000'}}>
          {(props.currentOperation == 'encoding') ? 'ENCODING' : 'DECODING'}
        </h4>
        <p style={{color: '#000'}}> {(props.currentOperation === 'encoding') ? '(dec to hex)' : '(hex to dec)'}</p>

        <hr style={{width: '100%'}}></hr>
        <h3 style={{color: '#000'}}>RESULTS</h3>
        <div className={'col-md-4'} style={{width: '100%'}}>
          TEST1
        </div>
        <div className={'col-md-4'} style={{width: '100%'}}>
          TEST2
        </div>

    </div>
  )
}

//
// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <h1 className="App-title">Welcome to React</h1>
//   </header>
//   <p className="App-intro">
//     To get started, edit <code>src/App.js</code> and save to reload.
//   </p>
// </div>
