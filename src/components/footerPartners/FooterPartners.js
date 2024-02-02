import { CSSTransition } from "react-transition-group";
import { useEffect, useState, useRef } from "react";

import "./footerPartners.scss";

const FooterPartners = () => {
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
      <div className="partners__bodyfooter" ref={nodeRef}>
        <div className="partners__fio">DVE</div>
      </div>
    </CSSTransition>
  );
};

export default FooterPartners;
