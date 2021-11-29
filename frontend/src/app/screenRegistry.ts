import {EmailHistory} from "amplicode-mail";
import {EntityLog, UserActionList} from "amplicode-audit";
import {ReportList, ReportRunList} from "amplicode-reports";
import {PersistentParameters} from "amplicode-persistentparameters";
import PersistentParametersDemoComponent from "./persistent-parameter/PersistentParametersDemoComponent";
import OrderList from "./order/OrderList";
import SalespersonList from "./salesperson/SalespersonList";
import TerritoryList from "./territory/TerritoryList";
import {Home} from "./home/Home";
import {ReactComponent} from "@amplicode/react-core";
import SendEmailPage from "./email/SendEmailPage";

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

    PersistentParameters: {
        component: PersistentParameters,
        captionKey: "screen.PersistentParameters"
    },

    "persistent-parameters-demo-component": {
        component: PersistentParametersDemoComponent,
        captionKey: "screen.PersistentParametersDemoComponent"
    },

    EntityLog: {
        component: EntityLog,
        captionKey: "screen.EntityLog"
    },

    UserActionList: {
        component: UserActionList,
        captionKey: "screen.UserActionList"
    },

    SendEmailPage: {
        component: SendEmailPage,
        captionKey: "screen.SendEmailPage"
    },

    EmailHistory: {
        component: EmailHistory,
        captionKey: "screen.EmailHistory"
    }
};

export function getScreenPaths(): string[] {
    return Object.keys(screenRegistry).map(k => "/" + k);
}
