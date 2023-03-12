import React from "react";
import Header from "./Header";
import PaymentLogo from "../assets/money.png";
import UsersLogo from "../assets/users.png";
import RevenueLogo from "../assets/increase.png";
import Image from "./Image";
import { tableData } from "../tableData";
import Progress from "./Progress";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image7 from "../assets/image7.png";
import image8 from "../assets/image8.png";
import image9 from "../assets/image9.png";
import Clock from "./Clock";

const data = [
  {
    title: "payments",
    value: "30,000",
    logo: PaymentLogo,
  },
  {
    title: "Users",
    value: "2500",
    logo: UsersLogo,
  },
  {
    title: "Revenue generated",
    value: "400,000",
    logo: RevenueLogo,
  },
];

const handleStatusStyle = (status) => {
  if (status === "Verified") {
    return {
      backgroundColor: "#DEEDE5",
      color: "#427A5B",
    };
  } else if (status === "Pending") {
    return {
      backgroundColor: "#FDF8CE",
      color: "#938406",
    };
  }
};

const handleRatingStyle = (status) => {
  if (status === "Verified") {
    return {
      backgroundColor: "#DEEDE5",
      color: "#427A5B",
    };
  } else if (status === "Pending") {
    return {
      backgroundColor: "#EDDEDE",
      color: "#A65959",
    };
  }
};

function Main() {

  return (
    <div className="main py-4">
      <Header />
      <div className="container dashboard  mt-5 d-flex">
        <section className="dashboard-left">
          <h6>In the last 30 Days</h6>
          <div className="cards">
            {data.map((d,idx) => (
              <div className="card" key={idx}>
                <div className="content">
                  <span className="card-title">{d.title}</span>
                  <h2 className="card-subtitle">{d.value}</h2>
                </div>
                <Image src={d.logo} />
              </div>
            ))}
          </div>

          <div className="table-container">
            <div className="table-container-header">
              <div className="left">
                <h6>All Users</h6>
                <p>Monitor,Sales,Transactions etc.</p>
              </div>
              <div className="right">
                <div className="serach-input">
                  <svg
                    width="22"
                    height="22"
                    fill="none"
                    stroke="#5c5c5c"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M11 3a8 8 0 1 0 0 16 8 8 0 1 0 0-16z"></path>
                    <path d="m21 21-4.35-4.35"></path>
                  </svg>
                  <input
                    type="text"
                    name="search"
                    className="search"
                    placeholder="Search transactions"
                  />
                </div>
                <div className="filter-button">
                  <button
                    type="button"
                    className="btn btn-outline-light border border-secondary text-dark"
                  >
                    Filter
                  </button>
                </div>
              </div>
            </div>

            <div className="table">
              <table>
                <thead style={{ background: "#f9f9f9" }}>
                  <tr>
                    <th>User</th>
                    <th>Status</th>
                    <th>Ratings</th>
                    <th>Quality</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody style={{ background: "#fff" }}>
                  {tableData.map((data, idx) => (
                    <tr key={idx}>
                      <td
                        className="d-flex align-items-center"
                        style={{ columnGap: "10px" }}
                      >
                        <Image src={data.avatar} w="35" h="35" />
                        <span>{data.username}</span>
                      </td>
                      <td>
                        <span
                          style={{
                            padding: ".25rem .5rem",
                            borderRadius: "5px",
                            fontSize: ".8rem",
                            ...handleStatusStyle(data.status),
                          }}
                        >
                          {data.status}
                        </span>
                      </td>
                      <td>
                        <div className="d-flex align-items-center gap-2">
                          <Progress progress={data.ratings} />
                          <span>{data.ratings}</span>
                          <span
                            style={{
                              padding: ".25rem .5rem",
                              borderRadius: "5px",
                              fontSize: ".8rem",
                              ...handleRatingStyle(data.status),
                            }}
                          >
                            {data.percent}
                            {data.percent !== 0 &&
                              (data.status === "Verified" ? (
                                <svg
                                  width="18"
                                  height="18"
                                  fill="none"
                                  stroke="#5c5c5c"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="1"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M12 19V5"></path>
                                  <path d="m5 12 7-7 7 7"></path>
                                </svg>
                              ) : (
                                <svg
                                  width="18"
                                  height="18"
                                  fill="none"
                                  stroke="#5c5c5c"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="1"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M12 5v14"></path>
                                  <path d="m19 12-7 7-7-7"></path>
                                </svg>
                              ))}
                          </span>
                        </div>
                      </td>
                      <td>{data.qty}</td>
                      <td>{data.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="paginations p-3 d-flex align-items-start gap-2">
                <button type="button" className="btn btn-light" disabled>
                  Previous page
                </button>
                <ul className="d-flex align-items-center gap-3 p-0">
                  <li>1</li>
                  <li>2</li>
                  <li>3</li>
                  <li>4</li>
                  <li>5</li>
                </ul>
                <button type="button" className="btn btn-light">
                  Next page
                </button>
              </div>
            </div>
          </div>
        </section>
        <article className="dashboard-right p-3 h-full">
          <div className="recent-transaction card">
            <h6 className="text-center fw-semibold">Recent Transactions</h6>
            <ul className="mt-3 p-0">
              <li>
                <div>
                  <Image src={image1} w="35" h="35" />
                  <span className="username">Mulay</span>
                </div>
                <span>40K+ Sales</span>
                <span>1.4m revenue</span>
              </li>
              <li>
                <div>
                  <Image src={image2} w="35" h="35" />
                  <span className="username">Tarun</span>
                </div>
                <span>40K+ Sales</span>
                <span>1.4m revenue</span>
              </li>
              <li>
                <div>
                  <Image src={image3} w="35" h="35" />
                  <span className="username">JasRaj</span>
                </div>
                <span>40K+ Sales</span>
                <span>1.4m revenue</span>
              </li>
            </ul>
            <button type="button" className="btn btn-success">View all Users</button>
          </div>

          <div className="highest-transaction card">
            <h6 className="text-center fw-semibold">Highest Transactions</h6>
            <ul className="mt-3 p-0">
              <li>
                <div>
                  <Image src={image7} w="35" h="35" />
                  <span className="username">Edviron</span>
                </div>
                <span>40K+ Sales</span>
                <span>1.4m revenue</span>
              </li>
              <li>
                <div>
                  <Image src={image8} w="35" h="35" />
                  <span className="username">TeachC</span>
                </div>
                <span>40K+ Sales</span>
                <span>1.4m revenue</span>
              </li>
              <li>
                <div>
                  <Image src={image9} w="35" h="35" />
                  <span className="username">ThrivE</span>
                </div>
                <span>40K+ Sales</span>
                <span>1.4m revenue</span>
              </li>
            </ul>
            <button type="button" className="btn btn-success">View all transactions</button>
          </div>

          <div className="card justify-content-center">
            <Clock />
          </div>
        </article>
      </div>
    </div>
  );
}

export default Main;
