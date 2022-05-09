import axios from "axios";
import React, { useEffect, useState } from "react";

const AddEditForm = (props) => {
  const { onClose, editId } = props;

  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (editId) loadFormData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editId]);

  const loadFormData = async () => {
    const url =
      "https://bodhavajiapi.disctesting.in/api/masters/allMasters/getEmployeeDetails";
    await axios.post(url, { id: editId }).then((res) => {
      setFormData(res.data.data);
    });
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        editId
          ? "https://bodhavajiapi.disctesting.in/api/masters/allMasters/updateEmployeeMasters"
          : "https://bodhavajiapi.disctesting.in/api/masters/allMasters/createEmployeeMasters",
        formData
      )
      .then((res) => {
        setFormData({});
        onClose(true);
      });
  };

  const Aso = () => {
    return (
      <div className="row mb-3">
        <label htmlFor="asoRole" className="col-sm-4 col-form-label-sm">
          ASO
        </label>
        <div className="col-sm-8">
          <select
            className="form-select form-select-sm"
            aria-label=".form-select-sm example"
            id="asoRole"
          >
            <option value="" className="text-muted">
              Select
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
      </div>
    );
  };

  const Yard = () => {
    return (
      <div className="row mb-3">
        <label htmlFor="yardRole" className="col-sm-4 col-form-label-sm">
          Yard
        </label>
        <div className="col-sm-8">
          <select
            className="form-select form-select-sm"
            aria-label=".form-select-sm example"
            id="yardRole"
          >
            <option value="" className="text-muted">
              Select
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
      </div>
    );
  };

  return (
    <div className="mt-4">
      <h5 className="text-center">Add Employee Details</h5>
      <hr />
      <div className="modal-body d-flex justify-content-center align-content-center">
        <form style={{ width: "40vw" }}>
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-4 col-form-label-sm">
              Full Name
            </label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control"
                id="inputEmail3"
                name="fullName"
                value={formData?.fullName ?? ""}
                onChange={changeHandler}
              />
            </div>
          </div>
          <div className="row mb-3">
            <label
              htmlFor="inputPassword3"
              className="col-sm-4 col-form-label-sm"
            >
              Address
            </label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control"
                id="inputPassword3"
                name="address"
                value={formData?.address ?? ""}
                onChange={changeHandler}
              />
            </div>
          </div>
          <div className="row mb-3">
            <label
              htmlFor="mobileNumber"
              className="col-sm-4 col-form-label-sm"
            >
              Mobile Number
            </label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control"
                id="mobileNumber"
                name="mobile"
                value={formData?.mobile ?? ""}
                onChange={changeHandler}
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="emailBox" className="col-sm-4 col-form-label-sm">
              Email Id
            </label>
            <div className="col-sm-8">
              <input
                type="email"
                className="form-control"
                id="emailBox"
                name="emailId"
                value={formData?.emailId ?? ""}
                onChange={changeHandler}
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="stateBox" className="col-sm-4 col-form-label-sm">
              State
            </label>
            <div className="col-sm-8">
              <select
                className="form-select form-select-sm"
                aria-label=".form-select-sm example"
                name="stateId"
                value={formData?.stateId ?? ""}
                onChange={changeHandler}
              >
                <option value="" className="text-muted">
                  Select state
                </option>
                <option value="1">Maharashtra</option>
                <option value="2">Gujarat</option>
                <option value="3">Rajasthan</option>
                <option value="4">Haryana</option>
              </select>
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="cityBox" className="col-sm-4 col-form-label-sm">
              City
            </label>
            <div className="col-sm-8">
              <select
                className="form-select form-select-sm"
                aria-label=".form-select-sm example"
                name="cityId"
                value={formData?.cityId ?? ""}
                onChange={changeHandler}
              >
                <option value="" className="text-muted">
                  Select city
                </option>
                <option value="1">Pune</option>
                <option value="2">Surat</option>
                <option value="3">Jaipur</option>
                <option value="4">Delhi</option>
              </select>
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="roleBox" className="col-sm-4 col-form-label-sm">
              Select role
            </label>
            <div className="col-sm-8">
              <select
                className="form-select form-select-sm"
                aria-label=".form-select-sm example"
                id="roleBox"
                name="roleId"
                value={formData?.roleId ?? ""}
                onChange={changeHandler}
              >
                <option value="" className="text-muted">
                  Select
                </option>
                <option value="1">ASO</option>
                <option value="2">BM</option>
                <option value="3">Yard Person</option>
                <option value="4">Account team</option>
                <option value="5">Logistic team</option>
                <option value="6">Credit team</option>
              </select>
            </div>
          </div>
          {formData?.roleId === "2" && (
            <>
              <div className="row mb-3">
                <label htmlFor="credit" className="col-sm-4 col-form-label-sm">
                  Credit Limit
                </label>
                <div className="col-sm-8">
                  <select
                    className="form-select form-select-sm"
                    aria-label=".form-select-sm example"
                    id="credit"
                    name="creditLimit"
                    value={formData?.creditLimit ?? ""}
                    onChange={changeHandler}
                  >
                    <option value="" className="text-muted">
                      Select
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                </div>
              </div>
              {Aso()}
              {Yard()}
            </>
          )}
          {formData?.roleId === "1" && (
            <>
              {Aso()}
              {Yard()}
            </>
          )}

          <div className="row mb-3">
            <label htmlFor="bmRole" className="col-sm-4 col-form-label-sm">
              BM
            </label>
            <div className="col-sm-8">
              <select
                className="form-select form-select-sm"
                aria-label=".form-select-sm example"
                id="bmRole"
                name="BMId"
                value={formData?.BMId ?? ""}
                onChange={changeHandler}
              >
                <option value="" className="text-muted">
                  Select
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
          </div>
          {formData?.roleId === "3" && (
            <>
              <div className="row mb-3">
                <label
                  htmlFor="yardList"
                  className="col-sm-4 col-form-label-sm"
                >
                  Yard List
                </label>
                <div className="col-sm-8">
                  <select
                    className="form-select form-select-sm"
                    aria-label=".form-select-sm example"
                    id="yardList"
                  >
                    <option value="" className="text-muted">
                      Select
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                </div>
              </div>
            </>
          )}
          <div className="row mb-3">
            <label htmlFor="dateBox" className="col-sm-4 col-form-label-sm">
              Employee Joining Date
            </label>
            <div className="col-sm-8">
              <input
                type="date"
                className="form-control"
                id="dateBox"
                name="employeeJoiningDate"
                value={formData?.employeeJoiningDate ?? ""}
                onChange={changeHandler}
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="statusBox" className="col-sm-4 col-form-label-sm">
              Status
            </label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control"
                id="statusBox"
                name="status"
                value={formData?.status ?? ""}
                onChange={changeHandler}
              />
              {/* <option value="" className="text-muted">
                  Select
                </option>
                <option value="1">Joined</option>
                <option value="2">Notice</option>
                <option value="3">Left</option>
              </select> */}
            </div>
          </div>
          <div className="row mb-3">
            <label
              htmlFor="reoprtingManager"
              className="col-sm-4 col-form-label-sm"
            >
              Reporting Manager
            </label>
            <div className="col-sm-8">
              <select
                className="form-select form-select-sm"
                aria-label=".form-select-sm example"
                id="reoprtingManager"
                name="reportingManager"
                value={formData?.reportingManager ?? ""}
                onChange={changeHandler}
              >
                <option value="" className="text-muted">
                  Select
                </option>
                <option value="1">Aarti</option>
                <option value="2">Satish</option>
                <option value="3">Akshay</option>
                <option value="4">Sagar</option>
              </select>
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="password" className="col-sm-4 col-form-label-sm">
              Password
            </label>
            <div className="col-sm-8">
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={formData?.password ?? ""}
                onChange={changeHandler}
              />
            </div>
          </div>
        </form>
      </div>
      <div className="modal-footer d-flex justify-content-center align-content-center">
        <button
          onClick={() => onClose(false)}
          className="btn btn-outline-secondary"
        >
          Close
        </button>
        <button
          type="button"
          onClick={handleSubmit}
          className="btn btn-primary"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddEditForm;
