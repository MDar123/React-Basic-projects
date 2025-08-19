import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';


const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Experience = lazy(() => import('../pages/Experience'));
const Skills = lazy(() => import('../pages/Skills'));
const Contact = lazy(() => import('../pages/Contact'));
const Projects = lazy(() => import('../pages/Projects'));
const Services = lazy(() => import('../pages/Services'));
const NotFound = lazy(() => import('../pages/NotFound'));

const AppRoutes = () => {
  return (
    <Suspense fallback={<div className="text-center p-4">Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
