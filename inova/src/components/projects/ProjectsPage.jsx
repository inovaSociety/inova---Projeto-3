import React from "react";
import Index from "../navbar/Index";
import Footer from "../footer/Footer";
import './ProjectsPage.css'

const ProjectsPage = () => {
  return (
    <>
        <Index />
        <div className="pagina-de-projetos-pai" >
            Pagina para ficar todos os projetos da empresa
        </div>
        <Footer />
    </>
  );
};

export default ProjectsPage;
