import { SendEmailPage } from "./email/SendEmailPage";
import { Home } from "./home/Home";
import { screenStore } from "@amplicode/react-core";

screenStore.registerScreen("home", {
  component: Home,
  captionKey: "screen.home"
});

screenStore.registerScreen("send-email-page", {
  component: SendEmailPage,
  captionKey: "screen.SendEmailPage"
});
