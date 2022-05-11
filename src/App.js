import Category from "./component/Category";
import Companies from "./component/Companies";
import Featured from "./component/Featured";
import HomePage from "./component/HomePage";
import Information from "./component/Information";
import InformationT from "./component/InformationT";
import Navbar from "./component/Navbar";
import PageF from "./component/PageF";
function App() {
  return (
    <>
      <Navbar />
      <HomePage />
      <Companies />
      <Category />
      <Information />
      <Featured/>
      <InformationT/>
      <PageF/>
    </>
  );
}

export default App;
