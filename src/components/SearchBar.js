import React from 'react';
class SearchBar extends React.Component{
  state = { term: '' };
  clickChange(e) {
    console.log("clicked");
  }
  onFormSubmit = e =>
  {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
    
  }
  render() { 
    return (
      <div className="ui segment">
      <form className='ui form' onSubmit={this.onFormSubmit}>
          <div className="feild">
            <label htmlFor="">Image search</label>
            <input type="text" value={this.state.term}
              onChange={(event)=> this.setState({term: event.target.value})}
              onClick={this.clickChange} />
            
          </div>
          <br />
          <div className="ui" style={{marginRight:"1px"}}>
          <button className="ui grey button " type="submit">Submit</button>
          </div>
        </form>
    </div>
    );
    
  }
}
export default SearchBar;