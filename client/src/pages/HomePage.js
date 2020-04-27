import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
    <div className="d-flex flex-column justify-content-center align-items-center homepage">
        <h1 style={{fontSize: "3.5rem"}}className="font-weight-bold mb-2">Hi!</h1>
        <hr style={{border: "0.5px solid #90909038", width: "30%"}}/>
        <p className="font-weight-bold">Please find the answers to the task questions in the links above/below.</p>
        <div>
            <Link className="btn btn-dark mx-1" to="/question/1">Question 1</Link>
            <Link className="btn btn-dark mx-1" to="/question/2">Question 2</Link>
            <Link className="btn btn-dark mx-1" to="/question/3">Question 3</Link>
            <Link className="btn btn-dark mx-1" to="/question/4">Question 4</Link>
        </div>
    </div>   
)
export default HomePage;