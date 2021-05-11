import Drawer from "../Drower/Drower"
import Toolbar from "../Toolbar/Toolbar"

const Layout = ({ children }) => {
    return (
        <div>

            <Toolbar />
            <Drawer />
            {children}
        </div>
    );
}

export default Layout;