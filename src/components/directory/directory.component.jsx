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
    {this.state.sections.map(({key, title, imageUrl, size}) => 
        <MenuItem key={key} title={title} imageUrl={imageUrl} size={size} />
        )}
      
    </div>
    );
  }
}
