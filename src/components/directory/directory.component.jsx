import React from "react";
import MenuItem from "./../menu-item/menu-item.component";

import SectionsData from './sections.data'

import "./directory.component.scss";

export class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: SectionsData, 
    };
  }

  render() {
      return (
    <div className="directory-menu">
    {this.state.sections.map(({id, ...otherSectionProps}) => 
        <MenuItem key={id} {...otherSectionProps}/>
        )}
      
    </div>
    );
  }
}
