import React, { Component } from 'react';
import './css/App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {operation: 'encoding', user_input: '', file_upload: false}
  }

  render() {
    return (
      <div id={"intro"}>
        <div className={"intro-body"}>
          <div className={"container"}>

            <div className={"row"}>
              <div className={"col-md-12"}>
                <h1>ART +<span className={"brand-heading"}> LOGIC</span></h1>
                <p className={"intro-text"}>Use this app to encode and decode data...</p>
              </div>
             </div>

             <div className={'row'}>

               <UserInput
                 toEncode={() => this.setState({operation: 'encoding'})}
                 toDecode={() => this.setState({operation: 'decoding'})}
                 user_input={(user_input) => this.setState({user_input})}
                 currentOperation={this.state.operation}
                 toUpload={() => this.setState({file_upload: !this.state.file_upload})}
                 file_upload={this.state.file_upload}
               />

               <ResultDisplay
                 currentOperation={this.state.operation}
                 user_input={this.state.user_input}
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

              <label className={"radio-inline message"}>&nbsp;<input type="radio" name="encode" onChange={props.toEncode} checked={encodingStatus} />Encode</label>
              <label className={"radio-inline message"}>&nbsp;<input type="radio" name="decode" onChange={props.toDecode} checked={!encodingStatus}/>Decode</label>

          </span>

          <br/><br/>
          {
            (props.file_upload) ? (
                    <div>
                      <input
                        type="file"
                        name="encode"
                      />

                      <p style={{color: '#000'}}>Prefer to type in? Use the<a onClick={props.toUpload} href="#" style={{color: 'orange'}}> Text Box</a></p>
                      <button>Compute</button>
                    </div>
                  ) : (
                    <div>
                      <input
                        type="text"
                        placeholder={(encodingStatus) ? 'Enter Decimal Value' : 'Enter Hexadecimal Value'}
                        name="to_compute"
                        onChange={(e) => {
                          props.user_input(e.target.value)
                          console.log(e.target.value)
                        }}
                      />
                      <p style={{color: '#000'}}>Have a text file? <a onClick={props.toUpload} href="#" style={{color: 'orange'}}>Upload</a> instead</p>

                      <button type="submit">Compute</button>
                    </div>
                  )
          }

          <br/>

        </form>

      </div>
  )
}

const ResultDisplay = (props) => {
  $.get('api/art_logic_app/').then(data => console.log(data))
  return (
    <div className={"result_view"}>
        <h4 style={{color: '#000'}}>
          {(props.currentOperation == 'encoding') ? 'ENCODING' : 'DECODING'}
        </h4>
        <p style={{color: '#000'}}> {(props.currentOperation === 'encoding') ? '(dec to hex)' : '(hex to dec)'}</p>

        <hr style={{width: '100%'}}></hr>
        <h3 style={{color: '#000'}}>RESULTS</h3>
        <p style={{color: '#000'}}>{props.user_input}</p>
        <p style={{color: '#000'}}>test</p>
        <div className={'col-md-4'} style={{width: '100%'}}>
          TEST1
        </div>
        <div className={'col-md-4'} style={{width: '100%'}}>
          TEST2
        </div>

        <p style={{color: '#000'}}>Download <a href="#" style={{color: 'orange'}}>Text File</a> of RESULT</p>

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
