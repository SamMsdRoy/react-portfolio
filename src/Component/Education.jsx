import './Education.css';
import edpic from '/assets/edpic.svg';
import {userContext} from "../App"
import { useContext } from 'react';
import {Helmet} from 'react-helmet-async';
export default function Education() {
  const {educationDetails}=useContext(userContext)

  return (<div className="overflow-y">
        <Helmet>
        <title>Education!</title>
        <meta name='description' content='Beginner friendly page for learning React Helmet.' />
        </Helmet>
    <div className="education-page container-fluid" style={{}}>
      <div className="mb-5 p-3 text-center" style={{}}>
        <p className="h3 ">Education Details</p>
      </div>
      <div className="container-fluid doll">
        <div className="d-flex gap-2 flex-wrap align-items-center justify-content-center">
         {educationDetails.map((data,index)=> {
         return <div className="card col-lg-3 col-md-4 col-sm-10 m-4" key={index}>
            <div className="card-head text-center">
              <p className="lead mt-3">{data.title}</p>
            </div>
            <div className="card-body d-flex card-content-box">
              <div
                className="img-edpic d-flex"
                style={{ width: '40%', alignSelf: 'start' }}
              >
                <img src={edpic} alt="" width="50px" height="50px" style={{marginTop:"30px",marginLeft:"15px"}} />
              </div>
              <div className="ed-details" style={{ width: '60%' }}>
                <div className="ed-content my-3">
                  <p className="text-muted ms-4">{data.year}</p>
                  <p className="text-muted ms-4">{data.degree}<sup>{data.degPost}</sup></p>
                  <p className="text-muted ms-4">{data.university}</p>
                </div>
              </div>
            </div>
          </div>
         })} 
        
         
        </div>
      </div>
    </div>
</div>  );
}
