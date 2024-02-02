import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { useEffect, useState, useRef } from "react";

import { changeSale, updateSale } from "../../actions/actionsUpdateData";

import "./infoOrderPage.scss";

const InfoOrderPage = () => {
  const [inProp, setInProp] = useState(false);
  const nodeRef = useRef(null);

  useEffect(() => {
    setInProp(true);
  }, []);

  const iOrder = useSelector((state) => state.reducerUpdateData.infoOrder);
  const sale = useSelector((state) => state.reducerUpdateData.sale);
  const dispatch = useDispatch();

  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={inProp}
      timeout={1000}
      classNames="anim"
    >
      <div className="partners__info" ref={nodeRef}>
        <div className="partners__fields">
          <div className="partners__infofield">
            <p>Название партнера</p>
            <p className="partners__data">{iOrder?.name}</p>
          </div>
          <div className="partners__createfield">
            <p>Тип товара</p>
            <p className="partners__data">{iOrder?.type}</p>
          </div>
          <div className="partners__createfield">
            <p>Количество поддонов</p>
            <p className="partners__data">{iOrder?.quantity}</p>
          </div>
          <div className="partners__createfield">
            <p>Дата создания</p>
            <p className="partners__data">{iOrder?.dateCreate}</p>
          </div>
          <div className="partners__createfield">
            <p>Дата отгрузки</p>
            <p className="partners__data">{iOrder?.dateShipment}</p>
          </div>
          <div className="partners__createfield">
            <p>Стоимость заказа</p>
            <p className="partners__data">{iOrder?.price} руб</p>
          </div>
        </div>
        <div className="partners__sale">
          <p>Назначьте скидку</p>
          <input
            type="text"
            placeholder="Назначте скидку..."
            onChange={(e) => dispatch(changeSale(e.target.value))}
            value={sale}
          />
          <br />
          <button
            className="partners__btn"
            onClick={() => {
              iOrder.sale = sale;
              dispatch(updateSale(iOrder));
            }}
          >
            назначить скидку
          </button>
          <NavLink to="/" className={() => "partners__btn"}>
            вернуться к списку заказов
          </NavLink>
        </div>
      </div>
    </CSSTransition>
  );
};

export default InfoOrderPage;
