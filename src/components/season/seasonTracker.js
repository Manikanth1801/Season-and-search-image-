import React from 'react';
import Season from './SeasonDisplay';
import { Err } from './SeasonDisplay';  

 export default class SeasonTrack extends React.Component{
    constructor(){
        super();
        this.state = {
            lat:null,
          error: null 
            
        };
  }
    componentDidMount(){
      window.navigator.geolocation.getCurrentPosition(
        (position) => this.setState({ lat: position.coords.latitude }),
        (err) => this.setState({error: err.message})
      );
    }
    render(){
       
      if (this.state.error && !this.state.lat) {
        console.log(this.state.error);
        return (
          <div>
            <Err errmsg={this.state.error}/>
          </div>
        );
      }
      if (!this.state.error && this.state.lat) {
        console.log("Shi h");
        return (
          <Season latitude={this.state.lat} />

        );

      }
        
      return (
          <div className="ui container"><h1>Puff!!</h1> </div>
        )     
           
       
    }
}

















// import React from 'react';
// import ReactDom from 'react-dom';
// import Season from './SeasonDisplay';

// class App extends React.Component {

//   constructor() {
//     super();
//     this.state = {
//       lat: null,
//       error:null
//     };

    
//   }
//   componentDidMount() {

//     window.navigator.geolocation.getCurrentPosition(
//       (position) => this.setState({ lat: position.coords.latitude }),
//       (err) => this.setState({ error: err.message })
//     );

//     console.log("In the did mount");
//   }
//   componentDidUpdate() {
    
//   }
//   render() {
//     if(this.state.error && !this.state.lat) {
//       return (
//         <Season Error={this.state.error}/>
//       );
//     }
//     if(!this.state.error && this.state.lat) {
//       return (
//         <Season latitude={this.state.lat}/>
//         );
//     }
//     return (
//       <div><h1>Loding...</h1></div>
//     );
    
//   };
// }
// ReactDom.render(<App />, document.querySelector('#root'));