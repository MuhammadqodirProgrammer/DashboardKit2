import Aside from "./components/Aside/Aside";
import Navbar from "./components/Navbar/Navbar";
import "./app.scss";
import { Tickets } from "./components/Tickets/Tickets";

function App() {
  return (
    <div className="App">
      <>
        <div className="box">
          <div className="box_left">
            <Aside />
          </div>
          <div className="box_right">
            <Navbar />
<Tickets />           
           
          </div>
        </div>
      </>
    </div>
  );
}

export default App;
