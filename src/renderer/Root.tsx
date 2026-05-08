import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { I18nProvider } from './i18n/I18nProvider';
import Hello from './App';

export default function Root() {
  return (
    <I18nProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Hello />} />
        </Routes>
      </Router>
    </I18nProvider>
  );
}
