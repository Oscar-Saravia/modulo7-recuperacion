import Schedule from "./_components/Schedule";
import { motion } from 'framer-motion';

const LandingPage = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>Modulo 7: DESARROLLO FRONTEND CON REACTJS</h1>
        <h3>Bienvenido</h3>
        <p>
          Este modulo se centra en el uso de React, incluyendo la creacion de
          componentes, el manejo de hooks, y el uso de Redux.
        </p>
        <h3>Temas de Cubiertos</h3>
        <Schedule />
        <footer>2024 Modulo 7 - USIP</footer>
      </motion.div>
    </>
  );
};

export default LandingPage;
