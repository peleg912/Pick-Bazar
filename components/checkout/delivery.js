import React from 'react';
import DeliveryCard from './deliveryCard';
import EditAddressModal from './editAddressModal'

const delivery = (props)=> {
    return(
        <>
        <div className="checkout-info-container">
            <h3 >Delivery Address</h3>
            
         <div className="info-btn-group">
            <div className="radio-group">

        <DeliveryCard dest="Home" address="27 Street, 2569 Heritage Road Visalia, CA 93291" _id="#editAddressModal_1"/>
        <DeliveryCard dest="Office" address="33 Baker Street, Crescent Road, CA 65746" _id="#editAddressModal_2"/>
      
         <button type="button" className="add-btn">
             <div>
                 <svg xmlns="http://www.w3.org/2000/svg" width="10px" height="12px" viewBox="0 0 12 12"><g id="Group_3351" data-name="Group 3351" transform="translate(-1367 -190)"><rect data-name="Rectangle 520" width="12" height="2" rx="1" transform="translate(1367 195)" fill="currentColor"></rect><rect data-name="Rectangle 521" width="12" height="2" rx="1" transform="translate(1374 190) rotate(90)" fill="currentColor"></rect></g></svg>
             </div>
             Add Address
         </button>

         </div>
      </div>
    </div>

{/* MODALS */ }
        <EditAddressModal dest="Home" address="27 Street, 2569 Heritage Road Visalia, CA 93291" id="editAddressModal_1"/>
        <EditAddressModal dest="Office" address="33 Baker Street, Crescent Road, CA 65746"  id="editAddressModal_2"/>
{/* // */}
    </>
    )
}

export default delivery;