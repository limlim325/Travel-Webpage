import React from 'react'

export default function Card(props) {
    return (
        <main className='main'>
            <div className='photo'>
                <img src={props.item.imageUrl} className='photo--photo'/>
            </div>
            
            <div className='content'>
                <div className='top'>
                    <span className='content--location'>{props.item.location},</span>
                    <span className='content--maps'><a href={props.item.googleMapsUrl}>View on Google Maps</a></span>
                </div>    
                
                <div className='top2'>
                    <h1 className='content--title'>{props.item.title}</h1>
                </div>    
                
                <p className='content--date'>{props.item.startDate} - {props.item.endDate}</p>
                <p className='content--description'>{props.item.description}</p>
            </div>
        </main>
    )
}

