import React from 'react';
import ContactCard from './contactCard';
import AddContactModal from './addContactModal';
import EditContactModal from './editContactModal';
import {connect} from 'react-redux';


const contactNumber = (props)=> {

    const getIdForModal = (id)=> {
        return `#${id}`;
    }

    return(
        <>
        <div className="checkout-info-container">
            <h3 >Contact Number</h3>
            
         <div className="info-btn-group">
            <div className="radio-group">

            {props.contacts.map(obj=> (
                <ContactCard
                 key={obj.id}
                 title={obj.title}
                 num={obj.num}
                 id={obj.id}
                 _id={getIdForModal(obj.id)}
                />
            ))}
      
      
         <button type="button" className="btn add-btn" data-bs-toggle="modal" data-bs-target="#addContactModal" >
             <div>
                 <svg xmlns="http://www.w3.org/2000/svg" width="10px" height="12px" viewBox="0 0 12 12"><g id="Group_3351" data-name="Group 3351" transform="translate(-1367 -190)"><rect data-name="Rectangle 520" width="12" height="2" rx="1" transform="translate(1367 195)" fill="currentColor"></rect><rect data-name="Rectangle 521" width="12" height="2" rx="1" transform="translate(1374 190) rotate(90)" fill="currentColor"></rect></g></svg>
             </div>
             Add Contact
         </button>

         </div>
      </div>
    </div>

{/* MODALS */ }
                {props.contacts.map(obj=>(
                    <EditContactModal
                     key={obj.id}
                     title={obj.title}
                     num={obj.num}
                     id={obj.id}
                    />
                ))}  
                
                <AddContactModal/> 
        
    </>
    )
}




const mapStateToProps = (state)=> {
    return{
        contacts: state.contacts
     }
};

export default connect(mapStateToProps)(contactNumber);