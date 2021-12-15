import { Home } from "./home/Home";
import { screenStore } from "@amplicode/react-core";
import PersistentParametersDemoComponent from "./persistent-parameter/PersistentParametersDemoComponent";

screenStore.registerScreen("home", {
  component: Home,
  captionKey: "screen.home"
});

screenStore.registerScreen("persistent-parameters-demo-component", {
  component: PersistentParametersDemoComponent,
  captionKey: "screen.PersistentParametersDemoComponent"
});