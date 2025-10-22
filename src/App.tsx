 /*import { Route, Routes } from "react-router-dom";
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

    export default App;*/


 import { useEffect } from 'react';

 import MasSchee from "./components/Homepage.tsx";

 function App() {
     useEffect(() => {
         const observerOptions = {
             threshold: 0.15,
             rootMargin: '0px 0px -10% 0px'
         };

         const observer = new IntersectionObserver((entries) => {
             entries.forEach(entry => {
                 if (entry.isIntersecting) {
                     entry.target.classList.add('visible');
                 }
             });
         }, observerOptions);

         document.querySelectorAll('.section').forEach(section => {
             observer.observe(section);
         });

         return () => observer.disconnect();
     }, []);

     return (
         <div className="app">
             <MasSchee></MasSchee>

         </div>
     );
 }

 export default App;
