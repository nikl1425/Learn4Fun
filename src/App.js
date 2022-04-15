import React, { useState } from "react";
import { useWindowSize } from "./helper/useWindowSize";
import styles from "./style/app.module.scss";
import { SideBar } from "./components/Sidebar";
import {Route, Routes} from "react-router-dom";
import {Home, About, ShowRoom, Courses} from "./routes/index";





function App() {

  const size  = useWindowSize();

  let isOpen = size.width < 768? false : true;

  const [navOpen, setNavOpen] = useState(isOpen)

  const sideBarChange = () => {
    setNavOpen(value => !value)
  }

  return (
    <div id="App">
      <div>
          <SideBar isMenuOpenCallBack={sideBarChange} navOpen={ navOpen } isOpen={ isOpen }/>
        <div className={navOpen ? styles.nav_active : styles.nav}>
          <div className="container-fluid p-0">
            <div className="row">
              <div className="col">
                <Routes>
                <Route path="/" element={ <Home /> }></Route>
                <Route path="/courses" element={ <Courses/> }></Route>
                <Route path="/showroom" element={ <ShowRoom/> }></Route>
                <Route path="/about" element={ <About/> }></Route>
              </Routes>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
