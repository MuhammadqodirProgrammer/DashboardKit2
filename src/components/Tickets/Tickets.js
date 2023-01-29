// import person from "../../assets/images/user1.png"
import vertical from "../../assets/images/vertical.png";
import { dataUser } from "../../data";
import imgfilter from "../../assets/images/filter.png";
import imgsort from "../../assets/images/sort.png";

export const Tickets = () => {
  const btnFunc = (el) => {
    if (el === "High") {
      return "btn-danger btn";
    }
    if (el === "Normal") {
      return "btn-success btn";
    }
    if (el === "Low") {
      return "btn-warning btn";
    }
  };
  return (
    <>
      <div className="ticket-container">
        <div className="ticket-header">
          <h3>All tickets</h3>
          <div>
            <img src={imgsort} alt="img" width={20} />
            <span style={{ marginRight: "15px" }}>Sort</span>
            <img src={imgfilter} alt="img" width={20} />
            <span style={{ marginRight: "5px" }}>Filter</span>
          </div>
        </div>
        <div className="ticket-header-bottom">
          <p>Ticket details</p>
          <p>Customer name</p>
          <p>Date</p>
          <p>Priority</p>
        </div>
        {dataUser.map((item) => (
          <div className="user_box">
            <div className=" user_box-detail">
              <img src={item.img} alt="img" />
              <div>
                <h3>{item.detail}</h3>
                <p>{item.updated} </p>
              </div>
            </div>
            <div className=" user_box-castName">
              <h6>{item.custName} </h6>
              <p>{item.castDate} </p>
            </div>
            <div className=" user_box-date">
              <h6>{item.date} </h6>
              <p>{item.dateTime} </p>
            </div>
            <div className="btn-box">
              <button className={btnFunc(item.priority)}>
                {item.priority}{" "}
              </button>
            </div>
            <img src={vertical} alt="img" />
          </div>
        ))}
        <div className="ticket_footer">
<p>Rows per page: 8</p>
<p>1-8 of 1240 </p>
        </div>
      </div>
    </>
  );
};
