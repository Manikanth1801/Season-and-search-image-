import React from 'react';
import SearchBar from './SearchBar';
import callApi from '../api/callApi';
import ImageList from './ImageList';
import SeasonTrack from './season/seasonTracker';



class App extends React.Component
{
  
    state = {
      total: [],
      images:[]
    }

  onSearchSubmit = async (val) => {
    const response = await
      callApi.get("/search/photos", {
        params: {
        query: val
      }
      });
    console.log(response.data.results);
    console.log(val);
    // this.setState({ images: response.data.results.urls }) below:response.data.total;
    this.setState({ total: 10 });
    
    this.setState({ images: response.data.results });
  }
  //  onSearchSubmit = async(val)=>
  // {
  //   //below is the procedure to call the api prams is querry like seach etc
  //   //authorization to provide the authority to acsess the api
  //   const response =await axios.get("https://api.unsplash.com/search/photos", {
  //     params: {
  //       query: val
  //     },
  //     headers: {
  //       Authorization: 'Client-ID givV67qLkneaDG6l5lyhCiVpnEJAV_t-r37FgAIajug'
  //     }
  //   });

  // }
  render(){
    return (
      <div >
        {/* <div className="ui huge header center aligned">Before you search something lets check the season !</div> */}
        <SeasonTrack></SeasonTrack>
        <div className="ui container" >
        <SearchBar onSubmit={this.onSearchSubmit} />
        <div className="ui container">
        <h3>Images Found :{this.state.total}</h3>
        <ImageList images={this.state.images} />
        </div>
        </div>

      </div>
    );
  };
}

export default App;
