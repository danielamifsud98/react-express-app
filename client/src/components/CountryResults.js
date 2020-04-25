import React from 'react';

const CountryResults = ({countryInformation}) => {
    return (
        <div className="card">
            <div className="card-header font-weight-bold">
                Result
            </div>
            <div className="card-body">
                <p>{countryInformation}</p>
            </div>
        </div>
    )
}

export default CountryResults;