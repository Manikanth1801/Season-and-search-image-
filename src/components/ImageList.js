import React from 'react';
import './myStyle.css';
const ImageList=props=>{
  
    const images = props.images.map(image => {
      return (
        <div className="img-list" key={image.id} alt={Image.description}>

          {/* <br /> */}
          <div class="row">
            <div className="column">
            <img alt={image.description} src={image.urls.regular} />
            </div>
            </div>
          </div>
      );
    })
      return (
        // <div className='img'>
        //   {images}
          
        // </div>
        <div className="ui small images divided three column grid">
          {images}
        </div>
      );
    
}
export default ImageList;