import { motion } from 'motion/react'
import { teamMembers } from '../data/equipoData'

function Equipo() {
  return (
    <section id="equipo" className="pub-section pub-screen pub-bg-a d-flex flex-column justify-content-center">
      <div className="container">

        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <span className="pub-section-eyebrow d-block">El equipo</span>
          <h2 className="pub-section-title">El equipo detrás de TallerNet</h2>
          <p className="pub-section-sub mx-auto">Diseñado y desarrollado como parte del proyecto TallerNet.</p>
        </motion.div>

        <div className="row g-4 justify-content-center">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.initials}
              className="col-lg-4 col-md-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.12 }}
            >
              <div className="pub-team-card d-flex flex-column align-items-center text-center h-100">
                <div className="pub-team-avatar d-flex align-items-center justify-content-center flex-shrink-0 mb-4">
                  {member.initials}
                </div>
                <h3 className="pub-team-name">{member.name}</h3>
                <p className="pub-team-role">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Equipo
