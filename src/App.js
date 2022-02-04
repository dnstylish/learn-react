import {useState, Fragment} from "react";
import Content from "./Content";

function App() {

  let [show, setShow] = useState(false)

  return (
        <Fragment>
          <button onClick={event => setShow(!show)}>Show Me</button>
          { show && <Content /> }
        </Fragment>
  );
}

export default App;
