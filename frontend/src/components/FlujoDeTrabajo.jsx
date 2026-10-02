import { motion } from 'motion/react'
import { workflowSteps } from '../data/flujoDeTrabajoData'

function FlujoDeTrabajo() {
  return (
    <section id="flujo" className="pub-section pub-screen pub-bg-b d-flex flex-column justify-content-center">
      <div className="container">

        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <span className="pub-section-eyebrow d-block">Flujo de trabajo</span>
          <h2 className="pub-section-title">De ingreso a entrega</h2>
          <p className="pub-section-sub mx-auto">El recorrido completo de una orden de trabajo.</p>
        </motion.div>

        <div className="pub-flow d-flex align-items-start">
          {workflowSteps.map((step, index) => (
            <motion.div
              key={step.num}
              className="pub-flow-step"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.1 }}
            >
              <div className="pub-flow-node-wrap d-flex flex-column align-items-center">
                <span className="pub-flow-num">{step.num}</span>
                <div className="pub-flow-dot d-flex align-items-center justify-content-center position-relative">
                  <i className={`bi ${step.icon}`} aria-hidden="true"></i>
                </div>
              </div>
              <div className="pub-flow-content">
                <h3 className="pub-flow-title">{step.title}</h3>
                <p className="pub-flow-text">{step.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default FlujoDeTrabajo
