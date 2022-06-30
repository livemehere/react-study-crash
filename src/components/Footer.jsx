import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <ul>
      <li>
        <Link to={"/"}>HOME</Link>
      </li>
      <li>
        <Link to={"/about"}>ABOUT</Link>
      </li>
    </ul>
  );
}
