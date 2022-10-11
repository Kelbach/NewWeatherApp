import React from 'react';

export const ForecastCard = (props) => {

    return ( props ?
        <div className='card border m-1 w-40'>
            <h4>{props.date}</h4>
            <img src={props.image} alt='forecast sky'></img>
            <ul className="list-group-item">
                <li className='list-group-item'>{props.temp}</li>
                <li className='list-group-item'>{props.wind}</li>
                <li className='list-group-item'>{props.humidity}</li>
                <li className={`list-group-item uv-${props.uvf}`}>{props.uvi}</li>
            </ul>
        </div>
    : <></>);
}