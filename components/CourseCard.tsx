import Link from 'next/link';
import type { Course } from '@/lib/courses';

export function CourseCard({ course }: { course: Course }) {
  return (
    <article className="course-card">
      <h3>{course.title}</h3>
      <p>{course.description}</p>
      <div className="course-meta">
        <span>{course.level}</span>
        <span>{course.duration}</span>
        <span>{course.students} students</span>
      </div>
      <Link className="button secondary" href={`/lms/${course.id}`}>
        View Course
      </Link>
    </article>
  );
}
