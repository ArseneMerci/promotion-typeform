import React from 'react';

function OtherData({ order }) {
    return (
        <div className='row styleList'>
            <div className='col-6'>
                <p className='font-weight-bold'>Style:</p>
                <ul className=''>
                {order.style?order.style.map((style)=>{
                    return <li key={style}>{style}</li>
                }):null}
                </ul>
            </div>
            <div className='col-6'>
                <p>Improvements:</p>
                <ul className=''>
                {order.improvements?order.improvements.map((improvement)=>{
                    return <li key={improvement}>{improvement}</li>
                }):null}
                </ul>
            </div>
        </div>
    );
}

export default OtherData;
