import React, { SyntheticEvent } from 'react';
import helpers from '../helpers/fetchOptions';
import ReactModal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModal, toggleActionCreator } from '../slices/dashboardSlice';
import store from '../store';

const Dashboard = () => {

  const dispatch = useDispatch();
  const action = toggleActionCreator(true);
  // const modalValue = useSelector(state => state.modalIsOpen.value)
  
  function showAddCard(event: SyntheticEvent) {
    event.preventDefault();
    console.log(store.getState());
    dispatch(action);
    console.log("AFTER ACTION", store.getState());
  }

  const customStyles = {
    overlay: {zIndex: 1000}
  }

  return (
    <div>
      <form> 
        <button type="submit" className="login" onClick={showAddCard}>Add Application</button> 
      </form> 
      <ReactModal isOpen={false} style={customStyles}>
        HEY I RENDER
      </ReactModal>
    </div>
  )
}

export default Dashboard;
