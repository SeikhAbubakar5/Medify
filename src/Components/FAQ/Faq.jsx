import React, { useState } from 'react';
import "./Faq.css";
import heartIcon from "../../assets/HeartIcon.png";
import Smile from "../../assets/Smile.png";
import FaqDoctor from "../../assets/FaqDoctor.png";
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
         // Collapse
      setActiveIndex(null); 
    } else {
        // Expand 
      setActiveIndex(index); // Expand 
    }
  };

  const faqs = [
    {
      question: "Why choose our medical for your family?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel lorem maximus risus varius elementum eget et purus"
    },
    {
      question: "Why we are different from others?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel lorem maximus risus varius elementum eget et purus"
    },
    {
      question: "How to get appointment for emergency cases?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel lorem maximus risus varius elementum eget et purus"
    },
    {
      question: "What insurance plans do you accept?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel lorem maximus risus varius elementum eget et purus."
    }
  ];

  return (
    <div className='faqText'>
        <p>Get Your Answer</p>
        <h2>Frequently Asked Questions</h2>
        <div className='faqContainer'>
      <div className='faqSub'>
        <div className='FaqIcon'>
            <div>
            <img src={Smile} alt='Smile'/>
            </div>
          <div>
            <h4>84k+</h4>
            <p>Happy Patients</p>
          </div>
        </div>
        <div className='FaqDoctorImg'>
          <img src={FaqDoctor} alt='FaqDoctor'/>
        </div>
        <div className='heartIcon'>
          <img src={heartIcon} alt='heartIcon'/>
        </div>
      </div>
      
      <div className='FaqAccordion'>
        {faqs.map((faq, index) => (
          <div key={index} className='AccordionItem'>
            <div className='AccordionHeader' onClick={() => toggleAccordion(index)}>
              <h4>{faq.question}</h4>
              <span>{activeIndex === index ? <CloseIcon/> : <AddIcon style={{color:'#2AA7FF'}}/>}</span>
            </div>
            {activeIndex === index && (
              <div className='AccordionContent'>
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Faq;
