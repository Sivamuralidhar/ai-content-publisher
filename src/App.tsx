import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from './components/Layout/MainLayout';
import { PostEditor } from './components/PostEditor';
import { PostsHistory } from './pages/PostsHistory';
import { ContentIdeas } from './pages/ContentIdeas';
import { AITemplates } from './pages/AITemplates';
import { Pricing } from './pages/Pricing';
import { Settings } from './pages/Settings';
import { SignUp } from './pages/Auth/SignUp';
import { About } from './pages/About';
import { useEffect } from 'react';
import { createTables, exampleInsert } from './components/Data/ConnectDB';
export default function App() {
  useEffect(() => {
    const initializeSupabase = async () => {
      await createTables(); // Create tables
      await exampleInsert(); // Insert example data
    };

    initializeSupabase();
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<MainLayout />}>
          <Route index element={<PostEditor />} />
          <Route path="posts" element={<PostsHistory />} />
          <Route path="ideas" element={<ContentIdeas />} />
          <Route path="templates" element={<AITemplates />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="settings" element={<Settings />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Router>
  );
}