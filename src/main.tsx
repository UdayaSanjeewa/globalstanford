import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import MasterDegrees from "./pages/MasterDegrees.tsx";
import MasterDegreeMain from "./components/MasterDegrees/MasterDegreeMain.tsx";
import MbaManagement from "./components/MasterDegrees/MbaManagement.tsx";

import BachelorsDegrees from "./pages/BachelorsDegree.tsx";
import BachelorsOfScienceInNursing from "./pages/BachelorOfScienceInNursing.tsx";
import BachelorsOfEducation from "./pages/BachelorOfEducation.tsx";
import BBAManagement from "./pages/BBAManagement.tsx";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Alumni from "./pages/Alumini.tsx";
import MbaBanking from "./components/MasterDegrees/MbaBanking.tsx";
import MasterEducation from "./components/MasterDegrees/MasterEducation.tsx";
import AboutUs from "./pages/AboutUs.tsx";
import Payments from "./components/Payments/Payments.tsx";
import LmsLogin from "./components/LMS/LmsLoginMain.tsx";
import PhdDBAPage from "./pages/PhdDBAPage.tsx";
import DoctorOfPhilosophy from "./pages/DOPPage.tsx";
import CourcesPage from "./pages/CourcesPage.tsx";
import ApplyNowPage from "./pages/ApplyNowPages.tsx";
import Convocation24 from "./pages/Convocation24.tsx";
import Convocation25 from "./pages/Convocation25.tsx";
import DegreesPage from "./pages/DegreesPage.tsx";
import DiplomasPage from "./pages/DiplomasPage.tsx";
import ADIS from "./pages/ADIS.tsx";
import ADLSM from "./pages/ADLSM.tsx";
import ADMF from "./pages/ADMF.tsx";
import ADTH from "./pages/ADTH.tsx";
import ADAF from "./pages/ADAF.tsx";
import ADBM from "./pages/ADBM.tsx";
import ADEcon from "./pages/ADEcon.tsx";
import ADEnglish from "./pages/ADEnglish.tsx";
import ADHRM from "./pages/ADHRM.tsx";
import ADICT from "./pages/ADICT.tsx";
import ADAI from "./pages/ADAI.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/master-degrees",
    element: <MasterDegrees />,
    children: [
      {
        path: "/master-degrees",
        element: <MasterDegreeMain />,
      },
      {
        path: "/master-degrees/mba-management",
        element: <MbaManagement />,
      },
      {
        path: "/master-degrees/mba-bankingAndFinance",
        element: <MbaBanking />,
      },
      {
        path: "/master-degrees/master-education",
        element: <MasterEducation />,
      },
    ],
  },
  {
    path: "/bachelors-degree",
    element: <BachelorsDegrees />,
  },
  {
    path: "/bachelors-degree/bachelor-of-science-in-nursing",
    element: <BachelorsOfScienceInNursing />,
  },
  {
    path: "/bachelors-degree/bachelor-of-education",
    element: <BachelorsOfEducation />,
  },
  {
    path: "/bachelors-degree/bba-management",
    element: <BBAManagement />,
  },
  {
    path: "/alumni",
    element: <Alumni />,
  },
  {
    path: "/about-us",
    element: <AboutUs />,
  },
    {
    path: "/convocation24",
    element: <Convocation24 />,
  },
      {
    path: "/convocation25",
    element: <Convocation25 />,
  },
  {
    path: "/payments",
    element: <Payments />,
  },
  {
    path: "/lms-login",
    element: <LmsLogin />,
  },
  {
    path: "/phd-dba",
    element: <PhdDBAPage />,
  },
  {
    path: "/dop",
    element: <DoctorOfPhilosophy />,
  },
  {
    path: "/cources",
    element: <CourcesPage />,
  },
    {
    path: "/degrees",
    element: <DegreesPage />,
  },
    {
    path: "/diplomas",
    element: <DiplomasPage />,
  },
      {
    path: "/adis",
    element: <ADIS />,
  },
        {
    path: "/adlsm",
    element: <ADLSM />,
  },
          {
    path: "/admf",
    element: <ADMF />,
  },
            {
    path: "/adth",
    element: <ADTH />,
  },
              {
    path: "/adaf",
    element: <ADAF />,
  },
                {
    path: "/adbm",
    element: <ADBM />,
  },
                  {
    path: "/adecon",
    element: <ADEcon />,
  },
                    {
    path: "/adenglish",
    element: <ADEnglish />,
  },
                      {
    path: "/adhrm",
    element: <ADHRM />,
  },
                        {
    path: "/adict",
    element: <ADICT />,
  },
                          {
    path: "/adai",
    element: <ADAI />,
  },
  {
    path: "/apply-now",
    element: <ApplyNowPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
