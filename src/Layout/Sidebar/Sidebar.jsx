import "./Sidebar.css";
import { personsImgs } from "../../utils/images";
import { navigationLinks } from "../../data/data";
import { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../../Context/sidebarContext";

const Sidebar = () => {
  // states
  const [activeLinkIdx] = useState(1);
  const [sidebarClass, setSidebarClass] = useState("");
  const { isSidebarOpen } = useContext(SidebarContext);
  console.log(isSidebarOpen);

  useEffect(() => {
    // isSidebarOpen ? setSidebarClass("sidebar-change") : setSidebarClass("");

    if(isSidebarOpen){
      setSidebarClass("sidebar-change");
    } else {
      setSidebarClass("")
    }
  }, [isSidebarOpen]);

  return (
    <div className={`sidebar ${sidebarClass}`}>
      <div className="user-info">
        <div className="info-img img-fit-cover">
          <img src={personsImgs.person_two} alt="profile image" />
        </div>
        <span className="info-name">alice-doe</span>
      </div>
      <nav className="navigation">
        <ul className="nav-list">
          {/* loop */}
          {navigationLinks.map((navigationLink) => (
            <li className="nav-item" key={navigationLink.id}>
              <a
                href="#"
                className={`nav-link 
                ${
                  navigationLink.id === activeLinkIdx ? "active" : null
                }`
                }
              >   
                <img
                  src={navigationLink.image}
                  className="nav-link-icon"
                  alt={navigationLink.title}
                />
                <span className="nav-link-text">{navigationLink.title}</span>
              </a>
            </li>
            
          ))}
          {/* end of loop */}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
