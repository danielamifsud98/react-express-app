import React, {useState} from 'react';
import CountryResults from './CountryResults';

const QuestionDefault = ({questionNumber}) => {
    // QUESTION NUMBER (1 OR 2) - SINCE THEY USE PRACTICALLY THE SAME TEMPLATE
    const number = questionNumber;
    
    // SET COUNTRY
    const [countryInformation, setCountryInformation] = useState('Nothing to show.');
    const [countryName, setCountryName] = useState('');

    const searchCountry = async () => {
        if(countryName.trim() === ''){
            setCountryInformation('Please insert a country name!')
        } else {
            var url = ``;
            if(number == '1'){
                url = `/api/country/fullname/${countryName}/true`
            } else if(number == '2'){
                url = `/api/country/fullname/${countryName}/false`
            }
            const result = await fetch(url);
            const body = await result.json();
            if (typeof body.message !== 'undefined') {
                setCountryInformation('Could not find country!')
            } else {
                console.log(body);
                setCountryInformation(JSON.stringify(body));
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
            <CountryResults countryInformation={countryInformation}/>
        </>
    )
};

export default QuestionDefault;