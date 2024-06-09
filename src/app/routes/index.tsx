import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Home} from "../pages";

export const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path={"/learn-language"} element={<Home/>}/>
            </Routes>
        </Router>
    )
}
