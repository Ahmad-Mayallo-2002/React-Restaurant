import { Card, CardBody, CardText, CardTitle, CardFooter } from "react-bootstrap";
import "./Reviews.css";
import Person1 from '../assets/img/person1.jpg';
import Person2 from '../assets/img/person2.jpg';
import Person3 from '../assets/img/person3.jpg';
import Person4 from '../assets/img/person4.jpg';

const data = [
    {
        id: 0,
        source: Person1,
        title: "John Mike"
    },
    {
        id: 1,
        source: Person2,
        title: "Maria Cruz"
    },
    {
        id: 2,
        source: Person3,
        title: "Anna Gold"
    },
    {
        id: 3,
        source: Person4,
        title: "Nick Burn"
    }
]

function Reviews() {
    return (
        <>
            <div className="reviews-section container">
                <h2 className="text-center mb-5 text-uppercase fw-bold fs-1">
                    Reviews
                </h2>
                <div className="row g-4">
                    {data.map(
                        value => <div key={value.id} className="col-lg-4">
                            <Card className="h-100 shadow">
                                <CardBody>
                                    <div className="p-4">
                                        <CardText>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quia?
                                        </CardText>
                                    </div>
                                </CardBody>
                                <CardFooter className="d-flex align-items-center">
                                    <img src={value.source} alt="Preson 1" className="img-fluid rounded-circle mx-3 shadow" />
                                    <CardTitle className="text-success">{value.title}</CardTitle>
                                </CardFooter>
                            </Card>
                    </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Reviews;