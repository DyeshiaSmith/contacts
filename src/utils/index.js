export const getStateProxy = (component) =>
  new Proxy(component, {
    set(comp, prop, value) {
      comp.setState({ [prop]: value });
      return true;
    },
  });
