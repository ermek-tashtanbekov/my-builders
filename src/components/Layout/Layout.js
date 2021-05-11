import { useState } from "react";
import Drawer from "../Drower/Drawer"
import Toolbar from "../Toolbar/Toolbar"

const Layout = ({ children }) => {
    const [drawerOepn, setDrawerOpen] = useState(false)
    return (
        <div>

            <Toolbar openDrawer={() => setDrawerOpen(true)}/>
            <Drawer open={drawerOepn} closeDrawer={() => setDrawerOpen(false)}  />
            {children}
        </div>
    );
}

export default Layout;