import React from 'react';
import AddressCard from './addressCard';
import EditAddressModal from './editAddressModal';
import {connect} from 'react-redux';
import AddAddressModal from './addAddressModal';

const deliveryAddress = (props)=> {

    const getIdForModal = (id)=> {
        console.log(`#${id}`);
        return `#${id}`;
    }

   
    return(
        <>
        <div className="checkout-info-container">
            <h3 >Delivery Address</h3>
            
         <div className="info-btn-group">
            <div className="radio-group">

            {props.addresses.map(obj=> (
                <AddressCard
                 key={obj.id}
                 dest={obj.title}
                 address={obj.address}
                 id={obj.id}
                 _id={getIdForModal(obj.id)}
                />
            ))}
      
      
         <button type="button" className="add-btn btn" data-bs-toggle="modal" data-bs-target="#addAddressModal" >
             <div>
                 <svg xmlns="http://www.w3.org/2000/svg" width="10px" height="12px" viewBox="0 0 12 12"><g id="Group_3351" data-name="Group 3351" transform="translate(-1367 -190)"><rect data-name="Rectangle 520" width="12" height="2" rx="1" transform="translate(1367 195)" fill="currentColor"></rect><rect data-name="Rectangle 521" width="12" height="2" rx="1" transform="translate(1374 190) rotate(90)" fill="currentColor"></rect></g></svg>
             </div>
             Add Address
         </button>

         </div>
      </div>
    </div>

{/* MODALS */ }
                {props.addresses.map(obj=>(
                    <EditAddressModal
                     key={obj.id}
                     dest={obj.title}
                     address={obj.address}
                     id={obj.id}
                    />
                ))}  
                
                <AddAddressModal/>
        
    </>
    )
}




const mapStateToProps = (state)=> {
    return{
        addresses: state.addresses
     }
};



export default connect(mapStateToProps)(deliveryAddress);