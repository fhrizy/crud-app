import React, { useState, useEffect } from "react";
import axios from "axios";
import Next from "../assets/caret-right-fill.svg";
import Previous from "../assets/caret-left-fill.svg";
import Edit from "../assets/pencil-square.svg";
import Delete from "../assets/trash-fill.svg";
import "../stylesheets/data.scss";

function Data({
  navigate,
  deleteData,
  setId,
  editRequest,
}) {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const axiosData = async () => {
      await axios
        .get(`http://localhost:8080/api/findall?page=${page}&size=10`)
        .then((res) => {
          if (mounted) {
            setData(res.data);
            setLoading(false);
          }
        });
    };
    axiosData();

    return () => {
      mounted = false;
    };
  }, [page, deleteData]);

  return (
    <div className="data">
      <div className="header">
        <div className="overview">
          <div className="count">{data.totalItems}</div>
          <span>Total Data</span>
        </div>
        <div className="pagination">
          <button onClick={() => setPage(page - 1)} disabled={page <= 0}>
            <img src={Previous} alt="previous" />
          </button>
          <span>
            {data.currentPage + 1} of {data.totalPages}
          </span>
          <button
            onClick={() => setPage(page + 1)}
            disabled={page + 1 === data.totalPages}
          >
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
          {loading
            ? ""
            : data.data
                .sort((a, b) =>
                  a.firstName.charAt(0).toLowerCase() >
                  b.firstName.charAt(0).toLowerCase()
                    ? 1
                    : -1
                )
                .map((data, i) => {
                  return (
                    <li className="row" key={i}>
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
                            setPage("edit");
                            setId(data.id);
                            editRequest(data.id);
                            navigate(`/edit/${data.id}`);
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
                })}
        </ul>
      </div>
    </div>
  );
}

export default Data;
