import "./menu.css";
import { Card, CardBody, CardText, CardTitle } from 'react-bootstrap';
import BreakfastImg from '../assets/img/breakfast.jpg';
import LunchImg from '../assets/img/lunch.jpg';
import DinnerImg from '../assets/img/dinner.jpg';
import DessertImg from '../assets/img/dessert.jpg';

const breakfast = [
    {
        id: 1,
        name: 'English Breakfast',
        description: 'smoked bacon, sausage, tomato, mushrooms, black pudding, baked beans, eggs',
        price: '£12'
    },
    {
        id: 2,
        name: 'Avocado Toast',
        description: 'poached egg, avocado, onion, tomatoes, bread',
        price: '£8'
    },
    {
        id: 3,
        name: 'Burrito',
        description: 'tortilla, egg, cheese, potatoes, pork meat',
        price: '£11'
    }
];
const lunch = [
    {
        id: 1,
        name: 'Caesar Salad',
        description: 'chicken breast, romaine lettuce, croutons, parmesan',
        price: '£15'
    },
    {
        id: 2,
        name: 'Spaghetti Carbonara',
        description: 'spaghetti, pancetta, garlic, eggs, parmesan, pepper',
        price: '£14'
    },
    {
        id: 3,
        name: 'Pizza',
        description: 'chorizo, italian salami, tomatoes, mushrooms, olives',
        price: '£12'
    }
];
const dinner = [
    {
        id: 1,
        name: 'Spicy Beef',
        description: 'spicy beef, potatoes, carrots, cheese sauce, spices',
        price: '£17'
    },
    {
        id: 2,
        name: 'Spaghetti Bolognese',
        description: 'onion, carrot, celery, minced meat, spaghetti, parmesan',
        price: '£15'
    },
    {
        id: 3,
        name: 'Chickpea Curry',
        description: 'onion, chickpea, garlic, mushrooms, tomatoes, spices',
        price: '£12'
    }
];
const dessert = [
    {
        id: 1,
        name: 'Lemon Cake',
        description: 'flour, sugar, baking powder, lemon',
        price: '£9'
    },
    {
        id: 2,
        name: 'Cinnamon Rolls',
        description: 'flour, salt, sugar, cinnamon, yeast, sour cream, milk',
        price: '£11'
    },
    {
        id: 3,
        name: 'Vegan Pancakes',
        description: 'flour, sugar, baking powder, soya milk, blueberries',
        price: '£8'
    }
];

function Menu() {
    return (
        <>
            <div className="menu-page">
                <header className="mt-5">
                    <div className="container h-100 d-flex align-items-center justify-content-center">
                        <h1 className="text-light">Menu</h1>
                    </div>
                </header>
                <div className="breakfast my-5">
                    <div className="container">
                        <h2 className="text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success">Breakfast</h2>
                        <div className="row flex-column-reverse flex-lg-row">
                            <div className="col-lg-6 d-flex justify-content-center">
                                <img src={BreakfastImg} alt="Break Fast Image" className="img-fluid w-75 mt-4 mt-lg-0" />
                            </div>
                            <div className="col-lg-6 d-flex flex-column justify-content-around">
                                {breakfast.map(
                                    value => (
                                        <div key={value.id}>
                                            <Card className="border-0">
                                                <CardBody>
                                                    <CardTitle className="text-center fs-3">
                                                        {value.name}
                                                    </CardTitle>
                                                    <CardText className="text-center fs-5">
                                                        {value.description}
                                                    </CardText>
                                                    <CardText className="text-center fs-3 fw-bold text-success">
                                                        {value.price}
                                                    </CardText>
                                                </CardBody>
                                            </Card>
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lunch bg-black text-light py-5">
                    <div className="container">
                        <h2 className="text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success">Lunch</h2>
                        <div className="row justify-content-around">
                            <div className="col-lg-6 d-flex flex-column justify-content-around row-gap-3">
                                {lunch.map(
                                    (value) => <div key={value.id}>
                                        <Card className="border-0 bg-dark text-light">
                                            <CardBody>
                                                <CardTitle className="text-center fs-3">
                                                    {value.name}
                                                </CardTitle>
                                                <CardText className="text-center fs-5">
                                                    {value.description}
                                                </CardText>
                                                <CardText className="text-center fs-3 fw-bold text-success">
                                                    {value.price}
                                                </CardText>
                                            </CardBody>
                                        </Card>
                                    </div>
                                )}
                            </div>
                            <div className="col-lg-4 d-flex justify-content-center">
                                <img src={LunchImg} alt="Break Fast Image" className="img-fluid w-75 mt-4 mt-lg-0" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="dinner my-5">
                    <div className="container">
                        <h2 className="text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success">Dinner</h2>
                        <div className="row flex-column-reverse flex-lg-row justify-content-around">
                            <div className="col-lg-4 d-flex justify-content-center">
                                <img src={BreakfastImg} alt="Break Fast Image" className="img-fluid w-75 mt-4 mt-lg-0" />
                            </div>
                            <div className="col-lg-6 d-flex flex-column justify-content-aroung">
                                {dinner.map(
                                    (value) => <div key={value.id}>
                                        <Card className="border-0">
                                            <CardBody>
                                                <CardTitle className="text-center fs-3">
                                                    {value.name}
                                                </CardTitle>
                                                <CardText className="text-center fs-5">
                                                    {value.description}
                                                </CardText>
                                                <CardText className="text-center fs-3 fw-bold text-success">
                                                    {value.price}
                                                </CardText>
                                            </CardBody>
                                        </Card>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="dessert bg-black text-light py-5">
                    <div className="container">
                        <h2 className="text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success">Dessert</h2>
                        <div className="row flex-column-reverse flex-lg-row justify-content-around">
                            <div className="col-lg-4 d-flex justify-content-center">
                                <img src={BreakfastImg} alt="Breakfast Image" className="img-fluid w-75 mt-4 mt-lg-0" />
                            </div>
                            <div className="col-lg-6 d-flex flex-column justify-content-around row-gap-3">
                                {dessert.map(
                                    (value) => <div key={value.id}>
                                        <Card className="border-0">
                                            <CardBody>
                                                <CardTitle className="text-center fs-3">
                                                    {value.name}
                                                </CardTitle>
                                                <CardText className="text-center fs-5">
                                                    {value.description}
                                                </CardText>
                                                <CardText className="text-center fs-3 fw-bold text-success">
                                                    {value.price}
                                                </CardText>
                                            </CardBody>
                                        </Card>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menu;