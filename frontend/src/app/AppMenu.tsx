import {Menu} from "antd";
import {HomeOutlined} from "@ant-design/icons";
import {useIntl} from "react-intl";
import {useCallback} from "react";
import {observer} from "mobx-react";
import {useLocation} from "react-router-dom";
import {getScreenKey, screenStore, useScreens} from "@amplicode/react-core";
import {AddonsMenu} from "@amplicode/react-antd";

export const AppMenu = observer(() => {
    const intl = useIntl();
    const screens = useScreens();
    const location = useLocation();

    const handleClick = useCallback(
        ({key}: { key: string }) => {
            const menuItemInfo = screenStore.screenRegistry[key];
            if (menuItemInfo == null) {
                // This might be a menu item that doesn't use Screen API
                return;
            }
            const tabCaption = intl.formatMessage({id: menuItemInfo.captionKey});
            const breadcrumbCaption = intl.formatMessage({
                id: menuItemInfo.captionKey
            });
            const {component} = menuItemInfo;

            screens.openInTab({
                tabCaption,
                breadcrumbCaption,
                component,
                tabKey: key
            });
        },
        [intl, screens]
    );

    const getCaption = useCallback(
        (key: string) => {
            return intl.formatMessage({
                id: screenStore.screenRegistry[key].captionKey
            });
        },
        [intl]
    );

    const activeItem = getScreenKey(location.pathname);

    return (
        <Menu mode="inline" onClick={handleClick} selectedKeys={activeItem ? [activeItem] : []}>
            <Menu.Item icon={<HomeOutlined/>} title={getCaption("home")} key="home">
                {getCaption("home")}
            </Menu.Item>
            <Menu.SubMenu key="application-submenu" title={intl.formatMessage({id: 'submenu.Application'})}>
                <Menu.Item title={getCaption("territory-list")} key="territory-list">
                    {getCaption("territory-list")}
                </Menu.Item>
                <Menu.Item title={getCaption("salesperson-list")} key="salesperson-list">
                    {getCaption("salesperson-list")}
                </Menu.Item>
                <Menu.Item title={getCaption("order-list")} key="order-list">
                    {getCaption("order-list")}
                </Menu.Item>
            </Menu.SubMenu>
            <AddonsMenu key={"addonsMenu"}/>
            {/*If you don't need Screen API (tabs / breadcrumbs) you can just use React Router components*/}
            {/*<Menu.Item*/}
            {/*  title='Component1'*/}
            {/*  key='component1'*/}
            {/*>*/}
            {/*  <Link to='/component1'>Component 1</Link>*/}
            {/*</Menu.Item>*/}
            <Menu.SubMenu key="test-screens-submenu" title={intl.formatMessage({id: 'submenu.TestScreens'})}>
                <Menu.Item title={getCaption("persistent-parameters-demo-component")}
                           key="persistent-parameters-demo-component">
                    {getCaption("persistent-parameters-demo-component")}
                </Menu.Item>
                <Menu.Item title={getCaption("send-email-component")} key="send-email-component">
                    {getCaption("send-email-component")}
                </Menu.Item>
            </Menu.SubMenu>
        </Menu>
    );
});
