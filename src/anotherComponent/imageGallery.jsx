import Gallery1 from "../assets/img/gallery1.jpg";
import Gallery2 from "../assets/img/gallery2.jpg";
import Gallery3 from "../assets/img/gallery3.jpg";
import Gallery4 from "../assets/img/gallery4.jpg";
import Gallery5 from "../assets/img/gallery5.jpg";
import Gallery6 from "../assets/img/gallery6.jpg";

const imageData = [
    {
        id: 0,
        source: Gallery1
    },
    {
        id: 1,
        source: Gallery2
    },
    {
        id: 2,
        source: Gallery3
    },
    {
        id: 3,
        source: Gallery4
    },
    {
        id: 4,
        source: Gallery5
    },
    {
        id: 5,
        source: Gallery6
    },
]

function ImageGallery() {
    return (
        <>
            <div className="container py-5">
                <h2 className="text-center fs-1 mb-5 text-uppercase">
                    Image Gallery
                </h2>
                <div className="row row-gap-3">
                    {
                        imageData.map(
                            (value) => 
                                <div className="col-md-4 px-2" key={value.id}>
                                    <img src={value.source} className="img-fluid" alt="Gallery Image" />
                                </div>
                            
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default ImageGallery;