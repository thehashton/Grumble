import React from 'react'
import './travel.scss';
import Modal from '../../components/Global/Modal';

export const TravelTo: React.SFC = () => {

  return (
    <Modal
      class={'travel-to-modal'}
      content={
        <div className="travel-to">
          <h1>Travel To Location</h1>
          <p>Eat somewhere you're going</p>
        </div>
      }
    />
  )
};

export default TravelTo;
