import React from 'react';

const CountryResults = ({countryInformation}) => {
    return (
        <div className="card">
            <div className="card-header font-weight-bold">
                Result
            </div>
            <div className="card-body">
                {countryInformation}
            </div>
        </div>
    )
}

export default CountryResults;