import Link from 'next/link';
import { courses } from '@/lib/courses';

export default function Home() {
  const featuredCourses = courses.slice(0, 2);

  return (
    <section className="home-page container">
      <div className="hero-copy">
        <p className="eyebrow">Hi, I'm Ramesh</p>
        <h1>Developer, creator, and course author</h1>
        <p className="description">
          I build polished web experiences and teach creators how to launch modern sites with an integrated
          learning platform. Explore my work, view course content, and see how the LMS fits naturally into the portfolio.
        </p>
        <div className="hero-actions">
          <Link className="button primary" href="/lms">
            Explore Courses
          </Link>
          <a className="button secondary" href="#projects">
            Browse Projects
          </a>
        </div>
      </div>
      <div className="hero-card">
        <div className="hero-card-inner">
          <p className="tag">Featured course</p>
          <h2>{courses[0].title}</h2>
          <p>{courses[0].description}</p>
        </div>
      </div>
      <section id="about" className="section about-section">
        <h2>About This Site</h2>
        <p>
          This project is both a professional portfolio and a learning management system. It shows how course
          content, curriculum pages, and student enrollment can be integrated into a personal website.
        </p>
      </section>
      <section id="projects" className="section projects-section">
        <h2>Featured Work</h2>
        <div className="project-grid">
          <article className="project-card">
            <h3>Portfolio Website</h3>
            <p>Fast, responsive, and designed to highlight skills, projects, and course offerings.</p>
          </article>
          <article className="project-card">
            <h3>LMS Demo</h3>
            <p>Course catalog, detailed lesson pages, and client-side enrollment state built with Next.js.</p>
          </article>
          <article className="project-card">
            <h3>Creator Toolkit</h3>
            <p>Showcase how to teach, validate ideas, and build digital products all in one site.</p>
          </article>
        </div>
      </section>
      <section id="courses" className="section projects-section">
        <h2>Course Preview</h2>
        <div className="course-grid">
          {featuredCourses.map((course) => (
            <article key={course.id} className="course-card">
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <div className="course-meta">
                <span>{course.level}</span>
                <span>{course.duration}</span>
              </div>
              <Link className="button secondary" href={`/lms/${course.id}`}>
                View Course
              </Link>
            </article>
          ))}
        </div>
      </section>
      <section id="contact" className="section contact-section">
        <h2>Work Together</h2>
        <p>
          Ready to build your portfolio and publish a course library? I can help you turn your expertise into
          a polished website with an LMS that scales.
        </p>
        <a className="button primary" href="mailto:hello@example.com">
          Get in Touch
        </a>
      </section>
    </section>
  );
}
