
import Navbar from '../components/Home/Navbar';
import Footer from '../components/common/Footer';
import Sidebar from '../components/Home/Sidebar';


const Layout = ({ children, menuData, setSidebarOpen, isSidebarOpen }) => {
    return (
        <>
            <Navbar
                className="sticky-bar"
                menuData={menuData}
                setSidebarOpen={setSidebarOpen}
                isSidebarOpen={isSidebarOpen}
            />

            <Sidebar
                menuData={menuData}
                isSidebarOpen={isSidebarOpen}
                setSidebarOpen={setSidebarOpen}
            />
            {/* <Navbar className="sticky-bar" menuData={menuData} setSidebarOpen={setSidebarOpen} isSidebarOpen={isSidebarOpen} /> */}
            {children}
            <Footer />

        </>
    );
};

export default Layout;
