import React, { useState } from 'react';
import { SideBarData } from './SideBarData';

const SideBar = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const onTitleClick= (index) => {
        setActiveIndex(index);
    };
   
    const renderedItems = SideBarData.map((item, index) => {
        const active = index === activeIndex ? 'active' : '';
    
        return (
          <React.Fragment key={item.title}>
            <a className={`item ${active}`} onClick={() => onTitleClick(index)}>
              {item.title}
            </a>
          </React.Fragment>
        );
      });
    


    return (
        <div className="ui secondary vertical pointing menu">
          {renderedItems}
        </div>
    )
}

export default SideBar
