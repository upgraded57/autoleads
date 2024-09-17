import "./notfound.css";
import errorImg from "../../assets/errorimg.png";
import { useNavigate } from "react-router-dom";
import Header from "@/components/header/Header";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="notfound-pg">
      <Header />
      <div className="notfound">
        <div className="notfound-left">
          <h1>Whoops...this page isn&apos;t available</h1>
          <div className="notfound-left-btn">
            <Button className="pry-btn" onClick={() => navigate(-1)}>
              Go back
            </Button>
            <Button
              className="bg-accent-clr hover:bg-accent-clr"
              onClick={() => window.location.reload()}
            >
              Refresh
            </Button>
          </div>
        </div>
        <div className="notfound-right">
          <img src={errorImg} alt="Not Found" />
        </div>
      </div>
    </div>
  );
}
