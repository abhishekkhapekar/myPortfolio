import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
// import DownloadApp from '../../assets/download.webp'
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Project() {
  return (
    <Container id="project">
      <h2>Experience</h2>
      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
          <header>
              <h3>EPAM System (Software Engineer)</h3>
              
            </header>
            <div className="body">
            <h3 style={{ fontSize: '12px' }}>July 2024 - Present</h3>
              <p>
                <ul>
                  <li>Consulting with client, managers or stakeholder for requirment gathering.</li>
                  <li>Working for UBS in IB and derivatives services application to fix the trades which comes from uppstream applications.</li>
                  <li>Resposible for attend the daily scrum call, understand the requirments, frame the new functionality with code, testing and deployment.</li>
                </ul>
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Java</li>
                <li>SpringBoot</li>
                <li>Oracle</li>
                <li>Azure</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
          <header>
              <h3>Amdocs (Software Engineer)</h3>
              
            </header>
            <div className="body">
            <h3 style={{ fontSize: '12px' }}>April 2022 - July 2024</h3>
              <p>
                <ul>
                  <li>Participate in many aspects of the software development lifecycle such as design, code implementation, testing and support.</li>
                  <li>Working on batch applications and EJBs which has been developed on java technology to process billing, credit, and invoice data to consolidate total amount and generate report for Analysis.</li>
                  <li>Gathering and integrating data from various backend services.</li>
                </ul>
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Java</li>
                <li>SpringBoot</li>
                <li>Microservice</li>
                <li>GCP & Pubsub</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
          <header>
              <h3>Altius Customer Services Private Ltd(Junior Java Developer)</h3>
              
            </header>
            <div className="body">
            <h3 style={{ fontSize: '12px' }}>November 2019 - April 2022</h3>
              <p>
                <ul>
                  <li>Worked as java developer on fully dynamic application which helps to acquire lead from different sources and communicate with the customers to increase the sales of healthcare products.</li>
                  <li>Worked for 10+ clients in both BPO and healthcare domain and ensure that client get the leads of targeted customer from different resources.</li>
                  <li>Around 2K leads used to process daily in CRM and helped BPO team to interact with the customers by passing leads to dialer system.</li>
                </ul>
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Java</li>
                <li>SpringBoot</li>
                <li>SQL</li>
                <li>CICD and Postman</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

      </div>
    </Container>
  );
}