import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout';
const Home = lazy(() => import('@/pages/Home'));
const Project = lazy(() => import('@/pages/Project'));
const ProjectList = lazy(() => import('@/pages/ProjectList'));
const About = lazy(() => import('@/pages/About'));
const NoMatch = lazy(() => import('@/components/NoMatch'));
import "./App.css";



function App() {
  return (
    <Layout>
      <Suspense fallback={<div className="container">Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectList /> } />
        <Route path="/projects/:slug" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      </Suspense>
    </Layout>
  )
}

export default App;
