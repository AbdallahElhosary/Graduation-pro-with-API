import React from "react";
import Categories from "./components/Categories";
import AuthPage from "./components/AuthPage";
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./components/Home";
import PaymentPage from "./pages/Payment";
import AddCourseForm from "./pages/Addcourse.jsx";
import MilitaryEducationPage from "./pages/Militery.jsx";
import CourseManagementPage from "./pages/Coursemanagement.jsx";
import AdminManagementPage from "./pages/Adminmanagement.jsx";
import EnterCodePage from "./pages/EnterCode.jsx";
import ForgotPasswordPage from "./pages/ForgetPassword.jsx";
import RequirementsPage from "./pages/ReqirementsPage.jsx";
import EnrollSubjects from "./pages/EnrollSubjects.jsx";
import ResetPasswordPage from "./pages/ResetPassword.jsx";
import MatrialPage from "./pages/Matrial.jsx";
import SettingsPage from "./pages/Settings.jsx";
import StudentActivitiesPage from "./pages/StudentActivity.jsx";
import AddCourseMaterial from "./pages/AddMatrial.jsx";
import LoadingPage from "./pages/Loading.jsx";
import StudentProfile from "./pages/StudentProfile.jsx";

export default function App() {
  return (
    <div className="App font-sans">

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/addcourse" element={<AddCourseForm />} />
        <Route path="/military" element={<MilitaryEducationPage />} />
        <Route path="/courseManagement" element={<CourseManagementPage />} />
        <Route path="/adminManagement" element={<AdminManagementPage />} />
        <Route path="/enterCode" element={<EnterCodePage />} />
        <Route path="/requirements" element={<RequirementsPage />} />
        <Route path="/enrollSubjects" element={<EnrollSubjects />} />
        <Route path="/matrial" element={<MatrialPage />} />
        <Route path="/matrial/add" element={<AddCourseMaterial />} />
        <Route path="/loading" element={<LoadingPage />} />
        <Route path="/studentProfile" element={<StudentProfile />} />



        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/studentActivity" element={<StudentActivitiesPage />} />





        <Route path="/auth/forgetPassword" element={<ForgotPasswordPage />} />
        <Route path="/auth/resetPassword" element={<ResetPasswordPage />} />



      </Routes>
    </div>
  );
}