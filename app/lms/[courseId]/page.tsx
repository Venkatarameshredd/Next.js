import Link from 'next/link';
import EnrollButton from '@/components/EnrollButton';
import { courses } from '@/lib/courses';

export function generateStaticParams() {
  return courses.map((course) => ({ courseId: course.id }));
}

export default function CoursePage({ params }: any) {
  const course = courses.find((item) => item.id === params.courseId);

  if (!course) {
    return (
      <section className="course-detail-page container">
        <h1>Course not found</h1>
        <p>The selected course could not be loaded.</p>
        <Link className="button secondary" href="/lms">
          Back to LMS
        </Link>
      </section>
    );
  }

  return (
    <section className="course-detail-page container">
      <div className="lms-header">
        <div>
          <p className="eyebrow">{course.level} · {course.duration}</p>
          <h1>{course.title}</h1>
          <p>{course.description}</p>
        </div>
        <EnrollButton courseId={course.id} />
      </div>
      <div className="course-meta">
        <span>{course.students} learners enrolled</span>
        <span>{course.lessons.length} lessons</span>
      </div>
      <ul className="lesson-list">
        {course.lessons.map((lesson, index) => (
          <li key={lesson.title} className="lesson-item">
            <strong>{index + 1}. {lesson.title}</strong>
            <p>{lesson.summary}</p>
            <small>{lesson.duration}</small>
          </li>
        ))}
      </ul>
      <div style={{ marginTop: '2rem' }}>
        <Link className="button secondary" href="/lms">
          Back to Courses
        </Link>
      </div>
    </section>
  );
}
