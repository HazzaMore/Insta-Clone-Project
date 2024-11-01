import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import Auth from "./pages/Auth/Auth"
import PageLayout from "./PageLayout/PageLayout"
import ProfilePage from "./pages/ProfilePage/ProfilePage"

function App() {
  return (
    <PageLayout>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/:username" element={<ProfilePage />} />
    </Routes>
    </PageLayout>
  )
}

export default App
