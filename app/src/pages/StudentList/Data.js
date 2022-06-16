import React from "react";
import Next from "../../assets/caret-right-fill.svg";
import Previous from "../../assets/caret-left-fill.svg";
import Edit from "../../assets/pencil-square.svg";
import Delete from "../../assets/trash-fill.svg";
import "./data.scss";

function Data({
  getListStudentsData,
  currentData,
  deleteData,
  editRequest,
  onNext,
  onPrevious,
  currentPage,
  lastPage,
}) {
  return (
    <div className="data">
      <div className="header">
        <div className="overview">
          <div className="count">
            {getListStudentsData
              ? getListStudentsData.data.length
              : "Loading..."}
          </div>
          <span>Total Data</span>
        </div>
        <div className="pagination">
          <button onClick={() => onPrevious()} disabled={currentPage === 1}>
            <img src={Previous} alt="previous" />
          </button>
          <span>
            {currentPage} of {lastPage}
          </span>
          {/* eslint-disable-next-line eqeqeq */}
          <button onClick={() => onNext()} disabled={currentPage == lastPage}>
            <img src={Next} alt="next" />
          </button>
        </div>
      </div>
      <div className="pelamar">
        <ul className="table">
          <li className="header-table">
            <div className="col1">Name</div>
            <div className="col2">Email</div>
            <div className="col3">Phone</div>
            <div className="col4">Address</div>
            <div className="col5">Action</div>
          </li>
          {currentData ? (
            currentData.map((data) => {
              return (
                <li className="row" key={data.id}>
                  <div className="col col1" data-label="Name">
                    {data.firstName} {data.lastName}
                  </div>
                  <div className="col col2" data-label="Email">
                    {data.email}
                  </div>
                  <div className="col col3" data-label="Phone Number">
                    {data.phone}
                  </div>
                  <div className="col col4" data-label="Address">
                    {data.address}
                  </div>
                  <div className="col col5" data-label="Action">
                    <img
                      className="edit-button"
                      src={Edit}
                      alt="edit"
                      onClick={() => {
                        editRequest(data);
                      }}
                    />
                    <img
                      className="delete"
                      src={Delete}
                      alt="delete"
                      onClick={() => {
                        deleteData(data.id);
                      }}
                    />
                  </div>
                </li>
              );
            })
          ) : (
            <div>Loading...</div>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Data;
