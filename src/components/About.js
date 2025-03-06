import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBAnimation, MDBView, MDBMask } from 'mdbreact';

export default class About extends React.Component {

  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  componentDidMount() {
    document.title = "Health On Hands | About";
  }

  render() {
    return (
      <React.Fragment>
        <MDBContainer fluid className="pl-0 pr-0">
          <MDBAnimation type="" duration="2s">
            <MDBView src='https://ik.imagekit.io/excellenceclasses/about-bg_aPLgCxaZr.jpg' className="h-40vh">
              <MDBMask overlay="black-strong" className="d-flex justify-content-center text-white text-center align-items-end">
                <MDBAnimation type="" duration="1s" delay="0.3s">
                  <div className="page-bg">
                    <p>About Us</p>
                  </div>
                </MDBAnimation>
              </MDBMask>
            </MDBView>
          </MDBAnimation>
        </MDBContainer>
        <MDBContainer>
          <MDBRow>
            <MDBCol className="mt-5">
              <MDBAnimation reveal type="" delay="" duration="2s">
                <p className="h4-responsive font-weight-500"></p>
              </MDBAnimation>
              <MDBAnimation reveal type="" delay="" duration="2s">
                <p className="font-size-1-1rem">
                At Hands-On Health, we are dedicated to helping you live a pain-free, active life. Our clinic is built on the foundation of compassionate care, expert knowledge, and a commitment to improving the well-being of every individual who walks through our doors.            </p>
              </MDBAnimation>
              <br/>
              <br/>
              <MDBAnimation reveal type="" delay="" duration="2s">
                <p className="h4-responsive font-weight-500">Our Mission</p>
              </MDBAnimation>
              <MDBAnimation reveal type="" delay="" duration="2s">
                <p className="font-size-1-1rem">
                Our mission is to empower our patients to take control of their health and achieve their fullest potential through personalized, hands-on physiotherapy treatment. We are committed to providing evidence-based care, combining our deep expertise with a patient-centered approach to deliver lasting results.
                </p>
              </MDBAnimation>
              <br/>
              <br/>

              <MDBAnimation reveal type="" delay="" duration="2s">
                <p className="h4-responsive font-weight-500">Why Choose Us?</p>
              </MDBAnimation>
              <MDBAnimation reveal type="" delay="" duration="2s">
                <p className="font-size-1-1rem">
                  <ul>
                    <li><b>Personalized Care</b>: We believe that every patient is unique, which is why we create tailored treatment plans to meet your specific needs and goals. </li>
                    <li><b>Experienced Team</b>: Our team of skilled physiotherapists has years of experience in treating a wide range of conditions, from sports injuries to chronic pain and rehabilitation. </li>
                    <li><b>Holistic Approach</b>: We take a holistic view of your health, addressing not just the symptoms, but the root causes of pain or mobility issues. </li>
                    <li><b>State-of-the-Art Facility</b>: Our clinic is equipped with the latest physiotherapy technology, providing you with the most effective treatments available.</li>
                  </ul>
                </p>
              </MDBAnimation>
              <br/>
              <br/>

              <MDBAnimation reveal type="" delay="" duration="2s">
                <p className="h4-responsive font-weight-500">Our Team</p>
              </MDBAnimation>
              <MDBAnimation reveal type="" delay="" duration="2s">
                <p className="font-size-1-1rem">
                Our dedicated team consists of highly trained, licensed physiotherapists who are passionate about helping people regain mobility, alleviate pain, and live healthier lives. With expertise in various therapeutic techniques, our physiotherapists work closely with each patient to ensure their treatment plan is effective and aligned with their personal goals.

              Whether you’re recovering from an injury or managing a long-term condition, our team is here to provide support every step of the way.                </p>
              </MDBAnimation>
              <br/>
              <br/>

              <MDBAnimation reveal type="" delay="" duration="2s">
                <p className="h4-responsive font-weight-500">Our Values</p>
              </MDBAnimation>
              <MDBAnimation reveal type="" delay="" duration="2s">
                <p className="font-size-1-1rem">
                  <ul>
                    <li><b>Integrity</b>: We believe in honest, open communication and maintaining the highest ethical standards in everything we do.</li>
                    <li><b>Empathy</b>: We listen to your concerns and provide care with compassion, understanding, and respect. </li>
                    <li><b>Excellence</b>: We are committed to ongoing learning and growth to provide you with the best physiotherapy treatments available. </li>
                  </ul>
                </p>
              </MDBAnimation>
              <br/>
              <br/>

            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </React.Fragment>
    );
  }
}