import Pages from "../pages/Pages";
import TopBar from "./TopBar";

function Main({ yearMonth }) {
  return (
    <main className="right">
      <TopBar />
      <div className="dashboard">
        <div className="greenbar">
          <h1>Dashboard</h1>
        </div>
        <Pages yearMonth={yearMonth} />
      </div>
    </main>
  );
}
export default Main;
