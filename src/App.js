import { ContentInformation } from "./components/ContentInformation";
import './App.css';
import { LeadForm } from "./components/LeadForm";

function App() {
  return (
    <>
      <div className="Artboard">
        <ContentInformation />
        <LeadForm />
      </div>
    </>
  );
}

export default App;
