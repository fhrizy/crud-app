import {
  ADD_STUDENT,
  GET_LIST_STUDENTS,
  DELETE_STUDENT,
  DETAIL_STUDENT,
  UPDATE_STUDENT,
} from "../../actions/StudentActions";

const initialState = {
  getListStudentsData: false,
  getAddStudent: false,
  getDeleteStudent: false,
  getDetailStudent: false,
  getUpdateStudent: false,
  getErrorMessage: false,
};

const students = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_STUDENTS:
      return {
        ...state,
        getListStudentsData: action.payload.data,
        getErrorMessage: action.payload.errorMessage,
      };
    case ADD_STUDENT:
      return {
        ...state,
        getAddStudent: action.payload.data,
        getErrorMessage: action.payload.errorMessage,
      };
    case DELETE_STUDENT:
      return {
        ...state,
        getDeleteStudent: action.payload.data,
        getErrorMessage: action.payload.errorMessage,
      };
    case DETAIL_STUDENT:
      return {
        ...state,
        getDetailStudent: action.payload.data,
      };
    case UPDATE_STUDENT:
      return {
        ...state,
        getUpdateStudent: action.payload.data,
        getErrorMessage: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default students;
