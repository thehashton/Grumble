import React from 'react'
import './random.scss';
import Modal from '../../components/Global/Modal'

export const Random: React.SFC = () => {

  return (
    <Modal
      class={'random-modal'}
      content={
        <div className="random">
          <h1>Random</h1>
          <div className="choice">
            <div className="choice__image"></div>
            <div className="choice__content">
              <h3 className="choice__title">Munch Munch</h3>
              <p className="choice__type">Chicken wings and stuff</p>
              <span className="rating">4/5 stars</span>
            </div>
          </div>
        </div>
      }
    />
  )
};

export default Random;