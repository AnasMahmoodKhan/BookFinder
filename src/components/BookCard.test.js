import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../test/testUtils";
import BookCard from "./BookCard";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

describe("BookCard component", () => {
  let wrapper;
  beforeEach(() => {
    const baseProps = {
      book: {
        id: 1,
        volumeInfo: {
          title: "abc",
          subtitle: "xyz",
          imageLinks: { thumbnail: "abcd" },
          description: "qwerty",
        },
      },
    };
    wrapper = shallow(<BookCard {...baseProps} />);
  });

  test("should render BookCard component without error", () => {
    const component = findByTestAttr(wrapper, "BookCard");
    expect(component).toHaveLength(1);
  });

  test("should render title", () => {
    const component = wrapper.find(Card.Title);
    expect(component.text()).toEqual("abc");
  });

  test("should render subtitle", () => {
    const component = wrapper.find(Card.Subtitle);
    expect(component.text()).toEqual("xyz");
  });

  test("should render description", () => {
    const component = wrapper.find(Card.Text);
    expect(component.text()).toEqual("qwerty");
  });

  test("should render Link with correct route", () => {
    const component = wrapper.find(Link);
    expect(component.text()).toEqual("View");
    expect(component.props().to).toEqual("/book/1");
  });
});
