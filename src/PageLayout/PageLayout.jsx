import { Box, Flex } from "@chakra-ui/react";
import SideBar from "../components/SideBar/SideBar";
import { useLocation } from "react-router-dom";
import { auth } from "../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Navbar from "../components/Navbar/Navbar";
import Spinner from 'react-bootstrap/Spinner';


const PageLayout = ({ children }) => {
  const { pathname } = useLocation();
  const [user, loading] = useAuthState(auth);
  const canRenderSidebar = pathname !== "/auth" && user;
  const canRenderNavbar = !user && !loading && pathname !== "/auth";
  
  const checkingUserIsAuthenticated = !user && loading
  if(checkingUserIsAuthenticated) return <PageLayoutSpinner />

  return (
    <Flex flexDirection={canRenderNavbar ? "column" : "row"}>
      {/* Navbar */}
      {canRenderNavbar ? <Navbar /> : null}
      {/* sidebar on the left */}
      {canRenderSidebar && (
        <Box w={{ base: "70px", md: "240px" }}>
          <SideBar />
        </Box>
      )}
      {/* page content on the right */}
      <Box flex={1} w={{ base: "calc(100%-70px)", md: "calc(100%-240px)" }}>
        {children}
      </Box>
    </Flex>
  );
};

export default PageLayout;

const PageLayoutSpinner = () => {
  return (
		<Flex flexDir='column' h='100vh' alignItems='center' justifyContent='center'>
			<Spinner animation="border"/>
		</Flex>
	);
}