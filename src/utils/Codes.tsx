import toast from "react-hot-toast";

const address = `${window.location.origin}/forms`;

export const modalCode = (campaign_id: string) => {
  return `<button style="position: fixed; bottom: 20px; left: 50%; transform: translateX(-50%); width: min(500px, 90vw); z-index: 100000; height: 40px; border-radius: 10px; border: none; outline: none; background-color: green; color: white; cursor: pointer; box-shadow: 2px 2px 10px lightgrey; display: flex; align-items: center; justify-content: center" onClick="document.querySelector(.overlay-modal).style.display = "flex;" title="Request a call">Request a Call</button><div class="overlay-modal" id="lds-overlay-modal" style="width: 100%; height: 100vh; justify-content: center; align-items: center; background-color: #00000050; display: none; position: fixed; inset: 0; z-index: 1000001" onClick="document.getElementById(lds-overlay-modal).style.display = "none"><iframe sandbox="allow-scripts allow-popups allow-forms allow-same-origin" src="${address}/${campaign_id}" frameborder="0" width="600px" height="520px" scrolling="no"></iframe></div>`;
};

export const inlineCode = (campaign_id: string) => {
  return `<iframe sandbox="allow-scripts allow-popups allow-forms allow-same-origin" src="${address}/${campaign_id}" frameborder="0" width="100%" height="520px" scrolling="no"></iframe>`;
};

const url = (campaign_id: string) => `${address}/${campaign_id}`;
// copy lead form code
export const copyCodeAsPopup = (campaign_id: string) => {
  const code = modalCode(campaign_id);
  navigator.clipboard
    .writeText(code)
    .then(() => {
      toast.success("Code copied to clipboard", { id: "codeCopyToast" });
    })
    .catch(() => toast.error("Something went wrong. Unable to copy code"));
};

// copy lead form code
export const copyCodeAsInline = (campaign_id: string) => {
  const code = inlineCode(campaign_id);
  navigator.clipboard
    .writeText(code)
    .then(() => {
      toast.success("Code copied to clipboard", { id: "codeCopyToast" });
    })
    .catch(() => toast.error("Something went wrong. Unable to copy code"));
};

// copy lead form code
export const copyUrl = (campaign_id: string) => {
  const code = url(campaign_id);
  navigator.clipboard
    .writeText(code)
    .then(() => {
      toast.success("Code copied to clipboard", { id: "codeCopyToast" });
    })
    .catch(() => toast.error("Something went wrong. Unable to copy code"));
};
