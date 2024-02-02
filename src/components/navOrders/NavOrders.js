import { useSelector, useDispatch } from "react-redux";
import { useTransition } from "react";
import { CSSTransition } from "react-transition-group";
import { useEffect, useState, useRef } from "react";

import {
  filterOrdersSearch,
  filterOrdersPart,
  filterOrdersProd,
} from "../../actions/actionsUpdateData";

import "./navOrders.scss";

const NavOrders = () => {
  const [inProp, setInProp] = useState(false);
  const nodeRef = useRef(null);

  useEffect(() => {
    setInProp(true);
  }, []);

  const fOrdersSearch = useSelector(
    (state) => state.reducerUpdateData.filterSearch
  );
  const dispatch = useDispatch();

  const [isPending, startTransition] = useTransition();

  const onChangePart = (e) => {
    dispatch(filterOrdersPart(e.target.getAttribute("data-type")));
  };

  const onChangeProd = (e) => {
    dispatch(filterOrdersProd(e.target.getAttribute("data-type")));
  };

  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={inProp}
      timeout={1000}
      classNames="anim"
    >
      <div className="partners__bodynav" ref={nodeRef}>
        <div className="partners__searchsupply">
          <p>Введите название организации</p>
          <input
            type="text"
            placeholder="Введите название организации..."
            onChange={(e) => {
              startTransition(() =>
                dispatch(filterOrdersSearch(e.target.value))
              );
            }}
            value={isPending ? "Loading..." : fOrdersSearch}
          />
        </div>
        <div className="partners__filterpart">
          <div className="partners__inffilter">Фильтрация типу партнера</div>
          <div className="partners__butfilter">
            <button
              className="partners__btn"
              data-type="all"
              onClick={(e) => onChangePart(e)}
            >
              все
            </button>
            <button
              className="partners__btn"
              data-type="distrebuter"
              onClick={(e) => onChangePart(e)}
            >
              дистрибьюторы
            </button>
            <button
              className="partners__btn"
              data-type="keyclient"
              onClick={(e) => onChangePart(e)}
            >
              ключевые клиенты
            </button>
          </div>
        </div>
        <div className="partners__filterproduct">
          <div className="partners__inffilter">Фильтрация типу товара</div>
          <div className="partners__butfilter">
            <button
              className="partners__btn"
              data-type="all"
              onClick={(e) => onChangeProd(e)}
            >
              все
            </button>
            <button
              className="partners__btn"
              data-type="beer"
              onClick={(e) => onChangeProd(e)}
            >
              пиво
            </button>
            <button
              className="partners__btn"
              data-type="energydrink"
              onClick={(e) => onChangeProd(e)}
            >
              энергетик
            </button>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default NavOrders;
