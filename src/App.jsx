import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Pages
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Therapy from "./pages/Therapy";
import Meditation from "./pages/Meditation";
import ContactUs from "./pages/ContactUs";
import FamilyTherapy from "./pages/FamilyTherapy"
import ApproachForm from "./components/ApproachForm";
import Payment from "./pages/Payment";
import FreeTrial from "./pages/FreeTrial"; 

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <div className="bg-[#feeeee] min-h-screen">
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/happiness-week" element={<div>Happiness Week</div>} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/therapy" element={<Therapy />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/course" element={<div>Course</div>} />
          <Route path="/meditation" element={<Meditation />} />
          <Route path="/family-therapy" element={<FamilyTherapy />} />
          <Route path="/approach-form" element={<ApproachForm />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/free-trial" element={<FreeTrial />} />
          <Route path="/faq" element={<div>FAQ</div>} />
          <Route path="/terms" element={<div>Terms & Conditions</div>} />
          <Route path="/help" element={<div>Help Center</div>} />
          <Route path="/partnership" element={<div>Partnership</div>} />
        </Routes>
      </main>
      </div>
      <Footer />
    </>
  );
}

export default App;
