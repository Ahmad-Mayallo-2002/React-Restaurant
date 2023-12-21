import MenuButton from "../anotherComponent/MenuButton.jsx";
import ImageGallery from "../anotherComponent/imageGallery.jsx";
import ContactInfo from "../anotherComponent/contactInfor.jsx";
import "./home.css";
import { Link } from "react-router-dom";
import AboutImg from "../assets/img/about-img.jpg";
import ContactImg from "../assets/img/contact-img.jpg";
function Home() {
    return (
        <div className="home-page">
            <header className="h-100 min-vh-100 d-flex align-items-center text-light shadow">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 d-flex d-sm-block flex-column align-items-center">
                            <h2 className="mb-0 text-black fw-bold">Welcome To</h2>
                            <h1 className="mb-5 text-black fw-bold text-center text-sm-start">React Restaurant</h1>
                            <MenuButton />
                        </div>
                    </div>
                </div>
            </header>

            <div className="container my-5">
                <div className="row">
                    <div className="col-lg-6 d-flex justify-content-center d-none d-lg-flex">
                        <img src={AboutImg} className="img-fluid w-50" alt="About Image" />
                    </div>
                    <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center">
                        <h2 className="fs-1 mb-5 text-uppercase fw-bold">About</h2>
                        <p className="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit possimus repudiandae accusamus quos alias dolor, dolores nulla ratione natus cumque.</p>
                        <p className="mb-5 text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo est molestias fugit exercitationem consequatur dolorem labore nulla blanditiis, illum modi reprehenderit at quidem maiores ipsam ex! Nobis porro quia illum?</p>
                        <Link to="/about">
                            <button type="button" className="btn btn-outline-success btn-lg">More About Us</button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="menu-section py-5 text-light shadow">
                <div className="container d-flex flex-column align-items-center">
                    <h2 className="fs-1 mb-5 text-uppercase fw-bold">Our Favourites</h2>
                    <div className="row mb-5 w-100">
                        <div className="col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0">
                            <h3 className="fs-2 mb-5">Food</h3>
                            <ul className="px-0">
                                <li className="d-flex justify-content-center">
                                    <p className="fs-3 mx-2">English Breakfast</p>
                                    <p className="fs-3 mx-2 text-success fw-bold">$12</p>
                                </li>
                                <li className="d-flex justify-content-center">
                                    <p className="fs-3 mx-2">Spicy Beef</p>
                                    <p className="fs-3 mx-2 text-success fw-bold">$15</p>
                                </li>
                                <li className="d-flex justify-content-center">
                                    <p className="fs-3 mx-2">Spaghetti Bologonese</p>
                                    <p className="fs-3 mx-2 text-success fw-bold">$8</p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0">
                            <h3 className="fs-2 mb-5">Drinks</h3>
                            <ul className="px-0">
                                <li className="d-flex justify-content-center">
                                    <p className="fs-3 mx-2">Coffee</p>
                                    <p className="fs-3 mx-2 text-success fw-bold">$5</p>
                                </li>
                                <li className="d-flex justify-content-center">
                                    <p className="fs-3 mx-2">Juice</p>
                                    <p className="fs-3 mx-2 text-success fw-bold">$3</p>
                                </li>
                                <li className="d-flex justify-content-center">
                                    <p className="fs-3 mx-2">Spirits</p>
                                    <p className="fs-3 mx-2 text-success fw-bold">$2</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <MenuButton />
                </div>
            </div>

            <ImageGallery />

            <div className="bg-black text-light py-5 shadow">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center mb-5 mb-lg-0">
                            <ContactInfo />
                        </div>
                        <div className="col-lg-4 d-flex justify-content-center">
                            <img src={ContactImg} alt="Contact Image" className="img-fluid w-50" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home;