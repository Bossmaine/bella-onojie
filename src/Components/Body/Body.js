import React from 'react';
import './body.css';
import Line from '../../assets/HR (1).png';
import PhoneOne from '../../assets/Rectangle.png';
import PhoneTwo from '../../assets/Rectangle (1).png';
import PhoneThree from '../../assets/Rectangle (2).png'

function Body() {
  return (
    <div className='body-section'>
        <div className="line-one mb-5">
            <img src={Line} alt="line" />
        </div>
        <h3>How the app works</h3>
        <div className="line-two mt-5">
            <img src={Line} alt="lines" />
        </div>

        <div className="container">
            <div className="row mt-2 rev-row">
                <div className="col-sm-12 col-md-12 col-lg-6">
                    <img src={PhoneOne} alt="phone" />
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6 body-section-texts">
                    <h4>Create an account</h4>
                    <h2 className='mt-3'>Create/login to an existing <br />
                        account to get started
                    </h2>
                    <h5 className='mt-3'>
                    An account is created with your email <br />
                    and a desired password
                    </h5>
                </div>
            </div>
            <div className="row mid-row">
            <div className="col-sm-12 col-md-12 col-lg-6 body-section-texts">
                    <h4>Explore Varieties</h4>
                    <h2 className='mt-3'>Shop for your favorites <br />
                        meal as e dey hot.
                    </h2>
                    <h5 className='mt-3'>
                        Shop for your favorite meals or drinks <br />
                        and enjoy while doing it.
                    </h5>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6">
                    <img src={PhoneTwo} alt="phone" />
                </div>
            </div>

            <div className="row rev-row">
                <div className="col-sm-12 col-md-12 col-lg-6">
                    <img src={PhoneThree} alt="phone" />
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6 body-section-texts">
                    <h4>Checkout</h4>
                    <h2 className='mt-3'>When you done check out <br />
                        and get it delivered.
                    </h2>
                    <h5 className='mt-3'>
                        When you done check out and get it <br />
                        delivered with ease.
                    </h5>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Body
