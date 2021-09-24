import React from 'react';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';

const Sidebar = () => {
    return (
        <div>
            {SidebarData.map((item, index) => {
                return <SubMenu item={item} key={index} />;
            })}

        </div>
    )
}

export default Sidebar;
