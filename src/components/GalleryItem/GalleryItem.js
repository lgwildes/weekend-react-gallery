import './GalleryItem.css'

function GalleryItem( {image} ) {
    
    if(image.likes === 0){
        return(
            <>
                <li  key={image.id}>
                    <img src={image.path}/>
                    <button>love it!</button>
                    <p>No people love this 😔</p>
                    <p>{image.description}</p>
                </li>
            </>
        )
    }
    
   else { 

        return(
            <>
                <li  key={image.id}>
                    <img src={image.path}/>
                    <button>love it!</button>
                    <p>{image.likes} people love this!</p>
                    <p>{image.description}</p>
                </li>
            </>
        )
   }    
}

export default GalleryItem;

