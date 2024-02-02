import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { useEffect, useState, useRef } from "react";

import { deleteOrder, infoOrderId } from "../../actions/actionsUpdateData";

import Spinner from "../spinner/Spinner";
import "./listOrders.scss";

const ListOrders = () => {
  const [inProp, setInProp] = useState(false);
  const nodeRef = useRef(null);

  useEffect(() => {
    setInProp(true);
  }, []);

  const orders = useSelector((state) => state.reducerGetData.orders);
  const statusLoading = useSelector(
    (state) => state.reducerGetData.statusLoading
  );

  const createOrder = (status) => {
    if (status === "LOADING_GET") {
      return <Spinner />;
    } else if (orders.length === 0) {
      return;
    } else {
      return orders.map((order) => {
        return <Order key={order.id} order={order} />;
      });
    }
  };

  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={inProp}
      timeout={1000}
      classNames="anim"
    >
      <div className="partners__items" ref={nodeRef}>
        {" "}
        {createOrder(statusLoading)}
      </div>
    </CSSTransition>
  );
};

const Order = (props) => {
  const { id, name, dateCreate, price, sale } = props.order;

  const dispatch = useDispatch();

  return (
    <div className="partners__item">
      <NavLink
        to={`/infoorder/${id}`}
        className={() => "partners__num"}
        onClick={() => dispatch(infoOrderId(id))}
      >
        {id}
      </NavLink>
      <div className="partners__part">{name}</div>
      <div className="partners__datesupply">{dateCreate}</div>
      <div className="partners__price">{price} руб</div>
      <div className="partners__promo">
        {sale !== "" && sale !== 0 ? sale + "%" : ""}
      </div>
      <div
        className="partners__delete"
        onClick={() => dispatch(deleteOrder(id))}
      >
        &#9746;
      </div>
    </div>
  );
};

export default ListOrders;
