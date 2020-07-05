import React, { Component } from "react";
import { Accordion, Icon } from "semantic-ui-react";

class About extends Component {
  state = { activeIndex: 0 };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeIndex } = this.state;
    return (
      <Accordion className="container">
        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={this.handleClick}
        >
          <Icon name="dropdown" />
          Who am I?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <p className="accordian-para">
            Well I am just a normal guy who just made this web application
            during latter part of the year 2020 when the world was dealing with
            Covid-19 pandemic.
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 1}
          index={1}
          onClick={this.handleClick}
        >
          <Icon name="dropdown" />
          What do I aim to deliver?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <p className="accordian-para">
            I aim to bring about a change in this line of industry by reducing
            the workload of going table to table for taking orders and letting
            the customers do the thing by ordering as well as paying at the same
            time from the web application provided to them on their table after
            logging into the application.
          </p>
        </Accordion.Content>
      </Accordion>
    );
  }
}

export default About;
