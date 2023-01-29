import Logo from "../images/mysolar.png";
import SelectYearMonth from "./SelectYearMonth";
import { Link } from "react-router-dom";

function Side({ yearMonth, setYearMonth }) {
  return (
    <aside className="left">
      <img src={Logo} alt="logo" width="200" height="53" />
      <div className="navigation">
        <SelectYearMonth yearMonth={yearMonth} setYearMonth={setYearMonth} />
        <ul>
          <li className="navigation-subhead">Dashboard</li>
          <Link to={`/`}>
            <li className="navigation-page">Daily Charts</li>
          </Link>
          <Link to={`/monthly`}>
            <li className="navigation-page">Monthly Charts</li>
          </Link>
          <Link to={`/yearly`}>
            <li className="navigation-page">Yearly Charts</li>
          </Link>
          <li className="navigation-subhead">Data</li>
          <Link to={`/dailydata`}>
            <li className="navigation-page">Daily Values</li>
          </Link>
          <Link to={`/monthlydata`}>
            <li className="navigation-page">Monthly Values</li>
          </Link>
          <Link to={`/yearlydata`}>
            <li className="navigation-page">Yearly Values</li>
          </Link>
        </ul>
      </div>
    </aside>
  );
}
export default Side;
