import React from 'react';
import '../css/Home.css';
import { MDBContainer, MDBAnimation, MDBIcon, MDBRow, MDBCol } from 'mdbreact';
import Testimonials from './Testimonials';
import Carousel from './Carousel';
import { testinomialsData } from '../data/TestimonialsData';
import { homePageData } from '../data/HomePageData';

export default class Home extends React.Component {

  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  componentDidMount() {
    document.title = "Health On Hands | Home";
  }

  render() {
    return (
      <div>
        <MDBContainer fluid className="pl-0 pr-0">
          <Carousel homePageData={homePageData} showControlButtons={false} />
        </MDBContainer>
        <MDBContainer>

        <section className="text-center pb-5 my-5">
            <MDBAnimation reveal type="" duration="1.5s">
              <h4 className="my-5">
              At Hands-On Health, we’re dedicated to helping you live a pain-free, active life. Whether you're recovering from an injury, managing chronic pain, or improving your mobility, our team of experienced physiotherapists is here to support your journey to better health.
With a personalized, hands-on approach, we provide a range of services tailored to your unique needs. Our goal is to help you achieve lasting relief, improve your movement, and regain your confidence in everyday activities.
        </h4>
            </MDBAnimation>
           </section>

          <section className="text-center pb-5 pt-2 my-5">
            <MDBAnimation reveal type="" duration="1.5s">
              <h1 className="font-weight-bold my-5">
                Our Standards
        </h1>
            </MDBAnimation>
            <MDBRow>
              <MDBCol md="4">
                <MDBAnimation reveal type="" duration="2s">
                  <MDBIcon icon="medkit" size="4x" className="red-text" />
                  <h4 className="font-weight-bold my-4">Your Health, Our Priority</h4>
                  <p className="mb-md-0 mb-5 font-size-1-25rem">
                  At Hands-On Health, we believe in putting you first. Our approach is tailored to your individual needs, ensuring that every treatment plan is personalized to help you achieve your health goals. Whether you're recovering from an injury or looking to manage a chronic condition, we're here to help you feel your best every step of the way.            </p>
                </MDBAnimation>
              </MDBCol>
              <MDBCol md="4">
                <MDBAnimation reveal type="" duration="2s">
                  <MDBIcon icon="dumbbell" size="4x" className="cyan-text" />
                  <h4 className="font-weight-bold my-4">Tailored Treatment Plans</h4>
                  <p className="mb-md-0 mb-5 font-size-1-25rem">
                  We offer a range of physiotherapy services to help you regain mobility and alleviate pain. Our treatments include manual therapy, exercise programs, posture correction, and injury rehabilitation. During your first visit, we’ll conduct a thorough assessment to create a treatment plan designed specifically for you. No jargon—just a clear path to healing.            </p>
                </MDBAnimation>
              </MDBCol>
              <MDBCol md="4">
                <MDBAnimation reveal type="" duration="2s">
                  <MDBIcon icon="user-nurse" size="4x" className="orange-text" />
                  <h4 className="font-weight-bold my-4">Expert Care, Proven Results</h4>
                  <p className="mb-md-0 mb-5 font-size-1-25rem">
                  Our team of licensed physiotherapists are highly trained and experienced in treating a variety of conditions. We use the latest evidence-based techniques to provide you with the most effective treatments. Whether you are recovering from a sports injury, dealing with back pain, or managing a long-term condition, our expert team is committed to supporting you throughout your recovery process.            </p>
                </MDBAnimation>
              </MDBCol>
            </MDBRow>
          </section>

          <section style={{display: "none"}} className="text-center pb-5 my-5">
            <MDBAnimation reveal type="" duration="1.5s">
              <h1 className="font-weight-bold my-5">
                Our amazing team
        </h1>
            </MDBAnimation>
            <MDBRow>
              <MDBCol md="4">
                <MDBAnimation reveal type="" duration="2s">
                  <div>
                    {this.props.showAvatar && <img
                      src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg"
                      className="rounded-circle z-depth-1 img-fluid"
                      alt="Sample avatar"
                    />}
                  </div>
                  <h4 className="font-weight-bold my-4">Chahat</h4>
                  <h6 className="font-weight-bold grey-text mb-3 font-size-1-25rem">Bachelor of Education</h6>
                  <p className="font-size-1-1rem">
                    
            </p>
                  <div className="mb-md-0 mb-5">
                    <a className="btn-floating btn-lg mx-1 text-white" href="https://www.linkedin.com/in/chahat-sharma-excellence-classes" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-linkedin-in p-2 rounded linkedin-icon"> </i>
                    </a>
                  </div>
                </MDBAnimation>
              </MDBCol>
              <MDBCol md="4">
                <MDBAnimation reveal type="" duration="2s">
                  <div>
                    {this.props.showAvatar && <img
                      src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
                      className="rounded-circle z-depth-1 img-fluid"
                      alt="Sample avatar"
                    />}
                  </div>
                  <h4 className="font-weight-bold my-4">Priyanka</h4>
                  <h6 className="font-weight-bold grey-text mb-3 font-size-1-25rem">Bachelor of Technology</h6>
                  <p className="font-size-1-1rem">
                    
            </p>
                  <div className="mb-md-0 mb-5">
                    <a className="btn-floating btn-lg mx-1 text-white" href="https://www.linkedin.com/in/priyanka-b-581393191" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-linkedin-in p-2 rounded linkedin-icon"> </i>
                    </a>
                  </div>
                </MDBAnimation>
              </MDBCol>
              <MDBCol md="4">
                <MDBAnimation reveal type="" duration="2s">
                  <div>
                    {this.props.showAvatar && <img
                      src="https://mdbootstrap.com/img/Photos/Avatars/img%20(2).jpg"
                      className="rounded-circle z-depth-1 img-fluid"
                      alt="Sample avatar"
                    />}
                  </div>
                  <h4 className="font-weight-bold my-4">Preeti</h4>
                  <h6 className="font-weight-bold grey-text mb-3 font-size-1-25rem">Bachelor of Physiotherapy</h6>
                  <p className="font-size-1-1rem">
                   
            </p>
                  <div className="mb-md-0 mb-5">
                    <a className="btn-floating btn-lg mx-1 text-white" href="https://www.linkedin.com/in/preeti-sharma-excellence-classes" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-linkedin-in p-2 rounded linkedin-icon"> </i>
                    </a>
                  </div>
                </MDBAnimation>
              </MDBCol>
            </MDBRow>
          </section>
        </MDBContainer>
        <MDBContainer style={{display: "none"}} fluid className="pl-0 pr-0">
          <Testimonials testinomialsData={testinomialsData} showControlButtons={false} showBullets={true} />
        </MDBContainer>
      </div>
    );
  }
}
