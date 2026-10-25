import { createBrowserRouter, Outlet, useLocation } from "react-router";
import { Home } from "../pages/Home";
import { Work } from "../pages/Work";
import { CaseStudy } from "../pages/CaseStudy";
import { EHRCaseStudy } from "../pages/EHRCaseStudy";
import { USPCaseStudy } from "../pages/USPCaseStudy";
import { FoodBeverageCaseStudy } from "../pages/FoodBeverageCaseStudy";
import { AscensiaCaseStudy } from "../pages/AscensiaCaseStudy";
import { About } from "../pages/About";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { useEffect } from "react";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function RootLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-stone-950 focus:px-4 focus:py-3 focus:font-mono focus:text-xs focus:uppercase focus:tracking-widest focus:text-white"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main" tabIndex={-1} className="flex-1 flex flex-col outline-none">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "work", Component: Work },
      { path: "about", Component: About },
      { path: "case-study/ehr-healthcare-system", Component: EHRCaseStudy },
      { path: "case-study/unified-service-operations", Component: USPCaseStudy },
      { path: "case-study/food-beverage-app", Component: FoodBeverageCaseStudy },
      { path: "case-study/ascensia-diabetes-care", Component: AscensiaCaseStudy },
      { path: "case-study/:id", Component: CaseStudy }
    ],
  },
]);
