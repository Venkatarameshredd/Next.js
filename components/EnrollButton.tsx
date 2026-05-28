'use client';

import { useEffect, useState } from 'react';

export default function EnrollButton({ courseId }: { courseId: string }) {
  const storageKey = `enrolled:${courseId}`;
  const [enrolled, setEnrolled] = useState(false);

  useEffect(() => {
    const stored = typeof window !== 'undefined' ? window.localStorage.getItem(storageKey) : null;
    setEnrolled(stored === 'true');
  }, [storageKey]);

  const toggleEnroll = () => {
    const next = !enrolled;
    setEnrolled(next);
    window.localStorage.setItem(storageKey, String(next));
  };

  return (
    <button className="button primary" type="button" onClick={toggleEnroll}>
      {enrolled ? 'Continue Learning' : 'Enroll Now'}
    </button>
  );
}
