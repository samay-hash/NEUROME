import { Routes, Route } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { LoginPage } from './pages/LoginPage';
import { SignupPage } from './pages/SignupPage';
import { OnboardingPage } from './pages/OnboardingPage';
import { DashboardPage } from './pages/DashboardPage';
import { RoomPage } from './pages/RoomPage';
import { RoomsListPage } from './pages/RoomsListPage';
import { CalmOrbPage } from './pages/tools/CalmOrbPage';
import { BrainDumpPage } from './pages/tools/BrainDumpPage';
import { ResetCardsPage } from './pages/tools/ResetCardsPage';
import { AmbientAudioPage } from './pages/tools/AmbientAudioPage';
import { EmergencyPage } from './pages/EmergencyPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/onboarding" element={<OnboardingPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/rooms" element={<RoomsListPage />} />
      <Route path="/room/:id" element={<RoomPage />} />
      <Route path="/tools/calm-orb" element={<CalmOrbPage />} />
      <Route path="/tools/brain-dump" element={<BrainDumpPage />} />
      <Route path="/tools/reset-cards" element={<ResetCardsPage />} />
      <Route path="/tools/audio" element={<AmbientAudioPage />} />
      <Route path="/emergency" element={<EmergencyPage />} />
    </Routes>
  );
}

export default App;
