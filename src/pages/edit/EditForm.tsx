import Logo from "@/components/Logo";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FaRegSquareCheck } from "react-icons/fa6";
import { useNavigate, useParams } from "react-router-dom";
import { useEditDesign, useGetFormDesign } from "@/api/campaign";
import Loader from "@/components/ui/loader";
import { Loader2 } from "lucide-react";
import toast from "react-hot-toast";

export default function EditForm() {
  const { campaign_id } = useParams() as { campaign_id: string };
  const { isLoading, data } = useGetFormDesign(campaign_id);
  const navigate = useNavigate();

  const [inputFields, setInputFields] = useState({
    title: "",
    subtitle: "",
    btnText: "",
    redirectUrl: "",
  });

  const [checkFields, setCheckFields] = useState({
    fullName: true,
    email: true,
    phone: true,
    location: false,
  });

  const [colorFields, setColorFields] = useState({
    bgColor: "",
    inputBg: "",
    textClr: "",
    btnText: "",
    btnBg: "",
  });

  const inputs = {
    texts: [
      {
        name: "title",
        id: "formTitle",
        tag: "Form Title",
      },
      {
        name: "subtitle",
        id: "formSubitle",
        tag: "Form Subtitle",
      },
      {
        name: "btnText",
        id: "formBtnText",
        tag: "Button Text",
      },
      {
        name: "redirectUrl",
        id: "formRedirectUrl",
        tag: "Redirect Url",
      },
    ],
    checks: [
      {
        name: "fullName",
        id: "formFullname",
        tag: "Full Name",
      },
      {
        name: "email",
        id: "formEmail",
        tag: "Email Address",
      },
      {
        name: "phone",
        id: "formPhone",
        tag: "Phone Number",
      },
      {
        name: "location",
        id: "formLocation",
        tag: "Location",
      },
    ],
    colors: [
      {
        name: "bgColor",
        id: "formBgColor",
        tag: "Background Color",
      },
      {
        name: "inputBg",
        id: "formInputBg",
        tag: "Input Field Background",
      },
      {
        name: "textClr",
        id: "formTextClr",
        tag: "Text Color",
      },
      {
        name: "btnText",
        id: "formBtnText",
        tag: "Button Text Color",
      },
      {
        name: "btnBg",
        id: "formBtnBg",
        tag: "Button Color",
      },
    ],
  };

  const design = {
    styles: {
      textClr: colorFields.textClr,
      bodyClr: colorFields.bgColor,
      btnBG: colorFields.btnBg,
      btnTextClr: colorFields.btnText,
      bgClr: colorFields.bgColor,
      inputBG: colorFields.inputBg,
    },
    texts: {
      title: inputFields.title,
      subtitle: inputFields.subtitle,
      btnText: inputFields.btnText,
    },
    fields: [
      checkFields.email ? "email" : "",
      checkFields.fullName ? "fullName" : "",
      checkFields.phone ? "phone" : "",
      checkFields.location ? "location" : "",
    ],
    redirect: {
      url: inputFields.redirectUrl || "",
    },
  };

  const prevData = data?.design ? JSON.parse(data?.design) : {};

  const texts = prevData.texts;
  const styles = prevData.styles;

  const fields = prevData.fields;

  const { mutateAsync: editForm, isPending } = useEditDesign();
  const handleEditForm = () => {
    const toastId = toast.loading("Updating form design", {
      id: "updateToast",
    });
    editForm({
      campaign_id,
      design,
    })
      .then(() => {
        toast.success("Form design updated successfully", { id: toastId });
        navigate("/app/campaigns");
      })
      .catch(() => {
        toast.error("Unable to update form design", { id: toastId });
      });
  };

  if (isLoading)
    return (
      <div className="w-full h-screen pb-[200px] grid place-content-center">
        <Loader />
      </div>
    );

  return (
    <>
      <Logo />
      <div className="flex items-center justify-between">
        <h1 className="text-header text-2xl font-semibold">Edit your form</h1>
        <Button
          className="pry-btn gap-2"
          onClick={handleEditForm}
          disabled={isPending}
        >
          {isPending && <Loader2 className="animate-spin" />}
          <FaRegSquareCheck className="text-lg" /> Complete Editing
        </Button>
      </div>
      <div className="wizard-box w-full flex rounded-2xl border-[1px] border-gray-300 mt-6 overflow-hidden">
        <div className="basis-2/3 p-4 overflow-y-scroll flex items-center justify-center min-h-full">
          <div className="w-full max-w-[600px] mx-auto bg-gray-50 px-4 py-8 rounded-lg">
            <h1 className="text-header text-xl font-semibold uppercase text-center">
              {inputFields.title || texts?.title || "form title"}
            </h1>
            <p className="text-center my-4">
              {inputFields.subtitle || texts?.subtitle || "Form Subtitle"}
            </p>
            {checkFields.fullName && (
              <label className="block mb-2">
                <p>Full Name</p>
                <Input
                  type="text"
                  disabled
                  placeholder="e.g John Doe"
                  className="bg-transparent border-gray-300"
                />
              </label>
            )}

            {checkFields.email && (
              <label className="block mb-2">
                <p>Email Address</p>
                <Input
                  type="text"
                  disabled
                  placeholder="e.g johndoe@email.com"
                  className="bg-transparent border-gray-300"
                />
              </label>
            )}

            {checkFields.phone && (
              <label className="block mb-2">
                <p>Phone Number</p>
                <Input
                  type="text"
                  disabled
                  placeholder="09011223344"
                  className="bg-transparent border-gray-300"
                />
              </label>
            )}

            {checkFields.location && (
              <label className="block mb-2">
                <p>Location</p>
                <Input
                  type="text"
                  disabled
                  placeholder="e.g Lagos, Nigeria"
                  className="bg-transparent border-gray-300"
                />
              </label>
            )}

            <Button disabled className="w-full uppercase bg-accent-clr">
              {texts?.btnText || inputFields.btnText || "call me now"}
            </Button>
          </div>
        </div>

        <div className="basis-1/3 bg-white p-4 overflow-y-scroll">
          <h1 className="text-header text-xl mb-6 font-semibold">
            Form Settings
          </h1>
          <div className="px-3">
            {inputs.texts.map((text, idx) => (
              <label key={idx} htmlFor={text.id} className="block my-4">
                <p className="text-sm">{text.tag}</p>
                <Input
                  type="text"
                  className="h-8"
                  id={text.id}
                  name={text.name}
                  defaultValue={texts[text.name]}
                  onChange={(e) =>
                    setInputFields((prev) => ({
                      ...prev,
                      [e.target.name]: e.target.value,
                    }))
                  }
                />
              </label>
            ))}
          </div>

          <hr className="my-6" />

          <p>Check the options below for fields to display</p>
          <div className="px-3">
            {inputs.checks.map((check, idx) => (
              <label
                key={idx}
                htmlFor={check.id}
                className="flex gap-2 items-center my-2"
              >
                <input
                  type="checkbox"
                  name={check.name}
                  id={check.id}
                  defaultChecked={
                    fields[check.name] ||
                    checkFields[check.name as keyof typeof checkFields]
                  }
                  onChange={(e) =>
                    setCheckFields((prev) => ({
                      ...prev,
                      [e.target.name]: e.target.checked,
                    }))
                  }
                />
                <p className="text-sm">{check.tag}</p>
              </label>
            ))}
          </div>

          <hr className="my-6" />
          <p>Edit and customize form aesthetics with the options below</p>

          <div className="px-3">
            {inputs.colors.map((color, idx) => (
              <label
                key={idx}
                htmlFor={color.id}
                className="flex gap-2 items-center my-2"
              >
                <input
                  type="color"
                  name={color.name}
                  id={color.id}
                  defaultValue={
                    styles[color.name] ||
                    colorFields[color.name as keyof typeof colorFields]
                  }
                  onChange={(e) =>
                    setColorFields((prev) => ({
                      ...prev,
                      [e.target.name]: e.target.value,
                    }))
                  }
                />
                <p className="text-sm">{color.tag}</p>
              </label>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
