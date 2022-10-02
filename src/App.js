import Banner from "./components/banner/Banner";
import Card from "./components/card/Card";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import './App.css';
import MyCartContext from "./context/Cartcontext";
import { useState } from "react";

function App() {

    const [increment, setIncrement] = useState(0);

    return (
        <MyCartContext.Provider value={{ increment, setIncrement }}>
            <>
                <Navbar />
                <Banner />
                <Card />
                <Footer />
            </>
        </MyCartContext.Provider>
    );
}

export default App;
