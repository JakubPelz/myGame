import React from "react";
import * as RiIcons from 'react-icons/ri';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
    {
        title: 'Informace o hře',
        path: '/informace',
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
    },
    { 
        title: 'Ovládání hry',
        path: '/ovladani-hry',
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: 'Základna',
                path: '/ovladani-hry/zakladna',
                icon: <IoIcons.IoIosPaper />
            },
            {
                title: 'Profese',
                path: '/ovladani-hry/profese',
                icon: <IoIcons.IoIosPaper />
            },
            {
                title: 'Budovy',
                path: '/ovladani-hry/budovy',
                icon: <IoIcons.IoIosPaper />
            },
            {
                title: 'Pozemky',
                path: '/ovladani-hry/pozemky',
                icon: <IoIcons.IoIosPaper />
            },
            {
                title: 'Armáda',
                path: '/ovladani-hry/armada',
                icon: <IoIcons.IoIosPaper />
            },
            {
                title: 'Vojenské útoky',
                path: '/ovladani-hry/vojenske-utoky',
                icon: <IoIcons.IoIosPaper />
            },
            {
                title: 'Magie',
                path: '/ovladani-hry/magie',
                icon: <IoIcons.IoIosPaper />
            },
            {
                title: 'Špionáž',
                path: '/ovladani-hry/spionaz',
                icon: <IoIcons.IoIosPaper />
            },
            {
                title: 'Aliance',
                path: '/ovladani-hry/aliance',
                icon: <IoIcons.IoIosPaper />
            },
            {
                title: 'Imperator',
                path: '/ovladani-hry/imperator',
                icon: <IoIcons.IoIosPaper />
            },
            {
                title: 'Tržiště',
                path: '/ovladani-hry/trziste',
                icon: <IoIcons.IoIosPaper />
            },
            {
                title: 'Další tah',
                path: '/ovladani-hry/dalsi-tah',
                icon: <IoIcons.IoIosPaper />
            }
        ]
    },
    {
        title: 'Horní menu',
        path: '/horni-menu',
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: 'Pošta',
                path: '/horni-menu/posta',
                icon: <IoIcons.IoIosPaper />
            },
            {
                title: 'Diskse',
                path: '/horni-menu/Diskuse',
                icon: <IoIcons.IoIosPaper />
            },
            {
                title: 'Deník',
                path: '/horni-menu/denik',
                icon: <IoIcons.IoIosPaper />
            },
            {
                title: 'Hledat',
                path: '/horni-menu/hledat',
                icon: <IoIcons.IoIosPaper />
            }
        ]  
    },
    {
        title: 'Rasy',
        path: '/rasy',
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: 'Lidé',
                path: '/rasy/lide',
                icon: <IoIcons.IoIosPaper />
            },
            {
                title: 'Elfové',
                path: '/rasy/elfove',
                icon: <IoIcons.IoIosPaper />
            },
            {
                title: 'Trpaslíci',
                path: '/rasy/trpaslici',
                icon: <IoIcons.IoIosPaper />
            },
            {
                title: 'Hobiti',
                path: '/rasy/hobiti',
                icon: <IoIcons.IoIosPaper />
            },
            {
                title: 'Skřeti',
                path: '/rasy/skreti',
                icon: <IoIcons.IoIosPaper />
            },
            {
                title: 'Magistři',
                path: '/rasy/magistri',
                icon: <IoIcons.IoIosPaper />
            },
            {
                title: 'Víly',
                path: '/rasy/vily',
                icon: <IoIcons.IoIosPaper />
            },
            {
                title: 'Démoni',
                path: '/rasy/demoni',
                icon: <IoIcons.IoIosPaper />
            },
            {
                title: 'Nemrtví',
                path: '/rasy/nemrtvi',
                icon: <IoIcons.IoIosPaper />
            },
            {
                title: 'Obři',
                path: '/rasy/obri',
                icon: <IoIcons.IoIosPaper />
            },
        ]  
    },
    {
        title: 'Vzorce',
        path: '/vzorce',
    }
]