import { baseURL } from "@/api/baseUrl";
import "./userforms.css";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Navigate, useParams } from "react-router-dom";
import { FaTriangleExclamation } from "react-icons/fa6";
export default function UserForms() {
  const { campaign_id } = useParams();
  console.log(campaign_id);

  useEffect(() => {
    if (!campaign_id) <Navigate to="/auth" />;
  }, []);

  const [formData, setFormData] = useState<any | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getFormData = async () => {
      await axios
        .get(`${baseURL}/campaign/form-design/${campaign_id}/`)
        .then((res) => {
          setError(false);
          setFormData(JSON.parse(res.data.design));
        })
        .catch((err) => {
          setError(true);
          console.log(err);
        });
    };

    getFormData();
  }, []);

  const texts = formData?.texts;
  const styles = formData?.styles;

  const fields = formData?.fields;

  const redirectPage = formData?.redirect?.url;

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (fullName.length < 1 || email.length < 1 || phone.length < 1) {
      return toast.error("Please fill the required fields");
    }

    const userData = {
      full_name: fullName,
      email,
      phone_number: phone,
    };

    const toastId = toast.loading("Collecting your contact data");
    await axios({
      method: "post",
      url: `${baseURL}/lead/create/${campaign_id}/`,
      data: userData,
    })
      .then((res) => {
        console.log(res.data);
        toast.success("You will be contacted within five minutes", {
          id: toastId,
        });
        if (redirectPage && redirectPage.length > 0)
          window.location = redirectPage;
      })
      .catch((err) => {
        toast.error("Something went wrong. Please retry", {
          id: toastId,
        });
        console.log(err);
      });
  };
  return (
    <>
      <div
        className="forms"
        style={{ backgroundColor: styles?.bgClr || "inherit" }}
      >
        <div className="form-close-msg">
          <p>*Click outside to close form</p>
        </div>
        <form onSubmit={submitForm} id="form">
          <h2 className="h-100" style={{ color: styles?.textClr || "inherit" }}>
            {texts?.title}
          </h2>
          <p style={{ color: styles?.textClr || "inherit" }}>
            {texts?.subtitle}
          </p>

          <div className="form__body">
            {fields?.includes("fullName") && (
              <label htmlFor="fullName">
                <p style={{ color: styles?.textClr || "inherit" }}>Full Name</p>
                <input
                  style={{ backgroundColor: styles?.inputBG || "inherit" }}
                  type="text"
                  name="fullName"
                  id="fullName"
                  placeholder="e.g. John Doe"
                  required
                  onChange={(e) => setFullName(e.target.value)}
                />
              </label>
            )}

            {fields?.includes("email") && (
              <label htmlFor="email">
                <p style={{ color: styles?.textClr || "inherit" }}>
                  Email Address
                </p>
                <input
                  style={{ backgroundColor: styles?.inputBG || "inherit" }}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="e.g. johndoe@mail.com"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
            )}
            {fields?.includes("phone") && (
              <label htmlFor="phone">
                <p style={{ color: styles?.textClr || "inherit" }}>
                  Phone Number
                </p>
                <input
                  style={{ backgroundColor: styles?.inputBG || "inherit" }}
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="e.g. 08111223344"
                  required
                  onChange={(e) => setPhone(e.target.value)}
                />
              </label>
            )}
            {fields?.includes("location") && (
              <label htmlFor="location">
                <p style={{ color: styles?.textClr || "inherit" }}>Location</p>
                <input
                  style={{ backgroundColor: styles?.inputBG || "inherit" }}
                  type="text"
                  name="location"
                  id="location"
                  placeholder="e.g. Lagos, Nigeria"
                  required
                />
              </label>
            )}
            <button
              id="submitBtn"
              type="submit"
              style={{
                backgroundColor: styles?.btnBG || "var(--pry-clr)",
                color: styles?.btnTextClr || "white",
              }}
            >
              {texts?.btnText || "Contact Me"}
            </button>
          </div>
        </form>
        {error && (
          <div className="w-screen h-screen fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center">
            <div className="bg-white p-4 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <FaTriangleExclamation className="text-lg text-yellow-400" />
                <h1 className="text-lg font-semibold text-header">Error</h1>
              </div>
              <p className="text-sm">
                Unable to fetch campaign form. Try reloading this page{" "}
              </p>
              <p className="text-sm">
                Contact this website's administrator if this issue persists
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
