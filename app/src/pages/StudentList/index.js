import React, { useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getListStudents,
  deleteStudent,
  detailStudent,
} from "../../useRedux/actions/StudentActions";
import Data from "./Data";

function StudentList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(0);
  const { getListStudentsData, getDeleteStudent } = useSelector(
    (state) => state.StudentsReducers,
  );

  // setData after pagination for layouting with map
  const currentData = useMemo(() => {
    const pageSize = 7;
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    if (getListStudentsData.data) {
      //LastPage
      if (getListStudentsData.data.length >= pageSize) {
        setLastPage(Math.ceil(getListStudentsData.data.length / pageSize));
      } else {
        setLastPage(1);
      }

      //Slicing data from all personnel to 4 results
      return getListStudentsData.data
        .sort((a, b) =>
          a.firstName.charAt(0).toLowerCase() >
          b.firstName.charAt(0).toLowerCase()
            ? 1
            : -1,
        )
        .slice(firstPageIndex, lastPageIndex);
    } else {
      return null;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, getListStudentsData.data]);

  //function for next page
  const onNext = () => {
    setCurrentPage(currentPage + 1);
  };

  //function for previous page
  const onPrevious = () => {
    setCurrentPage(currentPage - 1);
  };

  useEffect(() => {
    let mounted = true;

    //Call the fetchData function here
    if (mounted) {
      dispatch(getListStudents());
    }

    return () => {
      mounted = false;
    };
  }, [dispatch, getDeleteStudent, currentPage]);

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
        currentData={currentData}
        deleteData={deleteData}
        editRequest={editRequest}
        onNext={onNext}
        onPrevious={onPrevious}
        currentPage={currentPage}
        lastPage={lastPage}
      />
    </>
  );
}

export default StudentList;
