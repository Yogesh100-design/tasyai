import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Register from './pages/Register'
import Login from './pages/Login'
import ResetPassword from './pages/ResetPassword'
import NotFound from './pages/NotFound'
import Dashboard from './pages/Dashboard'
import FoundTalent from './pages/FoundTalent'
import Profile from './pages/Profile'
import CreateCompanyProfile from './pages/AddCompany'
import ProfileExpansion from './pages/ProfileExpansion'
import OnboardingChatbot from './pages/OnboardingChatbot'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/found-talent" element={<FoundTalent />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/add-company" element={<CreateCompanyProfile />} />
        <Route path="/profile-expansion" element={<ProfileExpansion />} />
        <Route path="/OnboardingChatbot" element={<OnboardingChatbot />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
