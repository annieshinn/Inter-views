import React, { SyntheticEvent } from 'react';
import helpers from '../helpers/fetchOptions';
import ReactModal from 'react-modal';
import { useDispatch } from 'react-redux';
import { toggleModal, toggleActionCreator } from '../slices/dashboardSlice';
import { useAppSelector } from '../types/reduxTypes';

const Dashboard = () => {

  const dispatch = useDispatch();
  const modalValue = useAppSelector(state => state.modalIsOpen.renderModal)

  function showAddCard(event: SyntheticEvent) {
    event.preventDefault();

    const action = toggleActionCreator(!modalValue);
    dispatch(action);
  }

  const customStyles = {
    overlay: {zIndex: 1000}
  }

  return (
    <div>
      <form> 
        <button type="submit" className="login" onClick={showAddCard}>Add Application</button> 
      </form> 
                                            {/* remove aria prop and set AppElement for screen readers.  */}
      <ReactModal 
      isOpen={modalValue} 
      style={customStyles} 
      ariaHideApp={false}
      onRequestClose={showAddCard}
      >
        HEY I RENDER
      </ReactModal>
    </div>
  )
}

export default Dashboard;
