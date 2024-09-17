import "./about.css";
import globeImg from "../../assets/aboutimg.png";
import teamImg from "../../assets/faqimg.png";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

export default function About() {
  const submitMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div className="about-pg">
      <Header />
      <div className="about">
        <h1>We&apos;re a dedicated teams of achievers</h1>
        <p>
          We’re a team of experts who pride ourselves with crafting intuitive
          and seamless products that meet the unique needs of users. we
          prioritize accessible user centered products, and quality assurance.
        </p>
        <div className="globe-img">
          <img src={globeImg} alt="Globe" />
        </div>

        <div className="about-points">
          <div className="point">
            <h2>Support</h2>
            <p>We&apos;re here to help 24/7</p>
            <Link to="#">support@autoleads.com</Link>
          </div>
          <div className="point">
            <h2>Sales</h2>
            <p>Questions or queries? Get in touch!</p>
            <Link to="#">sales@autoleads.com</Link>
          </div>
          <div className="point">
            <h2>Phone</h2>
            <p>Mon-Fri from 9am to 5pm</p>
            <Link to="#">+(234) 9876-54-3210</Link>
          </div>
        </div>
        <div className="about-pcm"></div>
      </div>

      <div className="teams">
        <h1>Meet The Team</h1>

        <div className="members">
          <div className="member">
            <div className="member-img">
              <img src={teamImg} alt="Team Member" />
            </div>
            <div className="member-info">
              <h3>John DOe</h3>
              <p>Co-founder</p>
            </div>
          </div>

          <div className="member">
            <div className="member-img">
              <img src={teamImg} alt="Team Member" />
            </div>
            <div className="member-info">
              <h3>John DOe</h3>
              <p>Co-founder</p>
            </div>
          </div>

          <div className="member">
            <div className="member-img">
              <img src={teamImg} alt="Team Member" />
            </div>
            <div className="member-info">
              <h3>John DOe</h3>
              <p>Co-founder</p>
            </div>
          </div>

          <div className="member">
            <div className="member-img">
              <img src={teamImg} alt="Team Member" />
            </div>
            <div className="member-info">
              <h3>John DOe</h3>
              <p>Co-founder</p>
            </div>
          </div>

          <div className="member">
            <div className="member-img">
              <img src={teamImg} alt="Team Member" />
            </div>
            <div className="member-info">
              <h3>John DOe</h3>
              <p>Co-founder</p>
            </div>
          </div>

          <div className="member">
            <div className="member-img">
              <img src={teamImg} alt="Team Member" />
            </div>
            <div className="member-info">
              <h3>John DOe</h3>
              <p>Co-founder</p>
            </div>
          </div>
        </div>
      </div>
      <div className="contact">
        <h1>Get in touch</h1>
        <p>We&apos;d love to hear from you, kindly fill out this form.</p>

        <form onSubmit={submitMessage}>
          <span>
            <label htmlFor="firstName">
              <p>First Name</p>
              <Input name="firstName" type="text" id="firstName" />
            </label>
            <label htmlFor="lastName">
              <p>Last Name</p>
              <Input name="lastName" type="text" id="lastName" />
            </label>
            <label htmlFor="email">
              <p>Email Address</p>
              <Input name="email" type="text" id="email" />
            </label>
            <label htmlFor="phone">
              <p>Phone Number</p>
              <Input name="phone" type="text" id="phone" inputMode="numeric" />
            </label>
          </span>
          <label htmlFor="textArea">
            <p>Message</p>
            <textarea id="textArea" />
          </label>
          <label htmlFor="privacy-agreement" className="privacy-agreement">
            <input type="checkbox" id="privacy-agreement" />
            <p>
              You agree to our friendly{" "}
              <strong className="underline">privacy policy.</strong>
            </p>
          </label>
          <Button type="submit" className="pry-btn">
            Send Message
          </Button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
