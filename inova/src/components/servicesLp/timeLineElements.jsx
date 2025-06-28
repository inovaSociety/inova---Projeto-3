import UX from "../../images/ux.png";
import SEO from "../../images/seo.png";
import DEV from "../../images/desenvolve.png"


const iconStyleBase = {
  width: "60%",
  height: "60%",
  objectFit: "contain",
};



const timelineElements = [

  {
    id: 1,
    title: "UI DESIGN",
    icon: <img src={UX} alt="UI" style={iconStyleBase}/>, 
     iconStyle: { background: "#06D6A0", display: "flex", alignItems: "center", justifyContent: "center" },
    description: "Criamos interfaces intuitivas, modernas e centradas no usuário, com foco em usabilidade e experiência fluida. Garantimos que cada clique tenha propósito e cada interação, valor.em ipsum dolor sit amet..."
  },
  {
    id: 2,
    title: "DESENVOLVIMENTO",
    icon: <img src={DEV} alt="DEV" style={iconStyleBase}/>, //icone na bolinha da time line
     iconStyle: { background: "#06D6A0", display: "flex", alignItems: "center", justifyContent: "center" },
    description: "Oferecemos soluções completas em desenvolvimento web e software, com performance, segurança e escalabilidade. Transformamos ideias em plataformas digitais funcionais e responsivas para todos os dispositivos.",
    

  },
  {
    id: 3,
    title: "SEO",
     iconStyle: { background: "#06D6A0", display: "flex", alignItems: "center", justifyContent: "center" },
    icon: <img src={SEO} alt="SEO" style={iconStyleBase}/>,
    description: "Aplicamos técnicas avançadas de SEO para melhorar o posicionamento do seu site nos mecanismos de busca. Otimizamos conteúdo, estrutura e performance para atrair mais visitantes e conversões."
  }
]

export default timelineElements;