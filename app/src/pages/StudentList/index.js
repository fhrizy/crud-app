import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getListStudents,
  deleteStudent,
  detailStudent,
} from "../../useRedux/actions/StudentActions";
import Data from "./Data";

function StudentList() {
  const { getListStudentsData, getDeleteStudent } = useSelector(
    (state) => state.StudentsReducers,
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    let mounted = true;

    //Call the fetchData function here
    if (mounted) {
      dispatch(getListStudents());
    }

    return () => {
      mounted = false;
    };
  }, [dispatch, getDeleteStudent]);

  const deleteData = (id) => {
    dispatch(deleteStudent(id));
  };

  const editRequest = (data) => {
    dispatch(detailStudent(data));
    navigate(`/edit/${data.id}`);
  };

  return (
    <>
      <Data
        getListStudentsData={getListStudentsData}
        deleteData={deleteData}
        editRequest={editRequest}
      />
    </>
  );
}

export default StudentList;
