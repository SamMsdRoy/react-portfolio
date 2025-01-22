import {Helmet} from 'react-helmet-async';
export default function About() {
  const shadow = `
  0 0 7px #fff,
  0 0 10px #fff,
  0 0 32px #0fa,
  0 0 52px #0fa`;
  return (<>
   <Helmet>
        <title>About!</title>
        <meta name='description' content='Beginner friendly page for learning React Helmet.' />
  </Helmet>
    <div className="container-fluid d-block mt-3" style={{ height: '80dvh' }}>
      <div className="img-container text-center" style={{ height: '90%' }}>
        <img
          src={
            'https://images.pexels.com/photos/2681319/pexels-photo-2681319.jpeg?auto=compress&cs=tinysrgb&dpr=1'
          }
          alt=""
          className="figure-img "
          height="300px"
          width="50%"
          style={{ borderRadius: '10px' }}
        />
      </div>
      <div
        className="container-fluid"
        style={{ height: '20%',width:"100%",backgroundColor:"black",marginTop:""}}
      >
       
          
          <figcaption className="figure-caption text-justify py-3 about-para">
            Best Project you will ever on is yourself. Life isn't about find
            yourself. Life is about creating yourself.
          </figcaption>
      
      </div>
    </div>
</>  );
}
