import { Link } from 'react-router-dom'
import { company, projects } from '../data/company'
import Reveal from '../components/Reveal'
import PageHero from '../components/PageHero'
import { asset } from '../lib/asset'
import './Projects.css'

function Projects() {
  return (
    <div className="page-projects">
      <PageHero
        eyebrow="Our Projects"
        title="Real Projects, Completed Across KZN"
        description={`A closer look at recent work from KB Projects, serving homes and businesses across ${company.area}.`}
        photo="/images/renovations/house-under-construction.jpg"
        photoAlt="KB Projects renovation site"
        secondaryCta={{ label: 'View Full Gallery', to: '/gallery' }}
      />

      <section>
        <div className="container">
          <Reveal as="div" className="projects-list" stagger>
            {projects.map((project, index) => (
              <div className={index % 2 === 1 ? 'project-row reverse' : 'project-row'} key={project.slug}>
                <div className="project-images">
                  <img src={asset(project.image)} alt={project.title} />
                  {project.secondImage && (
                    <img src={asset(project.secondImage)} alt={`${project.title} additional view`} />
                  )}
                </div>
                <div className="project-info">
                  <p className="project-category">{project.category} &middot; {project.location}</p>
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                  <Link to="/contact" className="btn btn-outline btn-sm">Start a Similar Project</Link>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section-dark projects-cta">
        <div className="container">
          <h2>Have a project in mind?</h2>
          <p>Free quotes, no hidden fees, and one team from start to finish.</p>
          <Link to="/contact" className="btn btn-primary">Get a Free Quote</Link>
        </div>
      </section>
    </div>
  )
}

export default Projects
