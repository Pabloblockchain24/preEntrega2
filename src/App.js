import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import {BrowserRouter, Routes, Route } from "react-router-dom"
import { ChakraProvider } from "@chakra-ui/react";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
function App() {
  return (
    <BrowserRouter>
        <ChakraProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={ <ItemListContainer />}/>
          <Route path="/categoria/:categoriaId" element={ <ItemListContainer />}/>
          <Route path="/item/:itemId" element={ <ItemDetailContainer />}/>
          <Route path="*" element={<h1> 404 not found </h1>}/>
        </Routes>
        <Footer />
    </ChakraProvider>
    </BrowserRouter>

  );
}

export default App;
