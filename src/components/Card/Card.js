import React, { Component } from "react";
import Title from "../Title";
import CardColumns from "./CardColumns";
import EmptyCard from "./Emptycard";
import { ProductConsumer } from "../../context";
import CardList from './CardList';
import CardTotals from './CardTotals';

export default class Card extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {value => {
            const { card } = value;
            if (card.length > 0) {
              return (
                <React.Fragment>
                  <Title name="your" title="card" />
                  <CardColumns />
                  <CardList value ={value} />
                  <CardTotals value ={value} />
                </React.Fragment>
              );
            } else {
              return <EmptyCard />;
            }
          }}
        </ProductConsumer>
      </section>
    );
  }
}
