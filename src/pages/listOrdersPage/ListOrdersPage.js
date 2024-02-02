import ListOrders from "../../components/listOrders/ListOrders";
import NavOrders from "../../components/navOrders/NavOrders";

import "./listOrdersPage.scss";

const ListOrdersPage = () => {
  return (
    <div className="partners__bodylistorders">
      <ListOrders />
      <NavOrders />
    </div>
  );
};

export default ListOrdersPage;
