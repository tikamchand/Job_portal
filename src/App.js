import Category from "./component/company/Category.js";
import Companies from "./component/company/Companies.js";
import Featured from "./component/company/Featured.js";
import HomePage from "./component/mainpage/HomePage.js";
import Information from "./component/info/Information.js";
import InformationT from "./component/info/InformationT.js";
import Navbar from "./component/mainpage/Navbar.js";
import PageF from "./component/footer/PageF.js";
import SearchPage from "./component/jobsearch/SearchPage.js";
function App() {
  return (
    <>
      <Navbar />
      {/* <HomePage />
      <Companies />
      <Category />
      <Information />
      <Featured />
      <InformationT /> */}
      <SearchPage />
      <PageF />
    </>
  );
}

export default App;
