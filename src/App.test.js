import React from "react";
import { shallow } from "enzyme"
import App from "./App";

/**
 * Factory function to create ShallowWrapper for the App Component
 * @function setup
 * @param {object} props - component props specific to this setup
 * @param {any} state - Initial state for setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}, state = null) => {
  const wrapper = shallow(<App {...props} />);
  if (state) return wrapper.setState(state);
  return wrapper;
};

/**
 * Return ShallowWrapper containing node(s) with the giver data-test value.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
 * @param {string} val - Value of data-test attribute for search.
 * @returns {ShallowWrapper}
 */
const findByTestAtrr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`);
};

test("renders without crashing", () => {
  const wrapper = setup();
  // console.log(wrapper.debug()); Show component as string
  const appComponent = findByTestAtrr(wrapper, "component-app");
  expect(appComponent.length).toBe(1);
  expect(wrapper).toBeTruthy();
});

test("renders increment button", () => {
  const wrapper = setup();
  const buttonComponent = findByTestAtrr(wrapper, "increment-button");
  expect(buttonComponent.length).toBe(1);
});

test("renders counter display", () => {
  const wrapper = setup();
  const counterComponent = findByTestAtrr(wrapper, "counter-display");
  expect(counterComponent.length).toBe(1);
});

test("counter starts at 0", () => {
  const wrapper = setup();
  const initialCounterState = wrapper.state("counter");
  const initialErrorState = wrapper.state("error");
  expect(initialCounterState).toBe(0);
  expect(initialErrorState).toBe(null);
});

test("clicking button increments counter display", () => {
  // set a state
  const counter = 7;
  const wrapper = setup(null, { counter });
  const errorState = wrapper.state("error");

  // find button and click
  const button = findByTestAtrr(wrapper, "increment-button");
  button.simulate("click");

  // find display and test value
  const counterDisplay = findByTestAtrr(wrapper, "counter-display");
  expect(counterDisplay.text()).toContain(counter + 1);

  expect(errorState).toBeNull();
});

test("clicking button decrement counter display", () => {
  const counter = 1;
  const wrapper = setup(null, { counter });

  // find decrement button
  const button = findByTestAtrr(wrapper, "decrement-button");
  button.simulate("click");

  const counterDisplay = findByTestAtrr(wrapper, "counter-display");
  expect(counterDisplay.text()).toContain(counter - 1);
});

test("clicking button decrement counter display and test values bellow zero", () => {
  const counter = 0;
  const wrapper = setup(null, { counter, error: null });

  // find decrement button
  const button = findByTestAtrr(wrapper, "decrement-button");
  button.simulate("click");

  const counterDisplay = findByTestAtrr(wrapper, "counter-display");
  expect(counterDisplay.text()).toContain(0);

  // test if error message was shown
  const errorMessage = findByTestAtrr(wrapper, "counter-display-error");
  expect(errorMessage.text()).toEqual(
    "Couldn't set counter to values bellow zero"
  );
});
