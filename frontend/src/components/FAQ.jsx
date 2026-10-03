import { motion } from 'motion/react'
import { Accordion } from 'react-bootstrap'
import { faqData } from '../data/faqData'

function FAQ() {
  return (
    <section id="faq" className="pub-section pub-faq pub-screen pub-bg-b d-flex flex-column justify-content-center">
      <div className="container">
        <div className="row g-5 align-items-start">

          {/* Intro */}
          <motion.div
            className="col-lg-4"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <span className="pub-section-eyebrow d-block">Preguntas frecuentes</span>
            <h2 className="pub-section-title">Lo que suelen preguntar</h2>
            <p className="pub-section-sub">
              Todo lo que querés saber antes de empezar.
            </p>
          </motion.div>

          {/* Accordion */}
          <motion.div
            className="col-lg-7 offset-lg-1"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.15 }}
          >
            <Accordion defaultActiveKey="faq1">
              {faqData.map(item => (
                <Accordion.Item key={item.id} eventKey={item.id}>
                  <Accordion.Header>
                    <i className={`bi ${item.icon} pub-faq-ico`} aria-hidden="true"></i>
                    {item.question}
                  </Accordion.Header>
                  <Accordion.Body>
                    {item.answer}
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default FAQ
