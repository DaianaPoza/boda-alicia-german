import { useState } from "react";
import Cover from "./componentes/Cover";
import InvitationDetails from "./componentes/invitationPage/InvitationDetails";
import PanelDemo from "./componentes/panel/PanelDemo";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const params = new URLSearchParams(
    window.location.search
  );

  const showPanelDemo =
    params.get("panel") === "demo";

  if (showPanelDemo) {
    return <PanelDemo />;
  }

  const handleEnter = () => {
    setIsOpen(true);
    window.scrollTo(0, 0);
  };

  return (
    <>
      {isOpen ? (
        <InvitationDetails />
      ) : (
        <Cover onEnter={handleEnter} />
      )}
    </>
  );
}

export default App;