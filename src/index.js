import React from "react";
import { render } from "react-dom";
import faker from "faker";
import _ from "lodash";
import { css } from "react-emotion";
//
import { MegaMenu } from "./MegaMenu";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  maxWidth: "100%"
};

let menuItems = _.times(6, count => ({
  id: faker.random.uuid(),
  title: faker.lorem.word(),
  url: count % 2 ? "" : faker.internet.url(),
  items: _.times(faker.random.number(8), () => ({
    id: faker.random.uuid(),
    title: faker.lorem.word(),
    url: count % 3 ? "" : faker.internet.url(),
    items: _.times(faker.random.number(8), () => ({
      id: faker.random.uuid(),
      title: faker.lorem.word(),
      url: faker.internet.url()
    }))
  }))
}));

const megaMenuClassName = css``;

const App = () => (
  <div style={styles}>
    <MegaMenu
      {...{
        //         ySpacing: 40,
        //         xSpacing: 0,
        arrowWithButton: true,
        items: menuItems,
        className: megaMenuClassName
      }}
    />
  </div>
);

render(<App />, document.getElementById("root"));
