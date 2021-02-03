/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
// import Unarchive from "@material-ui/icons/Unarchive";
import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import AddUser from "views/UserProfile/AddUser";
import EditUser from "views/UserProfile/editForm";
import DeleteUser from "views/UserProfile/deleteUser";
import TableList from "views/TableList/TableList.js";
import Typography from "views/Typography/Typography.js";
import Icons from "views/Icons/Icons.js";
import Maps from "views/Maps/Maps.js";
import NotificationsPage from "views/Notifications/Notifications.js";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.js";
// core components/views for RTL layout
// import RTLPage from "views/RTLPage/RTLPage.js";
import Menu from "./components/menu";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin",
    items: [],
    visible: true,
  },
  {
    path: "/user",
    name: "User Settings",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: UserProfile,
    layout: "/admin",
    items: [],
    visible: true,
  },
  {
    path: "/addUser",
    name: "Add User",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: AddUser,
    layout: "/admin",
    items: [],
    visible: false,
  },
  {
    path: "/editUser",
    name: "Edit User",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: EditUser,
    layout: "/admin",
    items: [],
    visible: false,
  },
  {
    path: "/deleteUser",
    name: "Delete User",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: DeleteUser,
    layout: "/admin",
    items: [],
    visible: false,
  },
  {
    path: "/table",
    name: "Table List",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: TableList,
    layout: "/admin",
    items: [],
    visible: true,
  },
  {
    path: "/typography",
    name: "Typography",
    rtlName: "طباعة",
    icon: LibraryBooks,
    component: Typography,
    layout: "/admin",
    items: [],
    visible: true,
  },
  {
    path: "/icons",
    name: "Icons",
    rtlName: "الرموز",
    icon: BubbleChart,
    component: Icons,
    layout: "/admin",
    items: [],
    visible: true,
  },
  {
    path: "/maps",
    name: "Maps",
    rtlName: "خرائط",
    icon: LocationOn,
    component: Maps,
    layout: "/admin",
    items: [],
    visible: true,
  },
  {
    path: "/notifications",
    name: "Notifications",
    rtlName: "إخطارات",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/admin",
    items: [],
    visible: true,
  },

  {
    path: "/menu",
    name: "MENU",
    icon: ExpandMoreIcon,
    icon2: ExpandLessIcon,
    rtlName: "پشتیبانی از راست به چپ",
    component: Menu,
    visible: true,
    layout: "/admin",
    items: [
      {
        path: "/menu",
        name: "Nested 1",
        rtlName: "پشتیبانی از راست به چپ",
        icon: Language,
        component: Menu,
        visible: true,
        layout: "/admin",
      },
      {
        path: "/menu",
        name: "Nested 2",
        rtlName: "پشتیبانی از راست به چپ",
        icon: Language,
        component: Menu,
        visible: true,
        layout: "/admin",
      },
    ],
  },
  {
    path: "/menu",
    name: "MENU 2",
    rtlName: "پشتیبانی از راست به چپ",
    icon: ExpandMoreIcon,
    icon2: ExpandLessIcon,
    component: Menu,
    visible: true,
    layout: "/admin",
    items: [
      {
        path: "/menu",
        name: "Nested Menu 1",
        rtlName: "پشتیبانی از راست به چپ",
        icon: Language,
        component: Menu,
        visible: true,
        layout: "/admin",
      },
      {
        path: "/menu",
        name: "Nested Menu 2",
        rtlName: "پشتیبانی از راست به چپ",
        icon: Language,
        component: Menu,
        visible: true,
        layout: "/admin",
      },
    ],
  },
  // {
  //   path: "/upgrade-to-pro",
  //   name: "Upgrade To PRO",
  //   rtlName: "التطور للاحترافية",
  //   icon: Unarchive,
  //   component: UpgradeToPro,
  //   layout: "/admin",
  // },
];

export default dashboardRoutes;
