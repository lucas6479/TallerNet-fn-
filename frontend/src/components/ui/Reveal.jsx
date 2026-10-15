import { motion } from 'motion/react'
function Reveal({ children, className = '', onScroll = false }) {
  // children: el contenido que se va a animar 
  // className: clases CSS que se aplican al div contenedor (por ej. "col-md-4 text-center")
  // onScroll: si es true, la animación se activa cuando el elemento entra en pantalla al hacer scroll
  //si es false, la animación se activa al cargar la página

  // Estado final de la animación: completamente visible y en su posición original
  const visible = { opacity: 1, y: 0 }
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}       // estado inicial: invisible y 20px más abajo
      animate={onScroll ? undefined : visible}      // si NO es onScroll, anima al cargar
      whileInView={onScroll ? visible : undefined}  // si ES onScroll, anima al entrar en pantalla
      viewport={onScroll ? { once: true, amount: 0.2 } : undefined}
      // once: true → la animación ocurre solo la primera vez (no se repite al volver a hacer scroll)
      // amount: 0.2 → se activa cuando el 20% del elemento es visible en pantalla
      transition={{
        duration: 1.2,              // duración de la animación
        delay: 0.1,                 // pequeña demora antes de empezar
        ease: [0.25, 0.1, 0.25, 1], // curva de aceleración (suave al inicio y al final)
      }}
    >
      {children}
    </motion.div>
  )
}

export default Reveal
