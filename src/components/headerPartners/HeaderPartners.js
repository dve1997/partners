import { NavLink } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { useEffect, useState, useRef } from "react";

import "./headerPartners.scss";
import logo from "../../assets/dve.jpg";

const HeaderPartners = () => {
  const [inProp, setInProp] = useState(false);
  const nodeRef = useRef(null);

  useEffect(() => {
    setInProp(true);
  }, []);

  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={inProp}
      timeout={1000}
      classNames="anim"
    >
      <div className="partners__bodyheader" ref={nodeRef}>
        <div className="partners__logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="partners__links">
          <NavLink
            to="/"
            className={() => "partners__link"}
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "",
            })}
          >
            Список заказов
          </NavLink>
          <span>/</span>
          <NavLink
            to="/createorder"
            className={() => "partners__link"}
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "",
            })}
          >
            Добавление заказа
          </NavLink>
        </div>
      </div>
    </CSSTransition>
  );
};

export default HeaderPartners;
