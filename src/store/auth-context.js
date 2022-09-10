import { createContext, useState } from 'react'

const AuthContext = createContext({
    itemList: [],
    setItemList: () => {},
    itemCount:0,
    setItemCount: () => {}
})
// write the entire login logic in one component
// we call it AuthContextProvider

export const AuthContextProvider = (props) => {
    const [itemList, setItemList] = useState([
        {
            id: 'apple',
            name: 'Apple',
            quantity: 0,
            price: 50
        },
        {
            id: 'chocolate',
            name: 'Chocolate',
            quantity: 0,
            price: 60
        },
        {
            id: 'grapes',
            name: 'Grapes',
            quantity: 0,
            price: 75
        }
    ]);
    const [itemCount, setItemCount] = useState(0);

    // dis function inside of useEffect hook is executed by react after rendering the entire component
    // it will only be executed if the second argument (the list) has changed or on a refresh
    // once we login, and hit refresh
    // the entire code is re run and react runs the useEffect hook (since it's a refresh)
    // we check for the storedLoginStatus and find that it's true
    // dis leads to the setting the isLoggedIn state to true
    // and hence react re-renders the code but dis time useEffect hook is not run since the second aregument
    // that is the list doesn't have any changes 
    return (
        <AuthContext.Provider
            value={{
                // isLoggedIn: isLoggedIn,
                // onLogout: logoutHandler,
                // onLogin: loginHandler,
                itemList: itemList,
                setItemList: setItemList,
                itemCount: itemCount,
                setItemCount: setItemCount
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
}
export default AuthContext;