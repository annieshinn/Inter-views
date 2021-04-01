import React, { SyntheticEvent} from 'react';
import helpers from '../helpers/fetchOptions';
import ReactModal from 'react-modal';

const Dashboard = () => {

  function handleAddCard(event: SyntheticEvent) {
    event.preventDefault();

    const options = helpers.makeFetchJSONRequest('', 'data', 'GET');
    return
  }
  
  const customStyles = {
    overlay: {zIndex: 1000}
  }

  return (
    <div>
      <form> 
        <button type="submit" className="login" onClick={handleAddCard}>Add Application</button> 
      </form> 
      <ReactModal style={customStyles}>
        {/* card creation here */}
      </ReactModal>
    </div>
  )
}

export default Dashboard;
