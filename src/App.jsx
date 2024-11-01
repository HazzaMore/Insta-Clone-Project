import { Navigate, Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import Auth from "./pages/Auth/Auth"
import PageLayout from "./PageLayout/PageLayout"
import ProfilePage from "./pages/ProfilePage/ProfilePage"
import useAuthStore from "./store/authStore"

function App() {
  const authUser = useAuthStore(state => state.user)
  return (
    <PageLayout>
    <Routes>
      <Route path="/" element={authUser ? <Home /> : <Navigate to="/auth" />} />
      <Route path="/auth" element={!authUser ? <Auth /> : <Navigate to="/" />} />
      <Route path="/:username" element={<ProfilePage />} />
    </Routes>
    </PageLayout>
  )
}

export default App
