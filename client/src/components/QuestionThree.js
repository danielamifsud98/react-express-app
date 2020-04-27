import React, {useState, useEffect} from 'react';
import CountryResults from './CountryResults';

const QuestionThree = () => {
    // SET COUNTRIES AND FILTER NAME
    const [countries, setCountries] = useState([]);
    const [countryName, setCountryName] = useState('');
    const [filteredCountries, setFilteredCountries] = useState([]);

    // GET ALL COUNTRIES
    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`/api/country/all`);
            const body = await result.json();
            setCountries(body);   
            setFilteredCountries(body);        
        }
        fetchData();
    }, []);

    // FILTER COUNTRIES
    useEffect(() => {
        const results = countries.filter(country =>
            country.name.toLowerCase().includes(countryName.toLowerCase().trim())
        );
        setFilteredCountries(results);
    }, [countryName]);

    return (
        <>
            <div className="form-group form-group-question mb-4">
                <label className="font-weight-bold">Filter through the list of countries:</label>
                <div className="row">
                    <div className="col col-12">
                        <input 
                            type="text" 
                            className="form-control" 
                            value={countryName} 
                            onChange={(event) => setCountryName(event.target.value)} 
                            placeholder="Insert Country Name"/>
                    </div>
                </div>
            </div>  
            {
                filteredCountries.length > 0 ? (
                    <CountryResults countryInformation={
                        filteredCountries.map((country) => (
                            <span key={country.name} className="badge badge-pill badge-light custom-pill">{country.name}</span>
                        ))
                    }/>
                ) : (
                    <CountryResults countryInformation={
                        <span></span>
                    }/>
                )
            }          
        </>
    )
}

export default QuestionThree;