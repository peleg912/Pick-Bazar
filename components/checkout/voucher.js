import React, { Component } from 'react';
import {connect} from 'react-redux';
import translation from '../../utills/translation';

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
            <button className="checkout-twostyle__HaveCoupon-sc-9tdt16-14 eSMQhK">{translation[this.props.lang].checkout.haveVoucher}</button>
            :
            <div className="CouponInputBox">
                <div className="couponstyle__CouponBoxWrapper">
                    <input placeholder= {translation[this.props.lang].modals.enterVoucher}/>
                    <button type="button" className="button__StyledButton-sc-1mky0hn-0 jSETsp" onClick={this.closeVoucher}>
                    {translation[this.props.lang].modals.apply}
                    </button>
                </div>
            </div>
          }
        </div>

        )
    }
} 
   
const mapStateToProps = (state)=>{
    return{
        lang: state.currentLang
    }
}


 

export default connect(mapStateToProps)(Voucher);