import React from "react";
function Team() {
  return (
    <div className="container">
      <div className="row" style={{ marginBottom: "10%" }}>
        <h2 className="text-center">People</h2>

        <div className="col-5 mb-5 mt-5 ">
          <figure style={{ position: "relative", left: "30%" }}>
            <img
              src="media/nithinKamath.jpg"
              alt=""
              style={{
                borderRadius: "50%",
                width: "70%",
                marginBottom: "10px",
              }}
            />
            <figcaption style={{ position: "absolute", left: "20%" }}>
              <h5>Nithin Kamath</h5>
              <p className="text-center">Founder, CEO</p>
            </figcaption>
          </figure>
        </div>
        <div className="col-7" style={{ padding: "0px 5%" }}>
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          .
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>Connect on Homepage / TradingQnA / Twitter</p>
        </div>
      </div>
      <div className="row">
        <div class="gridTeam">
          <div>
            <figure style={{ textAlign: "center" }}>
              <img
                src="media/Nikhil.jpg"
                alt=""
                style={{
                  borderRadius: "50%",
                  width: "65%",
                  marginBottom: "5%",
                }}
              />
              <figcaption
                style={{ textAlign: "center" }}
              >
                <h5>Nikhil Kamath</h5>
                <p>Co-founder & CFO</p>
                <button>Bio</button>
              </figcaption>
            </figure>
          </div>
          <div>
            <figure style={{textAlign: "center" }}>
              <img
                src="media/Kailash.jpg"
                alt=""
                style={{
                  borderRadius: "50%",
                  width: "65%",
                  marginBottom: "5%",
                }}
              />
              <figcaption
                style={{ textAlign: "center" }}
              >
                <h5>Kailash Nadh</h5>
                <p>CTO</p>
                <button>Bio</button>
              </figcaption>
            </figure>
          </div>

          <div>
            <figure style={{ textAlign: "center" }}>
              <img
                src="media/Venu.jpg"
                alt=""
                style={{
                  borderRadius: "50%",
                  width: "65%",
                  marginBottom: "5%",
                }}
              />
              <figcaption
                style={{textAlign: "center" }}
              >
                <h5>Venu Madhav</h5>
                <p>COO</p>
                <button>Bio</button>
              </figcaption>
            </figure>
          </div>
          <div>
            <figure style={{ textAlign: "center" }}>
              <img
                src="media/Hanan.jpg"
                alt=""
                style={{
                  borderRadius: "50%",
                  width: "65%",
                  marginBottom: "5%",
                }}
              />
              <figcaption
                style={{ textAlign: "center" }}
              >
                <h5>Hanan Delvi</h5>
                <p>CCO</p>
                <button>Bio</button>
              </figcaption>
            </figure>
          </div>

          <div>
            <figure style={{ textAlign: "center" }}>
              <img
                src="media/Seema.jpg"
                alt=""
                style={{
                  borderRadius: "50%",
                  width: "65%",
                  marginBottom: "5%",
                }}
              />
              <figcaption
                style={{  textAlign: "center" }}
              >
                <h5>Seema Patil</h5>
                <p>Director</p>
                <button>Bio</button>
              </figcaption>
            </figure>
          </div>

          <div >
            <figure style={{textAlign: "center" }}>
              <img
                src="media/karthik.jpg"
                alt=""
                style={{
                  borderRadius: "50%",
                  width: "65%",
                  marginBottom: "5%",
                }}
              />
              <figcaption
                style={{ textAlign: "center" }}
              >
                <h5>Karthik Rangappa</h5>
                <p>Chief of Education</p>
                <button>Bio</button>
              </figcaption>
            </figure>
          </div>

          <div>
            <figure style={{  textAlign: "center" }}>
              <img
                src="media/Austin.jpg"
                alt=""
                style={{
                  borderRadius: "50%",
                  width: "65%",
                  marginBottom: "5%",
                }}
              />
              <figcaption
                style={{ textAlign: "center" }}
              >
                <h5>Austin Prakesha</h5>
                <p>Director Strategy</p>
                <button>Bio</button>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
