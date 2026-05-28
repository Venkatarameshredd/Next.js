import Link from 'next/link';
import { CourseCard } from '@/components/CourseCard';
import { courses } from '@/lib/courses';

export default function LMSPage() {
  return (
    <section className="lms-page container">
      <div className="lms-header">
        <div>
          <p className="eyebrow">Learning Management System</p>
          <h1>Courses for creators and educators</h1>
          <p>
            Explore ready-to-use courses that you can integrate into your portfolio site. This LMS section
            includes a catalog, course detail pages, and lesson structure.
          </p>
        </div>
        <Link className="button secondary" href="/">
          Back to Portfolio
        </Link>
      </div>
      <div className="course-grid">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
}
