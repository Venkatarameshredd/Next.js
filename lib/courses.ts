export type Lesson = {
  title: string;
  duration: string;
  summary: string;
};

export type Course = {
  id: string;
  title: string;
  description: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  lessons: Lesson[];
  duration: string;
  students: number;
};

export const courses: Course[] = [
  {
    id: 'nextjs-creator',
    title: 'Next.js for Creators',
    description: 'Learn how to build fast, beautiful, and interactive websites using Next.js and the App Router.',
    level: 'Beginner',
    duration: '3h 20m',
    students: 384,
    lessons: [
      {
        title: 'Project setup and routing',
        duration: '18m',
        summary: 'Create a new Next.js app, configure routes, and understand the app folder structure.',
      },
      {
        title: 'Layouts, components, and styling',
        duration: '22m',
        summary: 'Build reusable components and page layouts with modern styling techniques.',
      },
      {
        title: 'Dynamic content and course pages',
        duration: '28m',
        summary: 'Render dynamic pages with route parameters and share course data across components.',
      },
      {
        title: 'Publishing your portfolio',
        duration: '16m',
        summary: 'Prepare a site for deployment and connect your portfolio with a learning experience.',
      },
    ],
  },
  {
    id: 'design-systems',
    title: 'Design Systems for Web Projects',
    description: 'Structure consistent UI and component libraries for a fast-growing portfolio or educational platform.',
    level: 'Intermediate',
    duration: '2h 40m',
    students: 215,
    lessons: [
      {
        title: 'Color, spacing, and theme tokens',
        duration: '15m',
        summary: 'Create a design foundation that keeps interface elements consistent across pages.',
      },
      {
        title: 'Reusable card and form components',
        duration: '22m',
        summary: 'Build design system components that work across portfolio and LMS pages.',
      },
      {
        title: 'Accessibility best practices',
        duration: '18m',
        summary: 'Use semantic markup, focus states, and keyboard-friendly interactions.',
      },
    ],
  },
  {
    id: 'teacher-toolkit',
    title: 'Teacher Toolkit: Launch Your First Course',
    description: 'Plan course structure, create lessons, and offer an engaging experience for students.',
    level: 'Beginner',
    duration: '1h 55m',
    students: 163,
    lessons: [
      {
        title: 'Write a strong course outline',
        duration: '14m',
        summary: 'Choose a target audience and build a clear learning path for your course.',
      },
      {
        title: 'Create content that learners love',
        duration: '20m',
        summary: 'Write practical lessons and reinforce concepts with examples.',
      },
      {
        title: 'Publish and share your first lesson',
        duration: '15m',
        summary: 'Prepare course content for your portfolio and attract learners.',
      },
    ],
  },
];
