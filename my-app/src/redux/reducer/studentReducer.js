const initialData = {
    studentName: 'fname lname'
}

const studentReducer = (state = initialData, action) => {  //action is a function
    switch (action.type) {  //there is type here because there is type in studentForm.js in dispatch function
        case "CHANGE_NAME":
            return {
                ...state,
                studentName: action.payload
            }
        default:
            return state
    }
}
export default studentReducer