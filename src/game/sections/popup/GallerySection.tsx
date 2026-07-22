import { galleryItems } from "./GalleryItem"
import "./Gallery.css";

export default function GallerySection(){
    return (
        <div className="gallery-wrapper">
            <div className="gallery-section">
                {galleryItems.map(photo => (
                    <div key={photo.id} className="gallery-item">
                        <img src={photo.image} alt={photo.altVal} draggable={false} />
                    </div>
                ))}
            </div>
        </div>
    )
}