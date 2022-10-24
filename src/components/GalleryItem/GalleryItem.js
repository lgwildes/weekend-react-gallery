import { useState } from 'react'
import './GalleryItem.css'

function GalleryItem( {image, likeClick} ) {

    const [clicked, setClicked] = useState(false);

   const checkForLikes = (image) => {
        return (image.likes > 0 ? 
            <p>{image.likes} people love this!</p>
            :  <p>No people love this 😔</p>)
    };

    const imageClick = () => {
        console.log('image was clicked! ↩️')
        setClicked(!clicked) 
        console.log('clicked status is', clicked);
    };
    
    

    const likeHandle= () => {
        console.log(`someone liked your image!`)
        likeClick(image.id)

    }

 
        return(
            
            
            <li  key={image.id} className="itemLi">
                    <div className="galleryItem" onClick={imageClick}>
                        {clicked === false &&
                        <img src={image.path} />
                        }
                        {clicked === true &&
                        <p >{image.description}</p>}
                        
                    </div>
                    <div className="galleryStats">
                        <button onClick={likeHandle}>love it!</button>
                        {checkForLikes(image)}
                    </div>
            </li>
           
        )
    
    
  
}

export default GalleryItem;

