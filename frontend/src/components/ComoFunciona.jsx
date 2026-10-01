import { useState } from 'react'
import { motion } from 'motion/react'
import { showcaseTabs } from '../data/comoFuncionaData'
import VistaDashboard    from './vistasComoFunciona/VistaDashboard'
import VistaOrdenes      from './vistasComoFunciona/VistaOrdenes'
import VistaVehiculos    from './vistasComoFunciona/VistaVehiculos'
import VistaStock        from './vistasComoFunciona/VistaStock'
import VistaTransferencias from './vistasComoFunciona/VistaTransferencias'
import VistaSucursales   from './vistasComoFunciona/VistaSucursales'

function ComoFunciona() {
  const [activeTab, setActiveTab] = useState('dashboard')

  const activeTitle = showcaseTabs.find(t => t.id === activeTab).chromeTitle

  return (
    <section id="showcase" className="pub-sc pub-screen pub-bg-a d-flex flex-column justify-content-center">
      <div className="container">

        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <span className="pub-section-eyebrow d-block">CÓMO FUNCIONA</span>
          <h2 className="pub-section-title">Controlá todo desde un mismo lugar</h2>
          <p className="pub-section-sub mx-auto">
            Cada módulo está conectado. Lo que pasa en una sucursal se refleja en toda la red.
          </p>
        </motion.div>

        {/* Ventana de app */}
        <div className="pub-sc-window">
          <div className="pub-sc-chrome">
            <div className="pub-mock-dots">
              <span className="pub-mock-dot"></span>
              <span className="pub-mock-dot"></span>
              <span className="pub-mock-dot"></span>
            </div>
            <span className="pub-sc-chrome-title">{activeTitle}</span>
          </div>
          <div className="pub-sc-body">
            <div className="pub-sc-view is-active">
              {activeTab === 'dashboard'      && <VistaDashboard />}
              {activeTab === 'ordenes'        && <VistaOrdenes />}
              {activeTab === 'vehiculos'      && <VistaVehiculos />}
              {activeTab === 'stock'          && <VistaStock />}
              {activeTab === 'transferencias' && <VistaTransferencias />}
              {activeTab === 'sucursales'     && <VistaSucursales />}
            </div>
          </div>
        </div>

        {/* Dock de pestañas */}
        <div className="pub-sc-dock d-flex justify-content-center mx-auto">
          <div className="pub-sc-dock-inner">
            {showcaseTabs.map(tab => (
              <button
                key={tab.id}
                className={`pub-sc-tab${activeTab === tab.id ? ' is-active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <i className={`bi ${tab.icon}`}></i> {tab.label}
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default ComoFunciona
