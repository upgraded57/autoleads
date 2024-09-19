import toast from "react-hot-toast";
import * as XLSX from "xlsx";

export const exportFile = (leads: any, campaign_name: string) => {
  // Check if leads exist
  if (!leads || !leads || leads.length === 0) {
    toast.error("No campaign to export");
    return;
  }

  // Ensure the campaign name is a valid sheet name
  const sanitizedCampaignName = campaign_name.replace(
    /[\\\/?*:|"<>\[\]]/g,
    "_"
  );

  // Extract Data (create a workbook object from the json)
  const worksheet = XLSX.utils.json_to_sheet(leads);

  // Add headers
  XLSX.utils.sheet_add_aoa(
    worksheet,
    [
      [
        "id",
        "Full Name",
        "Email Address",
        "Created Date",
        "Status",
        "Feedback",
      ],
    ],
    { origin: "A1" }
  );

  // Create a new workbook and append the worksheet
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, sanitizedCampaignName);

  // Write the file with a valid file extension
  XLSX.writeFile(workbook, `${sanitizedCampaignName}.xlsx`);
};
