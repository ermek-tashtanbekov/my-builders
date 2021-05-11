import Toolbar from "../Toolbar/Toolbar"

const Layout = ({children}) => {
    return ( 
        <div>
            <div>
                <Toolbar/>
            </div>
            {children}
        </div>
     );
}
 
export default Layout;