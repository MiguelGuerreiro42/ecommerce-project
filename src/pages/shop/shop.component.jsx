import React from "react";

import PreviewColletion from "../../components/preview-collection/preview-collection.component";

import SHOP_DATA from "./shop.data";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    const {collections} = this.state;
    return (
      <div>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <PreviewColletion
            key={id}
            {...otherCollectionProps}
          ></PreviewColletion>
        ))}
      </div>
    );
  }
}

export default ShopPage;
