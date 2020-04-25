import React, {useState, useEffect} from 'react';

const QuestionThree = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`/api/country/all`);
            const body = await result.json();
            setCountries(body);
            console.log(body);
        }
        fetchData();
    }, []);

    return (
        <React.Fragment>
            {countries.map((country) => (
                <span key={country.name} className="badge badge-pill badge-info">{country.name}</span>
            ))}
        </React.Fragment>
    )
}

export default QuestionThree;