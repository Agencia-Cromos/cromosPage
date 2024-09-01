import { Routes, Route } from "react-router-dom";
import { Nata } from "../pages/Nata";
import { Home } from "../pages/Home";


export function RouterMain() {
    
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nataspitz" element={<Nata />} />
        </Routes>
    )
}