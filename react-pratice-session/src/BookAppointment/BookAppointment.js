import React, { useState } from "react";
import axios from "axios";

function BookAppointment() {
  const [state, setState] = useState({
    bookingDetails: {
      fname: "",
      lname: "",
      email: "@gmail.com",
      doctor: "select",
      date: "",
      communicationMode: "",
      isBooked: false,
      isPosted: false,
    },
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    setState({
      bookingDetails: {
        ...state.bookingDetails,
        isBooked: true,
      },
    });
    console.log(state);
    handlePost();
  };

  const handlePost = async () => {
    let res = await axios.post("https://jsonplaceholder.typicode.com/posts");

    if (res) {
      setState({
        bookingDetails: {
          ...state.bookingDetails,
          isPosted: true,
        },
      });
    }
    console.log(res.data);
  };

  const handleCancelAppointment = () => {
      setState({
        bookingDetails: {
          ...state.bookingDetails,
          isPosted: false,
        },
      });
  }

  return (
    <React.Fragment>
      {state.bookingDetails.isPosted === false && (
        <div className="container">
          <h1>Book Session</h1>
          <p>
            Fill in the form below to book a virtual session with your doctor.
          </p>

          {state.bookingDetails.isBooked === false && (
            <div>
              <h2>Basic Info</h2>
              <form onSubmit={handleSubmit}>
                <div className={"mb-2"}>
                  <label htmlFor={"fname"} className={"form-label fs-5"}>
                    First Name
                  </label>
                  <input
                    type={"text"}
                    name={"fname"}
                    id={"fname"}
                    className={"form-control"}
                    value={state.bookingDetails.fname}
                    onChange={(e) =>
                      setState({
                        bookingDetails: {
                          ...state.bookingDetails,
                          fname: e.target.value,
                        },
                      })
                    }
                    required
                  />
                </div>

                <div className={"mb-2"}>
                  <label htmlFor={"lname"} className={"form-label fs-5"}>
                    Last Name
                  </label>
                  <input
                    type={"text"}
                    name={"lname"}
                    id={"lname"}
                    className={"form-control"}
                    value={state.bookingDetails.lname}
                    onChange={(e) =>
                      setState({
                        bookingDetails: {
                          ...state.bookingDetails,
                          lname: e.target.value,
                        },
                      })
                    }
                    required
                  />
                </div>

                <div className={"mb-2"}>
                  <label htmlFor={"email"} className={"form-label fs-5"}>
                    Email
                  </label>
                  <input
                    type={"email"}
                    name={"fname"}
                    id={"email"}
                    className={"form-control"}
                    value={state.bookingDetails.email}
                    onChange={(e) =>
                      setState({
                        bookingDetails: {
                          ...state.bookingDetails,
                          email: e.target.value,
                        },
                      })
                    }
                    required
                  />
                </div>

                <div className={"mb-2"}>
                  <label htmlFor={"doctor"} className={"form-label fs-5"}>
                    Doctor
                  </label>
                  <select
                    id={"doctor"}
                    className={"form-select"}
                    value={state.bookingDetails.doctor}
                    onChange={(e) =>
                      setState({
                        bookingDetails: {
                          ...state.bookingDetails,
                          doctor: e.target.value,
                        },
                      })
                    }
                  >
                    <option value={"select"}>Select Your Doctor</option>
                    <option value={"John Hopkins"}>Dr. John Hopkins</option>
                    <option value={"Maya Marin"}>Dr. Maya Marin</option>
                    <option value={"Donna Douglas"}>Dr. Donna Douglas</option>
                    <option value={"Jack Sparrow"}>Dr. Jack Sparrow</option>
                  </select>
                </div>

                <div>
                  {state.bookingDetails.doctor !== "select" && (
                    <div>
                      {" "}
                      <fieldset className="row mb-2">
                        <legend className="col-form-label col-sm-2 pt-0 fs-5 fw-bold">
                          Where?
                        </legend>
                        <div className="col-sm-10">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name={"communicationMode"}
                              id={"googleMeet"}
                              value={"Google Meet"}
                              onChange={(e) =>
                                setState({
                                  bookingDetails: {
                                    ...state.bookingDetails,
                                    communicationMode: e.target.value,
                                  },
                                })
                              }
                            />
                            <label
                              className="form-check-label"
                              htmlFor={"googleMeet"}
                            >
                              Google Meet
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name={"communicationMode"}
                              id="phone"
                              value={"Phone"}
                              onChange={(e) =>
                                setState({
                                  bookingDetails: {
                                    ...state.bookingDetails,
                                    communicationMode: e.target.value,
                                  },
                                })
                              }
                            />
                            <label className="form-check-label" htmlFor="phone">
                              Phone
                            </label>
                          </div>
                        </div>
                      </fieldset>
                      <fieldset className="row mb-2">
                        <legend className="col-form-label col-sm-2 pt-0 fs-5 fw-bold">
                          When?
                        </legend>
                        <div className="col-sm-10">
                          <input
                            className=""
                            type={"datetime-local"}
                            name={"dateTime"}
                            id={"dateTime"}
                            value={state.bookingDetails.date}
                            onChange={(e) =>
                              setState({
                                bookingDetails: {
                                  ...state.bookingDetails,
                                  date: e.target.value,
                                },
                              })
                            }
                          />
                        </div>
                      </fieldset>{" "}
                    </div>
                  )}
                </div>

                <div className={"mb-4 mt-4"}>
                  <button type="submit" className={"btn btn-primary"}>
                    Confirm Booking
                  </button>
                </div>
              </form>
            </div>
          )}
          <div>
            {state.bookingDetails.isBooked === true && (
              <div>
                <h2>Scheduling Appointment...</h2>
              </div>
            )}
          </div>
        </div>
      )}
      <div className="container">
      {
          state.bookingDetails.isPosted === true &&
          <div className="card" style={{width:"35rem", marginLeft:"25%",marginTop:"20%", textAlign:"center"}}>
          <div className="card-body">
          <h2>Appointment Booked Successfully</h2>

          <div className="card text-muted" style={{borderRadius:"20px"}}>
          <h5>Full Name : {state.bookingDetails.fname + " " + state.bookingDetails.lname}</h5>
          <h5>Email : {state.bookingDetails.email}</h5>
          <h5>Doctor to be Meet: {state.bookingDetails.doctor}</h5>
          <h5>Mode of Communication : {state.bookingDetails.communicationMode}</h5>
          <h5>Date and Time : {state.bookingDetails.date}</h5>
          </div>

          <button className="btn btn-primary mt-4" onClick={handleCancelAppointment}>Cancel Appointment</button>
          </div>
          </div>
      }
      </div>
    </React.Fragment>
  );
}



export default BookAppointment;
