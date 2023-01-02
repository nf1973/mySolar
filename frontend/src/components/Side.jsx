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
          <Link to={`/`}>
            <li>Dashboard</li>
          </Link>
          <Link to={`/data`}>
            <li>Data</li>
          </Link>
        </ul>
      </div>
    </aside>
  );
}
export default Side;
