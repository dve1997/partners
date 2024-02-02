import { NavLink } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { useEffect, useState, useRef } from "react";

import { createOrder } from "../../actions/actionsUpdateData";

import "./createOrderPage.scss";

const CreateOrderPage = () => {
  const [inProp, setInProp] = useState(false);
  const nodeRef = useRef(null);

  useEffect(() => {
    setInProp(true);
  }, []);

  const initState = {
    id: uuidv4(),
    name: "",
    type: "",
    quantity: "",
    dateCreate: "",
    dateShipment: "",
    price: "",
  };
  const [valueInput, setValueInput] = useState(initState);
  const { name, type, quantity, dateCreate, dateShipment, price } = valueInput;

  const onChangeInput = (e) => {
    switch (e.target.getAttribute("data-type")) {
      case "name":
        setValueInput((state) => ({
          ...state,
          name: e.target.value,
        }));
        break;
      case "type":
        setValueInput((state) => ({
          ...state,
          type: e.target.value,
        }));
        break;
      case "quantity":
        setValueInput((state) => ({
          ...state,
          quantity: e.target.value,
        }));
        break;
      case "dateCreate":
        setValueInput((state) => ({
          ...state,
          dateCreate: e.target.value,
        }));
        break;
      case "dateShipment":
        setValueInput((state) => ({
          ...state,
          dateShipment: e.target.value,
        }));
        break;
      case "price":
        setValueInput((state) => ({
          ...state,
          price: e.target.value,
        }));
        break;
      default:
        break;
    }
  };

  const dispatch = useDispatch();

  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={inProp}
      timeout={1000}
      classNames="anim"
    >
      <div className="partners__create" ref={nodeRef}>
        <div className="partners__fied">
          <div className="partners__createfield">
            <p>Название партнера</p>
            <input
              type="text"
              placeholder="Введите название партнера..."
              data-type="name"
              onChange={(e) => onChangeInput(e)}
              value={name}
            />
          </div>
          <div className="partners__createfield">
            <p>Тип товара</p>
            <input
              type="text"
              placeholder="Введите тип товара..."
              data-type="type"
              onChange={(e) => onChangeInput(e)}
              value={type}
            />
          </div>
          <div className="partners__createfield">
            <p>Количество поддонов</p>
            <input
              type="text"
              placeholder="Введите количество поддонов..."
              data-type="quantity"
              onChange={(e) => onChangeInput(e)}
              value={quantity}
            />
          </div>
          <div className="partners__createfield">
            <p>Дата создания</p>
            <input
              type="date"
              placeholder="Введите дату создания..."
              data-type="dateCreate"
              onChange={(e) => onChangeInput(e)}
              value={dateCreate}
            />
          </div>
          <div className="partners__createfield">
            <p>Дата отгрузки</p>
            <input
              type="date"
              placeholder="Введите дату отгрузки..."
              data-type="dateShipment"
              onChange={(e) => onChangeInput(e)}
              value={dateShipment}
            />
          </div>
          <div className="partners__createfield">
            <p>Стоимость заказа</p>
            <input
              type="text"
              placeholder="Введите стоимость заказа..."
              data-type="price"
              onChange={(e) => onChangeInput(e)}
              value={price}
            />
          </div>
        </div>
        <div className="partners__button">
          <NavLink to="/" className={() => "partners__btn"}>
            <span>вернуться к списку заказов</span>
          </NavLink>
          <button
            className="partners__btn"
            onClick={() => {
              const data = JSON.stringify(valueInput);
              dispatch(createOrder(data));
              setValueInput(initState);
            }}
          >
            содать заказ
          </button>
          <NavLink
            to="/"
            className={() => "partners__btn"}
            onClick={() => {
              const data = JSON.stringify(valueInput);
              dispatch(createOrder(data));
              setValueInput(initState);
            }}
          >
            создать заказ и вернуться к списку заказов
          </NavLink>
        </div>
      </div>
    </CSSTransition>
  );
};

export default CreateOrderPage;
