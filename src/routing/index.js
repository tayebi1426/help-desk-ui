import React from 'react'
import DefaultLayout from "../pages/layouts/DefaultLayout";

let LoginPage = React.lazy(() => import("../pages/Login"));
let AccountList = React.lazy(() => import("../pages/AccountList"));
let TransactionList = React.lazy(() => import("../pages/TransactionList"));


const MAIN_ROUTES = [
    {path: '/account', component: AccountList,authorities:['USER']},
    {path: '/transaction', component: TransactionList,authorities:['USER']},
];
const APP_ROUTES = [
    {path: '/login', component: LoginPage},
    {path: '/404', component: null},
    {
        path: '/', component: (props) => {
            return <DefaultLayout {...props} mainRoutes={MAIN_ROUTES}/>
        }
    }
];

export default APP_ROUTES;