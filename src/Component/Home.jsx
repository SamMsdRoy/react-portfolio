import React, { useContext } from 'react';
import './Home.css'
import { userContext } from '../App';
import {Helmet} from 'react-helmet-async'
// import {InstagramEmbed} from "react-social-media-embed"

export default function Home() {
const {initState}=useContext(userContext);
  return (<div>
        <Helmet>
        <title>Home!</title>
        <meta name='description' content='Beginner friendly page for learning React Helmet.' />
        </Helmet>
    <div className="container-fluid ">
      <div className="d-flex align-items-center justify-content-center bb mt-5">
        <div className="col-lg-5 col-md-6 col-sm-5 d-flex flex-column align-content-center justify-items-center">
          <p className="h6 josefin-sans text-danger dare"> Hi,</p>
          <p className="h6 josefin-sans text-primary dare"> I am {initState.name}</p>
          <p className="h6 josefin-sans text-success dare">Web Designer</p>
         
        </div>
        <div className="col-lg-5 col-md-5 col-sm-5 text-center d-flex align-items-center justify-content-center">
          <div
            className="d-block text-center ms-3 align-items-center justify-content-center img-con"
            style={{
           
            }}
          >
            <img
              src={'../assets/IMG_20240621_212557copy-removebg-preview.png'}
              alt=""
              className="img-oop"
              style={{ borderRadius: '60%',}}
            />
            <div className="text-center tooo">
              <p className="text-muted ">{initState.name}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 w-100 text-center mb-2">
        <ul className="list-group list-group-horizontal align-items-center justify-content-center g-3">
          <li className="list-group-item mt-4 ">
            <a href="https://www.instagram.com/samvicky650/" target='__blank' >
              <span className="bi bi-instagram"></span>
            </a>
          </li>
          <div className="clear-fix"></div>
          <li className="list-group-item mt-4">
          <a href="http://www.github.com/samvicky650/" target="__blank" >
              <span className="bi bi-github" style={{scrollMarginBlock:""}}></span>
            </a>
          </li>
        </ul>
      </div>
    
    

    </div>
    </div>
  );
}
