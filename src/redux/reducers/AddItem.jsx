<<<<<<< HEAD
const addItem = [];

const addItems = (state = addItem, action) => {
    switch (action.type) {
        case "ADDITEM" : return [
            ...state,
            action.payload
        ]
        break;

        case "DELITEM" :
            return state = state.filter((x)=>{
                return x.id !== action.payload.id
            })
        break;

        default: return state;
        break;

        
    }
}

=======
const addItem = [];

const addItems = (state = addItem, action) => {
    switch (action.type) {
        case "ADDITEM" : return [
            ...state,
            action.payload
        ]
        break;

        case "DELITEM" :
            return state = state.filter((x)=>{
                return x.id !== action.payload.id
            })
        break;

        default: return state;
        break;

        
    }
}

>>>>>>> 83e7c63cb11d05943b2550cd53335d00853428e5
export default addItems;