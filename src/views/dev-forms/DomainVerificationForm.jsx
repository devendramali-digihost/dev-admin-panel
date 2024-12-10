import React, { useState, useEffect } from "react";
import { Row, Col, Form, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { AiOutlineStop } from "react-icons/ai";
// import search from "./../../assets/images/icons/search.svg"

export const DomainVerificationForm = () => {
  const [buystatus, setbuystatus] = useState("buy");
  const [showSearchDomain, setShowSearchDomain] = useState(true);

  const handleShowSearchDomain = () => {
    setShowSearchDomain(!showSearchDomain);
  };

  const handleResetDomainVerification = () => {
    setShowSearchDomain(false); // Hide ScratchModules div on reset
    console.log("Reset clicked!");
  };

  const buyevent = (status) => {
    setbuystatus(status);
  };
  const optiondomain = [
    {
      damain: "diigiihost.com",
      prize: 1999,
    },
    {
      damain: "diigiihost.net",
      prize: 1999,
    },
    {
      damain: "diigiihost.online",
      prize: 1999,
    },
    {
      damain: "diigihost.info",
      prize: 1999,
    },
    {
      damain: "diigiihost.org",
      prize: 1999,
    },
    {
      damain: "diigiihost.live",
      prize: 1999,
    },
  ];

  const [isvisible, setisvisible] = useState(true);
  const [prevscrollpos, setprevscrollpos] = useState(0);

  useEffect(() => {
    const handlescroll = () => {
      const currentsrollpos = window.pageYOffset;
      const sectiontop = document.getElementsByClassName("sroll").offsetTop;

      if (currentsrollpos > prevscrollpos) {
        setisvisible(false);
      } else {
        setisvisible(true);
      }

      if (currentsrollpos <= sectiontop) {
        setisvisible(true);
      }

      setprevscrollpos(currentsrollpos);
    };

    window.addEventListener("scroll", handlescroll);

    return () => {
      window.removeEventListener("scroll", handlescroll);
    };
  }, [prevscrollpos]);
  // Search domain
  return (
    <React.Fragment>
      {/* <div className="mainForm">
        <p className="personal">
          Domain Verification Form{' '}
          <div class="icon-wrapper">
            <Link to="/company/create-new-project">
              <i class="fas fa-home custom-icon">
                <span class="fix-editor">&nbsp;</span>
              </i>
            </Link>
          </div>
        </p>
        <p className="personalInfo">Please provide your domain details.</p>

        <Row>
          <Col lg={12}>
            <Form>
              <Row>
                <Col lg={12}>
                  <Form.Group className="mb-3" controlId="DomainName">
                    <Form.Label>Enter Domains</Form.Label>
                    <Form.Control type="text" placeholder="Enter Domains" />
                  </Form.Group>
                </Col>

                <Col lg={12}>
                  <div className="text-start gap-2 d-flex align-items-center buy-btn">
                    <button type="submit" className="btn btn-primary waves-effect waves-light" variant="primary">
                      Verify
                    </button>
                    or
                    <Link to="/buy-domain">Buy Domain</Link>
                  </div>
                  <div className="details">
                    <h4>Details</h4>
                    <table>
                      <tr className="info">
                        <td>Is the domain correct?:</td>
                        <td>Yes</td>
                      </tr>
                      <tr className="info">
                        <td>Registry Domain ID:</td>
                        <td>HJIW4928</td>
                      </tr>
                      <tr className="info">
                        <td>Updated Date:</td>
                        <td>25th September 2024</td>
                      </tr>
                      <tr className="info">
                        <td>Creation Date: </td>
                        <td>25th September 2024</td>
                      </tr>
                      <tr className="info">
                        <td>Registrar Registration Expiration Date: </td>
                        <td>25th September 2024</td>
                      </tr>
                    </table>
                  </div>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </div> */}
      {showSearchDomain && (
        <section className="section choosedomain">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12">
                <p className="personal">
                  Domain Verification Form{" "}
                  <div class="icon-wrapper">
                    <Link to="/company/create-new-project">
                      <i class="fas fa-home custom-icon">
                        <span class="fix-editor">&nbsp;</span>
                      </i>
                    </Link>
                  </div>
                </p>
                <p className="personalInfo">
                  Do you already have a domain for your website?
                </p>
              </div>
              <div className="col-lg-8 col-xl-10">
                {/* <h2 className="heading">
                Do you already have a domain for your website?
              </h2> */}
              </div>
            </div>
            <div className="buyque">
              <div
                className={buystatus === "buy" ? "buy active" : "buy"}
                onClick={() => buyevent("buy")}
              >
                <div className="cardbtn">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M6.12669 13.9784C5.97396 14.132 5.76558 14.2177 5.54913 14.2177C5.33267 14.2177 5.1243 14.132 4.97157 13.9784L0.359012 9.36506C-0.119671 8.88638 -0.119671 8.11016 0.359012 7.63238L0.936573 7.05467C1.4154 6.57598 2.19072 6.57598 2.6694 7.05467L5.54913 9.93454L13.3306 2.15296C13.8094 1.67427 14.5855 1.67427 15.0634 2.15296L15.641 2.73067C16.1196 3.20935 16.1196 3.98541 15.641 4.46335L6.12669 13.9784Z"
                        fill="#fff"
                      />
                    </svg>
                  </span>
                </div>
                <h4>No, I want to buy.</h4>
              </div>
              <div
                className={buystatus === "have" ? "buy active" : "buy"}
                onClick={() => buyevent("have")}
              >
                <div className="cardbtn">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M6.12669 13.9784C5.97396 14.132 5.76558 14.2177 5.54913 14.2177C5.33267 14.2177 5.1243 14.132 4.97157 13.9784L0.359012 9.36506C-0.119671 8.88638 -0.119671 8.11016 0.359012 7.63238L0.936573 7.05467C1.4154 6.57598 2.19072 6.57598 2.6694 7.05467L5.54913 9.93454L13.3306 2.15296C13.8094 1.67427 14.5855 1.67427 15.0634 2.15296L15.641 2.73067C16.1196 3.20935 16.1196 3.98541 15.641 4.46335L6.12669 13.9784Z"
                        fill="#fff"
                      />
                    </svg>
                  </span>
                </div>
                <h4>Yes, I already have.</h4>
              </div>
            </div>
            <div
              className={
                buystatus === "have"
                  ? "search-container have-already"
                  : "search-container"
              }
            >
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="search">
                    <input type="search" placeholder="simplyhappypets.in" />
                    <div className="serchicon" onClick={handleShowSearchDomain}>
                      <IoSearchOutline />
                      {/* <img src={search} alt="search" /> */}
                      <button className="btn btn-primary veri">Verify</button>
                    </div>
                  </div>
                  <h5 className="w-100 text-center mt-3">
                    {/* <span className="register">
                      This domain is already registered
                    </span> */}
                    <span className="not-register">
                      This domain is already registered
                    </span>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {!showSearchDomain && (
        <section className="section searchdomain">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12">
                <p className="personal">
                  Register Your Domain
                  <div class="icon-wrapper">
                    <Link to="/company/create-new-project">
                      <i class="fas fa-home custom-icon">
                        <span class="fix-editor">&nbsp;</span>
                      </i>
                    </Link>
                  </div>
                </p>
                <p className="personalInfo">Register Your Domain</p>
              </div>
              {/* <div className="col-lg-8">
                <h2 className="heading">Register Your Domain</h2>
              </div> */}
            </div>
            <div className="search-container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="search">
                    <input type="search" placeholder="simplyhappypets.in" />
                    <div className="serchicon">
                      <IoSearchOutline />
                      {/* <img src={search} alt="search" /> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="yourdomain">
              <div className="is-available">
                <span className="yourdomainstatus">
                  Your domain name is available!
                </span>
                <hr />
                <div className="yourdomaincontainer">
                  <div className="domainhead">
                    <h4>diigiihost.in</h4>
                  </div>
                  <div className="domainprize">
                    {/* <h4>
                    <span>₹</span>1,199/<span className="yr">yr</span>
                  </h4> */}
                    <div className="premium-btn">
                      <a href="#!" className="btn btn-primary">
                        Confirm Purchase
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="is-not-available">
                <div className="yourdomaincontainer">
                  <div className="domainhead">
                    <h4>
                      <AiOutlineStop /> diigiihost.in is taken
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="purchase">
              <h5 className="purchaseheading">Also available for purchase</h5>
              <div className="avalibledomains">
                {optiondomain.map((domains) => (
                  <div className="domlist">
                    <div className="domainhead">
                      <h4>{domains.damain}</h4>
                    </div>
                    <div className="domainprize">
                      {/* <h4>
                        <span>₹</span>
                        {domains.prize}/<span className="yr">yr</span>
                      </h4> */}
                      <div className="premium-btn">
                        <a href="#!" className="btn btn-primary">
                          {/* <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="26"
                            height="26"
                            viewBox="0 0 26 26"
                            fill="none"
                          >
                            <path
                              d="M10.832 14.3518C10.3833 14.3518 10.0195 14.7156 10.0195 15.1643C10.0195 15.613 10.3833 15.9768 10.832 15.9768H17.332C17.7807 15.9768 18.1445 15.613 18.1445 15.1643C18.1445 14.7156 17.7807 14.3518 17.332 14.3518H10.832Z"
                              fill="#8AFAF3"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M1.87046 1.9672C1.76163 1.53186 1.3205 1.26718 0.885164 1.37601C0.44983 1.48484 0.18515 1.92598 0.293982 2.36132L1.43337 6.91887L2.49375 11.3433C2.94462 13.2245 3.29952 14.7053 3.72067 15.8557C4.15266 17.0357 4.68242 17.9518 5.53237 18.6543C5.60572 18.7149 5.68045 18.7738 5.7565 18.831C6.63775 19.4939 7.65208 19.7955 8.9003 19.9406C10.1171 20.0821 11.6398 20.0821 13.5744 20.082H14.2173C15.891 20.0821 17.2087 20.0821 18.2701 19.9747C19.3574 19.8648 20.252 19.6366 21.057 19.1325C21.4389 18.8934 21.7937 18.6136 22.1152 18.298C22.7929 17.6327 23.2234 16.8158 23.5837 15.7842C23.9354 14.777 24.2426 13.4956 24.6327 11.868L24.6553 11.7734C24.8905 10.792 25.0844 9.98313 25.1594 9.32784C25.2371 8.64773 25.2053 8.00015 24.8659 7.40888C24.7206 7.156 24.5391 6.9258 24.3271 6.72565C23.8312 6.2577 23.2088 6.07591 22.5293 5.99301C21.8746 5.91311 21.0428 5.91313 20.0336 5.91315H2.85696L1.87046 1.9672ZM4.06197 10.9143L3.25282 7.53815H19.9808C21.056 7.53815 21.7879 7.5396 22.3325 7.60604C22.8637 7.67085 23.0814 7.78453 23.2118 7.90747C23.3081 7.99845 23.3906 8.10308 23.4566 8.21803C23.5459 8.37338 23.6057 8.61166 23.5449 9.1433C23.4826 9.68835 23.3134 10.4004 23.0628 11.446C22.66 13.1263 22.3711 14.3277 22.0496 15.2483C21.7334 16.1536 21.4092 16.7139 20.9768 17.1384C20.7392 17.3717 20.4769 17.5785 20.1947 17.7552C19.6811 18.0768 19.0605 18.2614 18.1067 18.3579C17.1364 18.4561 15.9008 18.457 14.1729 18.457H13.6261C11.6285 18.457 10.2001 18.4558 9.08789 18.3265C7.99623 18.1996 7.29828 17.9573 6.73328 17.5324C6.67707 17.4901 6.62183 17.4465 6.56761 17.4018C6.02268 16.9513 5.62444 16.3291 5.24662 15.2971C4.8617 14.2456 4.52752 12.8568 4.06197 10.9143Z"
                              fill="#8AFAF3"
                            />
                            <path
                              d="M11.3471 22.6872C11.3471 23.317 10.8365 23.8276 10.2068 23.8276C9.57696 23.8276 9.06641 23.317 9.06641 22.6872C9.06641 22.0575 9.57696 21.5469 10.2068 21.5469C10.8365 21.5469 11.3471 22.0575 11.3471 22.6872Z"
                              fill="#8AFAF3"
                            />
                            <path
                              d="M18.187 22.6872C18.187 23.317 17.6764 23.8276 17.0467 23.8276C16.4168 23.8276 15.9062 23.317 15.9062 22.6872C15.9062 22.0575 16.4168 21.5469 17.0467 21.5469C17.6764 21.5469 18.187 22.0575 18.187 22.6872Z"
                              fill="#8AFAF3"
                            />
                          </svg> */}
                          Confirm Purchase
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </React.Fragment>
  );
};
