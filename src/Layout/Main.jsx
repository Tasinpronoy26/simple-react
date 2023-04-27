import { Outlet } from 'react-router-dom';
import Header from '../Component/Header/Header';
import './../App';



const Main = () => {
    return (
        <div>
            
            <Header></Header>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Main;