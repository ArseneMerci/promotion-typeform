import DahboardCards from "../../components/admin/DashboardCards";
import DashNavBar from "../../components/admin/DashNavBar";
import SideBar from "../../components/admin/DashBoardSideBar";
import styles from "../../styles/dashboard.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function Dashboard() {
  const router = useRouter();

  const [data, setData] = useState([""]);

  useEffect(() => {
    (async () => {
      if (!localStorage.getItem("token")) router.push("/admin/login");
        const config = {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        };
        await axios
          .get(
            "https://promotion-typeform-api.onrender.com/api/order/sum",
            config
          )
          .then((res) => {
            if(res.data.data.length == 0){
              return setData([{completed:"0",inComplete:"0"}])
            }
            setData(res.data.data);
          })
          .catch((err) => console.log("error"));
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.dashboard}>
      <div className={styles.dashboardContainer}>
        <SideBar />
        <div className={styles.main}>
          <DashNavBar title={"Dashboard"} />
          <DahboardCards Cards={data} />
        </div>
      </div>
    </div>
  );
}
