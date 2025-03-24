import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./Login/LoginPage";
import SignupPage from "./Signup/SignupPage";
import AboutPage from "./About/SAMPLE_ABOUT.jsx";
import SAMPLE_REG_MAIN from "./Sample main/SAMPLE_REG_MAIN";
import RegulationFilterPage from "./sample reg filter/RegulationFilterPage";
import RegulationReport from "./Regulations/RegulationReport";
import SampleRiskMapMain from "./MainRiskMap/SampleRiskMapMain";
import DownloadStatus from "./ReportDownload/DownloadStatus";
import DownloadDesign from "./ReportDownload/DownloadDesign";
import ANNOTATIONS_PAGE from "./Annotation/ANNOTATIONS_PAGE";

function App() {
  return (
    <Router>
      <Routes>
        {/* Default Route - Redirect to Login */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Login Page */}
        <Route path="/login" element={<LoginPage />} />

        {/* Signup Page */}
        <Route path="/signup" element={<SignupPage />} />

        {/* Main Home Page */}
        <Route path="/about" element={<AboutPage />} />

        {/* Regulation Main Page */}
        <Route path="/regulations" element={<SAMPLE_REG_MAIN />} />

        {/* Regulation Filtering Page */}
        <Route path="/regulation-filter" element={<RegulationFilterPage />} />

        {/* Regulation Report Page */}
        <Route path="/regulation-report" element={<RegulationReport />} />

        {/* Download Report Page (Shows Download Status & Redirects Back) */}
        <Route path="/download-report" element={<DownloadStatus />} />

        {/* Input Design Page */}
        <Route path="/download-design" element={<DownloadDesign />} />

        {/* Risk Map Page */}
        <Route path="/risk-maps" element={<SampleRiskMapMain />} />

        {/* Plan Annotations Page */}
        <Route path="/plan-annotations" element={<ANNOTATIONS_PAGE />} />

        {/* New Routes from Second Code Snippet */}
        <Route path="/zonal/:zonalName" element={<div>Zonal Details Page (Under Development)</div>} />
        <Route path="/search-results" element={<div>Search Results Page (Under Development)</div>} />
      </Routes>
    </Router>
  );
}

export default App;