import React from 'react';
function OpenAccount() {
  return ( 
    <div className='container p-5 m-5'>
      <div className ='row text-center'>
        <h1 className='text-muted'>Open a Zerodha account</h1>
        <p className='fs-5 mt-2'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
        <button className='rounded-1 p-2 fs-5 mt-5'
        style={{width:"15%",margin:"0 auto",backgroundColor:"#387ed1",color: "#fff",border: "1px solid rgba(0, 0, 0, 0)"}}>Sign up for free</button>
      </div>  
    </div>
   );
}

export default OpenAccount;