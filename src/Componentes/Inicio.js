import React, {useState} from 'react';
import '../App.css';

const MainContent = () => {

  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const handleDivClick = (content) => {
    setModalContent(content);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="main-container">
      <div className="option" onClick={() => handleDivClick('La usabilidad se refiere a la facilidad con la que los usuarios pueden interactuar con un producto o servicio, especialmente en el ámbito digital. Para los profesionales, es fundamental comprender conceptos como la eficiencia (realizar tareas con rapidez), la efectividad (completar tareas correctamente) y la satisfacción (experiencia del usuario). Es esencial realizar pruebas de usabilidad, recolectar feedback de usuarios reales y aplicar principios de diseño centrado en el usuario para crear interfaces intuitivas y accesibles, mejorando así la experiencia general del usuario y aumentando la adopción del producto.')}>
          Nociones básicas para profesionales.
          <span class="tooltiptext">Da click para ver mas</span>
        </div>
        <div className="option" onClick={() => handleDivClick('La usabilidad y la accesibilidad son conceptos clave en el diseño de productos y servicios digitales. La usabilidad se centra en la facilidad con que los usuarios pueden utilizar un sistema para lograr sus objetivos de manera efectiva y eficiente, mientras que la accesibilidad se refiere a la capacidad de un producto para ser utilizado por personas con diversas capacidades, incluidas aquellas con discapacidades. Ambos aspectos son cruciales para garantizar que todos los usuarios, independientemente de sus habilidades, puedan interactuar con la tecnología de manera satisfactoria y productiva.')}>
          Usabilidad y accesibilidad.
          <span class="tooltiptext">Da click para ver mas</span>
        </div>
        <div className="option" onClick={() => handleDivClick('La ingeniería de usabilidad es un enfoque disciplinado que busca mejorar la interacción entre los usuarios y los sistemas mediante el diseño de interfaces intuitivas y eficientes. Este proceso implica la aplicación de principios de psicología, diseño gráfico y ergonomía para crear productos que se adapten a las necesidades y comportamientos de los usuarios. A través de métodos como pruebas de usabilidad, análisis de tareas y prototipos, los ingenieros de usabilidad identifican problemas y optimizan la experiencia del usuario, asegurando que los sistemas sean no solo funcionales, sino también agradables de utilizar.')}>
          Ingeniería de usabilidad.
          <span class="tooltiptext">Da click para ver mas</span>
        </div>
        <div className="option" onClick={() => handleDivClick('El ciclo de vida de la usabilidad es un proceso continuo que abarca varias etapas clave para garantizar que un producto o sistema sea efectivo y fácil de usar. Comienza con la investigación de usuarios y la definición de requisitos, seguida por el diseño y desarrollo de prototipos. Luego, se realizan pruebas de usabilidad para identificar problemas y recopilar retroalimentación de los usuarios. Con base en esta información, se realizan iteraciones y mejoras en el diseño. Finalmente, una vez lanzado el producto, se monitorea su uso y se recopilan datos para realizar ajustes futuros, creando un ciclo de mejora constante que optimiza la experiencia del usuario.')}>
          Ciclo de vida de la usabilidad.
          <span class="tooltiptext">Da click para ver mas</span>
        </div>
        <div className="option" onClick={() => handleDivClick('Los métodos de evaluación en usabilidad son técnicas utilizadas para medir la efectividad, eficiencia y satisfacción del usuario con un producto o sistema. Estos métodos se dividen en dos categorías principales: evaluaciones heurísticas y pruebas con usuarios. Las evaluaciones heurísticas implican la revisión de la interfaz por expertos en usabilidad, quienes identifican problemas de diseño basándose en principios establecidos. Por otro lado, las pruebas con usuarios involucran observar a usuarios reales mientras interactúan con el sistema, permitiendo la identificación de dificultades y la recolección de retroalimentación directa. Ambos enfoques son cruciales para mejorar la usabilidad y garantizar una experiencia de usuario óptima.')}>
          Métodos de evaluación.
          <span class="tooltiptext">Da click para ver mas</span>
        </div>
        <div className="option" onClick={() => handleDivClick('El diseño web centrado en el usuario (UCD, por sus siglas en inglés) es un enfoque que prioriza las necesidades, preferencias y comportamientos de los usuarios durante todo el proceso de desarrollo de un sitio web. Este método implica la investigación exhaustiva de los usuarios para comprender sus expectativas, seguida de la creación de prototipos y pruebas que permiten iterar y ajustar el diseño en función del feedback recibido. Al integrar la perspectiva del usuario desde la planificación inicial hasta la implementación final, el UCD busca crear sitios web intuitivos, accesibles y agradables, mejorando así la experiencia del usuario y aumentando la efectividad del sitio.')}>
          Diseño web centrado en el usuario.
          <span class="tooltiptext">Da click para ver mas</span>
        </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={closeModal}>X</span>
            <p>{modalContent}</p>
          </div>
        </div>
      )}
    </div>

    
  );
};

export default MainContent;
