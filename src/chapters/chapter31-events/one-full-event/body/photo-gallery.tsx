import ImageGallery from "react-image-gallery";
// import stylesheet if you're not already using CSS @import
import "react-image-gallery/styles/css/image-gallery.css";
import "./event.scss" 

type ImageType = {
    original: string,
    thumbnail: string
}

type PropsType = {photos: Array<string>}

export const EventPhotoGallery = (props: PropsType) => {
    const images: Array<ImageType> = props.photos.map(p => {
        const image: ImageType = {
            original: p,
            thumbnail: p
        }
        return image
    })

    return (
        <div className="photo_gallery_div">
            <div className="photo_gallery_inner_div">
                <ImageGallery items={images} />
            </div>
        </div>
    )
}