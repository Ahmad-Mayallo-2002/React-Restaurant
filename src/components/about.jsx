import "./about.css";
import aboutChef1 from "../assets/img/about-chef1.jpg";
import aboutChef2 from "../assets/img/about-chef2.jpg";
import ImageGallery from "../anotherComponent/imageGallery.jsx";
import Reviews from "../anotherComponent/Reviews.jsx";
function About() {
    return (
        <>
            <div className="about-page mt-5">
                <header className="mt-5">
                    <div className="container h-100 d-flex align-items-center justify-content-center">
                        <h1 className="text-light">About</h1>
                    </div>
                </header>

                <div className="container my-5">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quae vitae voluptate blanditiis beatae, distinctio error perferendis qui. Autem aperiam labore, placeat quaerat velit fugiat quo numquam molestias amet quod fugit similique? Magnam illo quisquam molestiae, commodi perspiciatis dolore dolorum a porro autem voluptates veritatis hic reprehenderit labore in dolor.</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores ad expedita illum in obcaecati aliquam, consequuntur nostrum, quis molestias maxime mollitia distinctio fuga exercitationem voluptatem accusamus nulla! Dolor, corrupti explicabo similique, quis eos quo voluptatibus iste, accusamus eius voluptatum ipsum aliquam commodi beatae quasi nostrum! Consectetur, architecto. Esse minus autem cum voluptatum nostrum eum, error deleniti quisquam aperiam laudantium eligendi et aut, ducimus optio inventore sunt assumenda in est distinctio accusamus tempora, alias veritatis. Odit velit animi exercitationem quibusdam quos!</p>
                    <div className="row">
                        <div className="col-lg-6">
                            <img src={aboutChef1} className="img-fluid my-4" alt="Chef 1" />
                        </div>
                        <div className="col-lg-6">
                            <img src={aboutChef2} className="img-fluid my-4" alt="Chef 1" />
                        </div>
                    </div>
                    <p className="mt-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus eveniet assumenda suscipit quas magni ipsa expedita aliquam dolorum doloribus in, saepe amet quod veniam, autem distinctio cumque, officia accusantium. Harum amet nobis accusamus natus delectus ducimus? Aut voluptatibus sequi incidunt voluptatem nisi eum. Repudiandae quo aperiam architecto asperiores qui quas eos dolor exercitationem fuga illo. Labore corporis aliquam mollitia non modi, sunt rem. Dicta animi est laborum error atque saepe assumenda ad voluptatum? Saepe voluptatem iusto enim eveniet suscipit officiis libero sed placeat obcaecati tempore nesciunt, odit delectus quasi minus.</p>
                </div>
                <div className="bg-dark text-light">
                    <ImageGallery />
                </div>
                <div className="my-5">
                    <Reviews />
                </div>
            </div>
        </>
    )
}

export default About;