import "./Topbar.scss";

import {Person, Mail} from "@material-ui/icons";

export default function topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">genius</a>
          <div className="itemContainer">
              <Person className="icon"/>
              <span>+506 8340-6324</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon"/>
            <span>maviquez1@gmail.com</span>
            </div>
        </div>
      
        <div className="right">
              
        </div>
      </div>
    </div>
  );
}
