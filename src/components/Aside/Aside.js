import "./Asside.scss";
import imgdash from "../../assets/images/logo.png"
import { dataAside } from "../../data";

const Aside = () => {
  return (
    <>
  
      <ul className="list_aside">
      <li className="item_aside" >
      <img src={imgdash} alt="img" />
       <p className="dash">Dashboard Kit</p> 
       </li>
        {dataAside.map((el) => (
          <li className="item_aside">
            <img src={el.icon} alt="img" />
            <span className="aside-span"> {el.link}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Aside;
