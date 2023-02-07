import React from 'react'
import GooglePayButton from '@google-pay/button-react';
import  { useRef, useEffect,useState } from 'react'



const Googlepay = () => {
    const ref = useRef(null)
    const [inp, setinp] = useState("")
    const onclik = ()=> {
        // window.location.href='https://google.com'
        console.log('gpay li ottiddu' + inp)
      
    }

    
  return (
    <>
    <form>
    <input type='text' onChange={(e)=>{setinp(e.target.value)}}></input>
    <div className='tw-relative'>
    { (inp.length>0) &&
<GooglePayButton
  environment="TEST" //PRODUCTION
  paymentRequest={{
    apiVersion: 2,
    apiVersionMinor: 0,
      allowedPaymentMethods: [{
        type: 'CARD',
        parameters: {
          allowedAuthMethods: [
            'PAN_ONLY',
            'CRYPTOGRAM_3DS'
          ],
          allowedCardNetworks: [
            'MASTERCARD',
            'VISA',     
          ]
        },
        
          tokenizationSpecification: {
            type: 'PAYMENT_GATEWAY',
            parameters: {
              'gateway': 'example',
              'gatewayMerchantId': 'exampleGatewayMerchantId'        
            }
          },
        }],
        merchantInfo: {
          merchantId: '12345678901234567890', //12345678901234567890 //BCR2DN4TQS733XJD
          merchantName: 'Demo merchant ',   //Demo merchant
        },
        transactionInfo:{
          totalPriceStatus:"FINAL",
          totalPriceLabel:"Total",
          totalPrice:"100",
          currencyCode:"INR",
          countryCode:"IN"
        },
       
        shippingAddressRequired: true,
        callbackIntents:["PAYMENT_AUTHORIZATION"]
    }}
    onLoadPaymentData={paymentRequest=>{
      console.log(paymentRequest)
    }}
    onPaymentAuthorized={paymentData=>{
      console.log('paymentData' +paymentData);
      return{transactionState:'SUCCESS'}
    }}
    existingPaymentMethodRequired='false' 
    buttonColor='Black'
    buttonType='buy' onClick={onclik} disabled={inp.toString().length<1}>
     
    </GooglePayButton>
    
}
    </div>
    </form>

    </>
  )
}

export default Googlepay