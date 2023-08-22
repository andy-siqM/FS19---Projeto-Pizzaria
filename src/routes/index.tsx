import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import PageLayout from "../layouts/PageLayout";
import NotFound from "../NotFound";

const Ways = () => {
    return(
        <>
           <BrowserRouter>
               <Routes>
                   <Route path="/" element={<PageLayout />}>
                      <Route index element={<Home />} />
                   </Route>
                   <Route path="*" element={<NotFound />} />
               </Routes>  
           </BrowserRouter>
        </>
    );
}

export default Ways;