import ListSolarLogs from "../pages/ListSolarLogs";

function Dashboard({ yearMonth }) {
  return (
    <div className="dashboard">
      <div className="greenbar">
        <h1>Dashboard</h1>
      </div>
      <div className="content">
        <div className="row row1">
          <div className="card card1">
            <ListSolarLogs yearMonth={yearMonth} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
