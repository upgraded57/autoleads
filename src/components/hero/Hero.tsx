import "./hero.css";

import heroImg from "../../assets/heroImg.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const signup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/auth?type=signUp&email=" + email);
  };
  return (
    <div className="hero">
      <div className="title">
        <h1>ALL YOUR FOLLOW UP NEEDS IN ONE PLACE</h1>
        <p>
          Introducing the future of customer follow up. Bid farewell to
          protracted wait times and Unreliable lead management, and welcome to
          smooth, customized experiences for your clients.
        </p>
        <form className="search" onSubmit={signup}>
          <Input
            type="email"
            placeholder="Your email address ..."
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button type="submit" className="pry-btn">
            Sign Up
          </Button>
        </form>
        <div className="hero-snapshot">
          <img src={heroImg} alt="Autoleads Snapshot" />
        </div>
      </div>
    </div>
  );
}
