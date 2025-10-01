 import { Route, Routes } from "react-router-dom";
    import './index.css';
    import Homepage from "./components/Homepage.tsx";

    function App() {
        return (
                <div>
                    <Routes>
                        <Route path={"/"} element={<Homepage></Homepage>}></Route>
                    </Routes>
                </div>
        );
    }

    export default App;