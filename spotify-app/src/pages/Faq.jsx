import React, { useState } from 'react';

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: 'What is Lorem Ipsum?',
      answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      question: 'Why do we use it?',
      answer: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
    {
      question: 'Where does it come from?',
      answer: 'Contrary to popular belief, Lorem Ipsum is not simply random text.',
    },
  ];

  return (
    <div className="faq-page" style={{ textAlign: 'center' }}>
      <h1>Frequently Asked Questions</h1>
      <div className="faq-list" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {faqData.map((faq, index) => (
          <div key={index} className="faq-item" style={{ backgroundColor: '#f7f7f7', borderRadius: '8px', padding: '20px', margin: '10px 0', maxWidth: '500px', width: '100%', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
            <div className={`faq-question ${activeIndex === index ? 'active' : ''}`} onClick={() => toggleAccordion(index)} style={{ fontSize: '18px', fontWeight: 'bold', cursor: 'pointer' }}>
              {faq.question}
            </div>
            {activeIndex === index && (
              <div className="faq-answer" style={{ marginTop: '10px' }}>
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
