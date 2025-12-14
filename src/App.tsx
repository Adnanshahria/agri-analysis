import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import Home from '@/pages/Home';
import SubjectPage from '@/pages/SubjectPage';
import Subjects from '@/pages/Subjects';
import Analytics from '@/pages/Analytics';
import Settings from '@/pages/Settings';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        {/* Subject Routes */}
        <Route
          path="biology"
          element={<SubjectPage subjectKey="biology" title="জীববিজ্ঞান" themeColor="text-emerald-400" />}
        />
        <Route
          path="chemistry"
          element={<SubjectPage subjectKey="chemistry" title="রসায়ন" themeColor="text-amber-400" />}
        />
        <Route
          path="physics"
          element={<SubjectPage subjectKey="physics" title="পদার্থবিজ্ঞান" themeColor="text-blue-400" />}
        />
        <Route
          path="math"
          element={<SubjectPage subjectKey="math" title="গণিত" themeColor="text-red-400" />}
        />
        <Route
          path="english"
          element={<SubjectPage subjectKey="english" title="ইংরেজি" themeColor="text-purple-400" />}
        />

        <Route path="subjects" element={<Subjects />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="settings" element={<Settings />} />

        {/* Catch all - redirect to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
