import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { useHttp } from "./hooks/http.hook";
import { loadedGet, errorGet } from "./actions/actionsGetData";
import {
  createOrder,
  deleteOrder,
  infoOrder,
  infoOrderId,
  updateSale,
} from "./actions/actionsUpdateData";
import HeaderPartners from "./components/headerPartners/HeaderPartners";
import FooterPartners from "./components/footerPartners/FooterPartners";
import ListOrdersPage from "./pages/listOrdersPage/ListOrdersPage";
import CreateOrderPage from "./pages/createOrderPage/CreateOrderPage";
import InfoOrderPage from "./pages/infoOrderPage/InfoOrderPage";
import ErrorPage from "./pages/errorPage/ErrorPage";

import "./App.scss";

function App() {
  const cOrder = useSelector((state) => state.reducerUpdateData.createOrder);
  const dOrder = useSelector((state) => state.reducerUpdateData.deleteOrder);
  const iOrderId = useSelector((state) => state.reducerUpdateData.infoOrderId);
  const fOrdersSearch = useSelector(
    (state) => state.reducerUpdateData.filterSearch
  );
  const fOrdersPart = useSelector(
    (state) => state.reducerUpdateData.filterTypePart
  );
  const fOrdersProd = useSelector(
    (state) => state.reducerUpdateData.filterTypeProd
  );
  const uOrderSale = useSelector(
    (state) => state.reducerUpdateData.updateOrderSale
  );
  const dispatch = useDispatch();

  const { getData, postData, deleteData, patchData } = useHttp();

  const filterOfPart = (data) => {
    switch (fOrdersPart) {
      case "all":
        return data;
      case "distrebuter":
        return data.filter((order) => order.typePart === "distrebuter");
      case "keyclient":
        return data.filter((order) => order.typePart === "keyclient");
      default:
        break;
    }
  };
  const filterOfProd = (data) => {
    switch (fOrdersProd) {
      case "all":
        return data;
      case "beer":
        return data.filter((order) => order.typeProd === "beer");
      case "energydrink":
        return data.filter((order) => order.typeProd === "energydrink");
      default:
        break;
    }
  };

  useEffect(() => {
    if (cOrder !== null) {
      postData("http://localhost:3001/orders", "POST", cOrder)
        .then((data) => console.log(data))
        .finally(() => dispatch(createOrder(null)));
    }

    if (dOrder !== null) {
      deleteData("http://localhost:3001/orders/" + dOrder)
        .then((data) => console.log(data))
        .finally(() => dispatch(deleteOrder(null)));
    }

    if (iOrderId !== null) {
      getData("http://localhost:3001/orders/" + iOrderId)
        .then((data) => dispatch(infoOrder(data)))
        .finally(() => dispatch(infoOrderId(null)));
    }

    if (uOrderSale !== null) {
      const data = JSON.stringify(uOrderSale);

      patchData(
        "http://localhost:3001/orders/" + uOrderSale.id,
        "PATCH",
        data
      ).then(dispatch(updateSale(null)));
    }

    if (fOrdersSearch === "") {
      getData("http://localhost:3001/orders")
        .then((data) => {
          let filterArrPart = filterOfPart(data);
          let filterArrProd = filterOfProd(filterArrPart);
          dispatch(loadedGet(filterArrProd));
        })
        .catch(() => dispatch(errorGet()));
    } else {
      getData("http://localhost:3001/orders")
        .then((data) => {
          let filterArrSearch = data.filter((order) =>
            order.name.includes(fOrdersSearch)
          );
          let filterArrPart = filterOfPart(filterArrSearch);
          let filterArrProd = filterOfProd(filterArrPart);
          dispatch(loadedGet(filterArrProd));
        })
        .catch(() => dispatch(errorGet()));
    }
  }, [
    cOrder,
    dOrder,
    iOrderId,
    fOrdersSearch,
    fOrdersPart,
    fOrdersProd,
    uOrderSale,
  ]);

  return (
    <div className="partners__wrapper">
      <div className="partners__conteiner">
        <div className="partners__page">
          <Router>
            <header className="partners__header">
              <HeaderPartners />
            </header>
            <section className="partners__section">
              <Routes>
                <Route path="/" element={<ListOrdersPage />} />
                <Route path="/createorder" element={<CreateOrderPage />} />
                <Route path="/infoorder/:orderId" element={<InfoOrderPage />} />
                <Route path="*" element={<ErrorPage />} />
              </Routes>
            </section>
            <footer className="partners__footer">
              <FooterPartners />
            </footer>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
