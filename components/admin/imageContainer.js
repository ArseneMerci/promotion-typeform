import React from 'react';
import { FaJediOrder } from 'react-icons/fa';

function imageContainer({order}) {
    return (
        <div className='styleList'>
            <p className="d-inline">Real Pictures:</p>
            {
                order.pictures?
                    order.pictures.map((picture,index)=>{
                        return <a className="imageLinks" key={index} href={picture} target="_blank" rel='noreferrer'>Image{index+1}</a>
                    }):
                    null
            }
            <br></br>
            <p className="d-inline">Plan Image:</p>
                {
                    order.plan? <a className="imageLinks" href={order.plan} target="_blank" rel='noreferrer'>Image</a>:null
                }
            <br></br>         
            <p className="d-inline">Inspirational Pictures:</p>
                {
                    order.inspirationalPics?
                        order.inspirationalPics.map((picture,index)=>{
                            return <a className="imageLinks" key={index} href={picture} target="_blank" rel='noreferrer'>Image{index+1}</a>
                        }):
                        null
                }
        </div>
    );
}

export default imageContainer;
