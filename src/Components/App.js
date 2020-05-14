import React from "react"
import unsplash from "../api/unsplash"
import SearchBar from "./SearchBar"
import ImageList from "./ImageList"
import Header from "./Header"
class App extends React.Component{
  state={images: [] }
  onSearchSubmit=async(term)=>{

  const response=await unsplash
  .get('https://api.unsplash.com/search/photos', {
    params:{ query: term },
  })
  this.setState({images:response.data.results})
  } 
  render(){
    return(
      <div>
         <Header/>
        <div className="ui container" style={       {marginTop:'50px'}}>
         <SearchBar onSubmit={this.onSearchSubmit}/>
         <ImageList image={this.state.images}/>
        </div>
      </div>
    )
  }
}
export default App
