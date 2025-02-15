import Styles from './modules/Projects.module.css'
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { useRef } from 'react';


const firebaseConfig = {
  apiKey: "AIzaSyAKp7JuUeKn1H6X5laKbNfmWOidIqHWMw0",
  authDomain: "projetos-portfolio-4dc44.firebaseapp.com",
  projectId: "projetos-portfolio-4dc44",
  storageBucket: "projetos-portfolio-4dc44.firebasestorage.app",
  messagingSenderId: "808984400804",
  appId: "1:808984400804:web:5f4e4806b2605b0f4a2731",
  measurementId: "G-5V2JSSVQND"
};

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app)

function Projects() {
  const name = useRef(null)
  const imagem = useRef(null)
  const video = useRef(null)
  const techs = useRef(null)
  const descricao = useRef(null)
  const site = useRef(null)
  const Github = useRef(null)
  const Linkedin = useRef(null)

  async function ProjectsUpload(){
    try {
      const projects = collection(db, "PROJECTS")

      const dados = {
          Nome: name.current.value,
          Imagee: imagem.current.value,
          Video: video.current.value,
          Site: site.current.value,
          Github: Github.current.value,
          Linkedin: Linkedin.current.value,
          Techs: techs.current.value,
          Descricao: descricao.current.value
      }

      await addDoc(projects, dados)

      name.current.value = "";
      imagem.current.value = "";
      video.current.value = "";
      site.current.value = "";
      Github.current.value = "";
      Linkedin.current.value = ""
      techs.current.value = "";
      descricao.current.value = "";

    } catch (error) {
      console.error("Erro ao enviaro arquivo", error)
    }
  }

  return (
    <div className={Styles.Projects}>
      <div className={Styles.ContainerForm}>
        <h1>Envie seu projeto</h1>
        <input ref={name} type='text' placeholder='Digite o Nome do Projeto'></input>
        <input ref={imagem} type='text' placeholder='Cole o link da imagem'></input>
        <input ref={video} type='text' placeholder='Cole o link do Vídeo'></input>
        <input ref={site} type='text' placeholder='Cole o link do site'></input>
        <input ref={site} type='text' placeholder='Cole o link do projeto no Github'></input>
        <input ref={site} type='text' placeholder='Cole o link do projeto no LinkeDin'></input>
        <input ref={techs} type='text' placeholder='Digite as techs utilizadas'></input>
        <textarea ref={descricao} placeholder='Descreva o projeto'></textarea>
        <button onClick={ProjectsUpload}>Enviar</button>
      </div>
    </div>
  );
}

export default Projects;
