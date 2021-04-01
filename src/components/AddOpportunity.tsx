import React, { SyntheticEvent } from 'react';
import helpers from '../helpers/fetchOptions';
import ReactModal from 'react-modal';
import { useDispatch } from 'react-redux';
import { toggleModal, toggleActionCreator } from '../slices/dashboardSlice';
import { useAppSelector } from '../types/reduxTypes';

const AddOpportunity = () => {

  function submitOpportunity (event: SyntheticEvent) {
    event.preventDefault
    const options = helpers.makeFetchJSONRequest('/card')
  }

  return (
    <div className="formContainer"> 
      <form> 
        <label>Company:</label> 
        <input id="Company" className="addOpportunity" type="text" placeholder="Company" />

        <label>Event Name:</label> 
        <input id="Event_name" className="addOpportunity" type="text" placeholder="event name" />

        <label>Event Date:</label> 
        <input id="Event_date" className="addOpportunity" type="text" placeholder="event date" />

        <label>Phone Screen:</label> 
        <input id="Phone_Screen" className="addOpportunity" type="text" placeholder="Phone_Screen" />

        <label>Technical Interview:</label> 
        <input id="Technical_interview" className="addOpportunity" type="text" placeholder="Technical_interview" />

        <label>Status:</label> 
        <input id="Status" className="addOpportunity" type="text" placeholder="Status" />

        <button type="submit" className="addOpportunity">Login</button> 
        
      </form> 
    </div> 
  )
}

export default AddOpportunity;

/*
Necessary State:
user_id
company
event_name string
event_date -> TIMESTAMP
phone_screen bool
tech_interview bool
status string



Card Contents:
Job Title: Senior Engineer

Stages passed:

Interview Date:

pass / rejected buttons => function to move card to corresponding category
*/