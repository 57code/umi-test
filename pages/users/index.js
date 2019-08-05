import styles from "./index.css";
import Link from "umi/link";
import router from "umi/router";

export default function({ history }) {
  console.log(router);
  
  return (
    <div className={styles.normal}>
      <h1>Page index</h1>
      <ul>
        <li>
          <Link to="/users/1">tom</Link>
        </li>
        <li onClick={() => router.push("/users/2")}>jerry</li>
      </ul>
    </div>
  );
}
