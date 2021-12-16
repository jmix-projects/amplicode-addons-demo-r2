import { Home } from "./home/Home";
import { screenStore } from "@amplicode/react-core";
import PersistentParametersDemoComponent from "./persistent-parameter/PersistentParametersDemoComponent";
import SendEmailComponent from "./email/SendEmailComponent";
import TerritoryList from "./territory/TerritoryList";
import SalespersonList from "./salesperson/SalespersonList";
import OrderList from "./order/OrderList";

screenStore.registerScreen("home", {
  component: Home,
  captionKey: "screen.home"
});

screenStore.registerScreen("persistent-parameters-demo-component", {
  component: PersistentParametersDemoComponent,
  captionKey: "screen.PersistentParametersDemoComponent"
});

screenStore.registerScreen("send-email-component", {
  component: SendEmailComponent,
  captionKey: "screen.SendEmailComponent"
});

screenStore.registerScreen("send-email-component", {
  component: SendEmailComponent,
  captionKey: "screen.SendEmailComponent"
});

screenStore.registerScreen("territory-list", {
  component: TerritoryList,
  captionKey: "screen.TerritoryList"
});

screenStore.registerScreen("salesperson-list", {
  component: SalespersonList,
  captionKey: "screen.SalespersonList"
});

screenStore.registerScreen("order-list", {
  component: OrderList,
  captionKey: "screen.OrderList"
});