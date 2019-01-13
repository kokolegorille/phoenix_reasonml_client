[%bs.raw {|require("./app.css")|}];

let component = ReasonReact.statelessComponent("App");

let str = ReasonReact.string;

let make = (~message, _children) => {
  ...component,
  render: _self =>
    <div>
      {str(message)}
      <Counter />
    </div>,
};