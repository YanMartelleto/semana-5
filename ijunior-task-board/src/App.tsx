import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import InitialPage  from './pages/InitialPage';
import  ClientsPage  from './pages/ClientsPage';
import ServiceOrdersPage from './pages/ServiceOrdersPage';




const App = () => { 
  return (
    <BrowserRouter> 
      <Routes>
        <Route element = {<MainLayout />}> 
          <Route path="/" element={<InitialPage />} />
          <Route path="/clients" element={<ClientsPage />} />
          <Route path="/service-orders" element={<ServiceOrdersPage />} />
        </Route>
      </ Routes> 
    </BrowserRouter>
  );
};

export default App;