"use client"; // Required because you are using dynamic imports/client components

import dynamic from 'next/dynamic';

// Dynamic loaders with skeletons (optional but recommended)
const Splash = dynamic(() => import('./@pages/splash'), { ssr: false });
const AboutMe = dynamic(() => import('./@pages/about_me'), { ssr: false });
const Community = dynamic(() => import('./@pages/community'), { ssr: false });
const WorkCv = dynamic(() => import('./@pages/work_cv'), { ssr: false });
const Projects = dynamic(() => import('./@pages/projects'), { ssr: false });

export default function HomePage() {
  return (
    <>
      <Splash />
      <Community />
      <AboutMe />
      <WorkCv />
      <Projects />
    </>
  );
}