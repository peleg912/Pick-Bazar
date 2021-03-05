import React, { Component } from 'react';

class Voucher extends Component{

    state = {
        voucherInputOpen: false
    }

    openVoucher = ()=> {
        this.setState({voucherInputOpen: true});
    }

    closeVoucher= ()=> {
      this.setState({voucherInputOpen : false});
    }

    render(){
        return(
        <div className="CouponBoxWrapper" onClick={this.openVoucher}>
            {! this.state.voucherInputOpen ?
            <button className="checkout-twostyle__HaveCoupon-sc-9tdt16-14 eSMQhK">Do you have a voucher?</button>
            :
            <div className="CouponInputBox">
                <div className="couponstyle__CouponBoxWrapper">
                    <input placeholder="Enter voucher code here" />
                    <button type="button" className="button__StyledButton-sc-1mky0hn-0 jSETsp" onClick={this.closeVoucher}>
                        Apply
                    </button>
                </div>
            </div>
          }
        </div>

        )
    }
} 
   
   


export default Voucher;