import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({images ,likeClick}) {
    return (
        images.map(image => (
            <GalleryItem 
                key={image.id}
                image={image}
                likeClick={likeClick}
            />
            
        ))
    )
   
}

export default GalleryList;