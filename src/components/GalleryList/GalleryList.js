import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({images}) {
    return (
        images.map(image => (
            <GalleryItem 
                key={image.id}
                image={image}
            />
            
        ))
    )
   
}

export default GalleryList;