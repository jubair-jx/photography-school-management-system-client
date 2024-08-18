import { createBrowserRouter } from "react-router-dom";
import AdminRoute from "../AdminRoute/AdminRoute";
import Home from "../Home/Home";
import InstructorRoute from "../InstructorRoute/InstructorRoute";
import Dashboard from "../Layout/Dashboard";
import MainLayout from "../Layout/MainLayout";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import StudentRoute from "../StudentRoute/StudentRoute";
import Classes from "../components/Pages/Classes/Classes";
import AdminHome from "../components/Pages/Dashboard/AdminDashboard/AdminHome/AdminHome";
import Feedback from "../components/Pages/Dashboard/AdminDashboard/Feedback/Feedback";
import ManageClasses from "../components/Pages/Dashboard/AdminDashboard/ManageClasses/ManageClasses";
import ManageUser from "../components/Pages/Dashboard/AdminDashboard/ManageUser/ManageUser";
import AddClass from "../components/Pages/Dashboard/InstructorDashboard/AddClass/AddClass";
import InstructorHome from "../components/Pages/Dashboard/InstructorDashboard/InstructorHome/InstructorHome";
import MyClasses from "../components/Pages/Dashboard/InstructorDashboard/MyClasses/MyClasses";
import TotalEnrolled from "../components/Pages/Dashboard/InstructorDashboard/TotalEnrolled/TotalEnrolled";
import MyEnrolledClass from "../components/Pages/Dashboard/StudentDashboard/MyEnrolledClass/MyEnrolledClass";
import MySelectedClass from "../components/Pages/Dashboard/StudentDashboard/MySelectedClass/MySelectedClass";
import Payment from "../components/Pages/Dashboard/StudentDashboard/Payment/Payment";
import PaymentHistory from "../components/Pages/Dashboard/StudentDashboard/PaymentHistory/PaymentHistory";
import StudentHome from "../components/Pages/Dashboard/StudentDashboard/StudentHome/StudentHome";
import ErrorPage from "../components/Pages/ErrorPage/ErrorPage";
import Instructors from "../components/Pages/Instructors/Instructors";
import Login from "../components/Pages/Login/Login";
import Register from "../components/Pages/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "classes",
        element: <Classes></Classes>,
      },
      {
        path: "instructors",
        element: <Instructors></Instructors>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoutes>
        <Dashboard></Dashboard>
      </PrivateRoutes>
    ),
    children: [
      {
        path: "addAclass",
        element: (
          <InstructorRoute>
            <AddClass></AddClass>
          </InstructorRoute>
        ),
      },
      {
        path: "totalEnrolled",
        element: (
          <InstructorRoute>
            <TotalEnrolled></TotalEnrolled>
          </InstructorRoute>
        ),
      },
      {
        path: "myClasses",
        element: (
          <InstructorRoute>
            <MyClasses></MyClasses>
          </InstructorRoute>
        ),
      },
      {
        path: "instructor",
        element: (
          <InstructorRoute>
            <InstructorHome />
          </InstructorRoute>
        ),
      },
      {
        path: "managerUser",
        element: (
          <AdminRoute>
            <ManageUser></ManageUser>
          </AdminRoute>
        ),
      },
      {
        path: "manageClasses",
        element: (
          <AdminRoute>
            <ManageClasses></ManageClasses>
          </AdminRoute>
        ),
      },
      {
        path: "admin",
        element: (
          <AdminRoute>
            <AdminHome></AdminHome>
          </AdminRoute>
        ),
      },
      {
        path: "selectedClass",
        element: (
          <StudentRoute>
            <MySelectedClass></MySelectedClass>,
          </StudentRoute>
        ),
      },
      {
        path: "enrolledClass",
        element: (
          <StudentRoute>
            <MyEnrolledClass></MyEnrolledClass>
          </StudentRoute>
        ),
      },
      {
        path: "paymentHistory",
        element: (
          <StudentRoute>
            <PaymentHistory></PaymentHistory>
          </StudentRoute>
        ),
      },
      {
        path: "payment",
        element: (
          <StudentRoute>
            <Payment></Payment>
          </StudentRoute>
        ),
      },
      {
        path: "student",
        element: (
          <StudentRoute>
            <StudentHome />
          </StudentRoute>
        ),
      },
      {
        path: "feedback/:id",
        element: (
          <AdminRoute>
            <Feedback></Feedback>
          </AdminRoute>
        ),
      },
    ],
  },
]);
export default router;
