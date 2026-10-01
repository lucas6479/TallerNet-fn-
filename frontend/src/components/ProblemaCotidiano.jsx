import { motion } from 'motion/react'
import { problemData } from '../data/problemaCotidianoData'

function ProblemaCotidiano() {
  return (
    <section id="problema" className="pub-section pub-screen pub-bg-b d-flex flex-column justify-content-center">
      <div className="container">

        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <span className="pub-section-eyebrow d-block">El problema cotidiano</span>
          <h2 className="pub-section-title">¿Todavía usás papel y llamadas?</h2>
          <p className="pub-section-sub mx-auto">
            Si te reconocés en alguna de estas situaciones, TallerNet es para vos.
          </p>
        </motion.div>

        <div className="row g-4 g-lg-5">
          {problemData.map((prob, index) => (
            <motion.div
              key={prob.num}
              className="col-lg-4"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.12 }}
            >
              <div className="pub-prob-card d-flex flex-column h-100">
                <div className="pub-prob-ico d-flex align-items-center justify-content-center flex-shrink-0 mb-4">
                  <i className={`bi ${prob.icon}`} aria-hidden="true"></i>
                </div>
                <div className="pub-prob-header d-flex align-items-center">
                  <span className="pub-prob-num">{prob.num}</span>
                  <span className="pub-prob-cat">{prob.category}</span>
                </div>
                <h3 className="pub-prob-title">{prob.title}</h3>
                <ul className="pub-prob-list list-unstyled d-flex flex-column">
                  {prob.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default ProblemaCotidiano
