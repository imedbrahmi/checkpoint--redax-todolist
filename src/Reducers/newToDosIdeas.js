const initialState ={
    newToDos: [
        {
        task: "Cook Dinner",
        id: Math.random()
        },
        {
        task: " Travel To Paris ",
        id: Math.random()
        },
    ]
}
export default function newToDosIdeas (state= {initialState}, action) {
    //eslint-disable-next-line
    const {type, payload} = action;
    switch (type) {
        default:
        return state   ;
    }
}