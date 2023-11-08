import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from './MainPage';
import Assignment_1 from './Assignment1/Assignment_1';
import Assignment_2 from './Assignment2/Assignment_2';
const Routing = ()=>{
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<MainPage/>}/>
                    <Route path='/assignment1' element={<Assignment_1/>}/>
                    
                    <Route path='/assignment2' element={<Assignment_2/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Routing;
