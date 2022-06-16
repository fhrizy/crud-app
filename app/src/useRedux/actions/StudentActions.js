import axios from "axios";

export const GET_LIST_STUDENTS = "GET_LIST_STUDENTS";
export const ADD_STUDENT = "ADD_STUDENT";
export const DELETE_STUDENT = "DELETE_STUDENT";
export const DETAIL_STUDENT = "DETAIL_STUDENT";
export const UPDATE_STUDENT = "UPDATE_STUDENT";

export const getListStudents = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:8080/api/findall")
      .then((res) => {
        dispatch({
          type: GET_LIST_STUDENTS,
          payload: {
            data: res.data,
          },
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_LIST_STUDENTS,
          payload: {
            errorMessage: err.message,
          },
        });
      });
  };
};

export const addStudent = (data) => {
  return (dispatch) => {
    axios
      .post("http://localhost:8080/api/create", data)
      .then((res) => {
        dispatch({
          type: ADD_STUDENT,
          payload: {
            data: res.data,
          },
        });
      })
      .catch((err) => {
        dispatch({
          type: ADD_STUDENT,
          payload: {
            errorMessage: err.message,
          },
        });
      });
  };
};

export const deleteStudent = (data) => {
  return (dispatch) => {
    axios
      .delete(`http://localhost:8080/api/delete/${data}`, data)
      .then((res) => {
        dispatch({
          type: DELETE_STUDENT,
          payload: {
            data: res.data,
          },
        });
      })
      .catch((err) => {
        dispatch({
          type: DELETE_STUDENT,
          payload: {
            errorMessage: err.message,
          },
        });
      });
  };
};

export const detailStudent = (data) => {
  return (dispatch) => {
    dispatch({
      type: DETAIL_STUDENT,
      payload: {
        data: data,
      },
    });
  };
};

export const updateStudent = (data) => {
  return (dispatch) => {
    axios
      .put(`http://localhost:8080/api/update/${data.id}`, data)
      .then((res) => {
        dispatch({
          type: ADD_STUDENT,
          payload: {
            data: res.data,
          },
        });
      })
      .catch((err) => {
        dispatch({
          type: ADD_STUDENT,
          payload: {
            errorMessage: err.message,
          },
        });
      });
  };
};
