import {
    Icon
} from "@iconify/react";

import { SideNavItem } from './types';

export const SIDENAV_ITEMS = [
    {
        title: "Partner",
        path: "/partner",
        icon: <Icon icon="lucide:folder" width="24" height="24" />,
        submenu: true,
        subMenuItems: [
            {
                title: "Home",
                path: "/partner/Home"
            },
            {
                title: "Register Deal",
                path: "/partner/RegisterDeal"
            },
            {
                title: "Product",
                path: "/partner/Product"
            },
            {
                title: "Price Support",
                path: "/partner/PriceSupport"
            },
            {
                title: "Technical Support",
                path: "/partner/TechnicalSupport"
            },
            {
                title: "History Support",
                path: "/partner/HistorySupport"
            },
        ],
    },
    {
        title: "Branding",
        path: "/branding",
        icon: <Icon icon="lucide:folder" width="24" height="24" />,
        submenu: true,
        subMenuItems: [
            {
                title: "Home",
                path: "/branding/Home"
            },
            {
                title: "Product",
                path: "/branding/product"
            },
            {
                title: "Contact",
                path: "/branding/Contact"
            },
            {
                title: "Navigation",
                path: "/branding/Navigation"
            },
            {
                title: "Footer",
                path: "/branding/Footer"
            },
        ],
    },
];