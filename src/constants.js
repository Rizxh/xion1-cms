import Image from 'next/image';

export const SIDENAV_ITEMS = [
    {
        title: "Partner",
        path: "/partner",
        icon: '/images/icon-side.png', // Path to the image icon
        submenu: true,
        subMenuItems: [
            { title: "Home", path: "/partner/Home" },
            { title: "Register Deal", path: "/partner/RegisterDeal" },
            { title: "Product", path: "/partner/Product" },
            { title: "Price Support", path: "/partner/PriceSupport" },
            { title: "Technical Support", path: "/partner/TechnicalSupport" },
            { title: "History Support", path: "/partner/HistorySupport" },
        ],
    },
    {
        title: "Branding",
        path: "/branding",
        icon: '/images/icon-side.png', // Path to the image icon
        submenu: true,
        subMenuItems: [
            { title: "Home", path: "/branding/Home" },
            { title: "Product", path: "/branding/Product" },
            { title: "Contact", path: "/branding/Contact" },
            { title: "Navigation", path: "/branding/Navigation" },
            { title: "Footer", path: "/branding/Footer" },
        ],
    },
];
