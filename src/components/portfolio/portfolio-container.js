import React, { Component } from "react";
import axios from "axios";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    constructor() {
        super();

      this.state = {
          pageTitle: "Welcome to my Portfolio",
          isLoading: false,
          data:  [ ]

      };

      this.handleFilter = this.handleFilter.bind(this);
    }

    handleFilter(filter) {
        this.setState({
            data: this.state.data.filter(item => {
                return item.category === filter;
            })
        });
    }

  getPortfolioItems() {
    axios
    .get("https://zacharybyre.devcamp.space/portfolio/portfolio_items")
    .then(response => {
      console.log("response data", response);
    })
    .catch(error => {
      console.log(error);
    });
  }

    portfolioItems() {
        return this.state.data.map(item => {
            return (
            <PortfolioItem  title={item.title}  url={"google.com"} slug={item.slug} />
            );
        });
    }

    render() {
        return (
            <div>
                <h2>{this.state.pageTitle}.</h2>

                <button onClick={() => this.handleFilter('eCommerce')}>eCommerce</button>
                <button onClick={() => this.handleFilter('Scheduling')}>Scheduling</button>
                <button onClick={() => this.handleFilter('Enterprise')}>Enterprise</button>

                {this.portfolioItems()}

               
            </div>
        );
    }
}