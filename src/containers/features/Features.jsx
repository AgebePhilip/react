import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Web Design',
    text: 'The User Interface and the User Experience of most mpdern web applications are implemented using HTML5,CSS3,JAVASCRIPT ES6 AND REACTJS.',
  },
  {
    title: 'Web Development',
    text: 'We develop Responsive websites ranging from  Personal website, E=commerce  using modern programming Languages like Java, Angular,vue,React anf PHP.',
  },
  {
    title: 'MobileApp Development',
    text: ' We are a knack of building cross-platform and responsive mobile Apps using React-Native,PhoneGap,Iconic and Redux anf ReactJs for the front end',
  },
  {
    title: 'Computer Softwares ',
    text: 'we are expert in developing various computer softwares for schools, Hotels,industries, Hospitals, and many more.  ',
  },
  {
    title: 'Digital Marketing',
    text: 'digital marketing strategies has rapidly developed beyond the scope in our world today. Social media platforms has played a vital role in our digital marketing tody ',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
