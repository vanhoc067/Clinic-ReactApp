import React from 'react';
import { Link } from 'react-router-dom';
import '../css/cards.css';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <div className='cards__item__link' >
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Travel Image'
              src={props.src}
            />
          <span className='cards__item__info'>
            <h4>{props.position}</h4>
            <p className='cards__item__text'>{props.text}</p>
          </span>
          </figure>
        </div>
      </li>
    </>
  );
}

export default CardItem;
