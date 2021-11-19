import { UserActionList } from "amplicode-audit";
import { EntityLog } from "amplicode-audit";
import { ReportRunList } from "amplicode-reports";
import { ReportList } from "amplicode-reports";
import OrderList from "./order/OrderList";
import SalespersonList from "./salesperson/SalespersonList";
import TerritoryList from "./territory/TerritoryList";
import { Home } from "./home/Home";
import { ReactComponent } from "@amplicode/react-core";

export interface ScreenInfo {
  /**
   * i18n key for menu item / tab caption
   */
  captionKey: string;
  /**
   * Component that will be rendered in a new tab when menu item is clicked
   */
  component: ReactComponent;
  props?: any;
}

export const screenRegistry: Record<string, ScreenInfo> = {
  home: {
    component: Home,
    captionKey: "screen.home"
  },

  "territory-list": {
    component: TerritoryList,
    captionKey: "screen.TerritoryList"
  },

  "salesperson-list": {
    component: SalespersonList,
    captionKey: "screen.SalespersonList"
  },

  "order-list": {
    component: OrderList,
    captionKey: "screen.OrderList"
  },

  ReportList: {
    component: ReportList,
    captionKey: "screen.ReportList"
  },

  ReportRunList: {
    component: ReportRunList,
    captionKey: "screen.ReportRunList"
  },

  EntityLog: {
    component: EntityLog,
    captionKey: "screen.EntityLog"
  },

  UserActionList: {
    component: UserActionList,
    captionKey: "screen.UserActionList"
  }
};

export function getScreenPaths(): string[] {
  return Object.keys(screenRegistry).map(k => "/" + k);
}
