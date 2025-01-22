import { useContext } from 'react';
import './Contact.css';
import { userContext } from '../App';
import {Helmet} from 'react-helmet-async';
export default function Contact() {
 const {initState}= useContext(userContext)
  return (<div className="k-pop">
   <Helmet>
        <title>Contact!</title>
        <meta name='description' content='Beginner friendly page for learning React Helmet.' />
        </Helmet>
    <div
      className="overflow-x"
      style={{ maxWidth: '100%', overflowX: 'hidden' }}
    >
      <img
        src={
          'https://images.pexels.com/photos/3127880/pexels-photo-3127880.jpeg?auto=compress&dpr=1'
        }
        alt=""
        style={{
          position: 'absolute',
          width: '100%',
          height: '100dvh',
          opacity: '.4',
          zIndex: -100,
        }}
      />
 <h3 className="text-center display-4">Contact Us</h3>
      <div className="contact" style={{ position: 'relative' }}>
       
        <form
          action=""
          className="col-lg-4 col-md-5 col-sm-12 glassbox text-center"
          style={{ height: '300px' }}
        >
          <div className="p-4">
            <div className="input-group  mb-3">
              <input type="text" placeholder="Name" className="form-control" />
             <span className="icon">
                <span className="bi bi-person ease"></span>
              </span>
            </div>
            <div className="input-group mb-3">
             <span className="icon"> <span
                className="bi bi-envelope ease"
                style={{
  
                }}
              ></span>
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Your Mail"
              />
            </div>
            <div className="input-group mb-3">
            <span className="icon">
                <span className="bi bi-chat ease"></span>
              </span>
              <textarea
                name=""
                id=""
                cols="5"
                rows="2"
                className="form-control"
                placeholder="Enter Your Message"
              ></textarea>
            </div>
            <button
              type="button"
              className="btn btn-primary form-control  mt-3"
            >
              Submit
            </button>
          </div>
        </form>
        <div className="contact-content">
        <div className="address-page mt-3">
          <p className="h6 mb-3" style={{marginLeft:"10px"}}>Address</p>
          <p className="text-muted para">{initState.address}</p>
        </div>
        <div className="address-page mt-4">
          <p className="h6 mb-3 " style={{marginLeft:"10px"}}>My Email Address</p>
          <p className="text-muted para ">{initState.email}</p>
        </div>
        </div>
      </div> 
    </div>
</div> 
 );
}
