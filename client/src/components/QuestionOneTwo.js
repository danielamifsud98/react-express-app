import React, {useState, useEffect} from 'react';
import CountryResults from './CountryResults';

const QuestionOneTwo = ({questionNumber}) => {
    // QUESTION NUMBER (1 OR 2) - SINCE THEY USE PRACTICALLY THE SAME TEMPLATE
    const number = questionNumber;
    
    // SET COUNTRY
    const [countryInformation, setCountryInformation] = useState([]);
    const [countryName, setCountryName] = useState('');

    // CLEAR ALL ENTRIES
    useEffect(() => {
        setCountryInformation([]);
        setCountryName('');
    }, [number]);

    const searchCountry = async () => {
        if(countryName.trim() === ''){
            setCountryInformation('Please insert a country name!')
        } else {
            var url = ``;
            if(number === '1'){
                url = `/api/country/fullname/${countryName}/true`
            } else if(number === '2'){
                url = `/api/country/fullname/${countryName}/false`
            }
            const result = await fetch(url);
            const body = await result.json();
            // setCountryInformation('Could not find country!')
            if (typeof body.message == 'undefined') {
                var countries = [];
                for(var i = 0; i<body.length; i++){
                    var languages = body[i].languages.map((language) => {
                        return language.name;
                    });
                    var currencies = body[i].currencies.map((currency) => {
                        return currency.name + ' (' + currency.symbol + ')';
                    })
                    var country = {
                        name: body[i].name,
                        capital: body[i].capital, 
                        alternateNames: body[i].altSpellings.join(', '),
                        languages: languages.join(', '),
                        population: body[i].population,
                        currencies: currencies.join(', '),
                        image: body[i].flag
                    }
                    countries.push(country);
                }
                setCountryInformation(countries);
                console.log(countries);
            }
        }
    }
    return (
        <>
            <div className="form-group form-group-question">
                <label className="font-weight-bold">Please enter country name below:</label>
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-9 mb-2">
                        <input 
                            type="text" 
                            className="form-control" 
                            value={countryName} 
                            onChange={(event) => setCountryName(event.target.value)} 
                            placeholder="Country Name"/>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-3 mb-2">
                        <button type="button" className="btn btn-primary w-100" onClick={()=>searchCountry()}>Search</button>
                    </div>
                </div>
            </div>
            {
                countryInformation.length > 0 ? (
                    <CountryResults countryInformation={
                        countryInformation.map((country, index) => (                            
                            <div key={country.name}>
                                <div className="row mb-2">
                                    <div key={country.name + '-col-1'} className="col col-md-8">
                                        <h5 className="font-weight-bold underline">{country.name}</h5>
                                        <p className="results-paragraph"><strong>Alternate Names:</strong> {country.alternateNames}</p>
                                        <p className="results-paragraph"><strong>Capital:</strong> {country.capital}</p>
                                        <p className="results-paragraph"><strong>Currencies:</strong> {country.currencies}</p>
                                        <p className="results-paragraph"><strong>Languages:</strong> {country.languages}</p>
                                        <p className="results-paragraph"><strong>Population:</strong> {country.population}</p>
                                    </div>
                                    <div key={country.name + '-col-2'} className="col col-md-4">
                                        <img className="w-100 border" src={country.image}/>
                                    </div>
                                </div>
                                <hr key={index}/>
                            </div>
                        ))
                    }/>
                ) : (
                    <CountryResults countryInformation={
                        // <span>Country with name: <strong>"{countryName}"</strong> not found!</span>
                        <span>Nothing to show.</span>
                    }/>
                )
            }   
        </>
    )
};

export default QuestionOneTwo;