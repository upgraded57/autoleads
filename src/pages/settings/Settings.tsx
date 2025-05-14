import LayoutTop from "@/components/LayoutTop";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CustomText from "./tabs/CustomText";
import AudioUpload from "./tabs/AudioUpload";
import Form from "./tabs/Form";
import Roles from "./tabs/Roles";

export default function Settings() {
  const tabTriggers = [
    {
      value: "roles",
      text: "Roles and Permissions",
      component: <Roles />,
    },
    {
      value: "text",
      text: "Custom Text Body",
      component: <CustomText />,
    },
    {
      value: "audio",
      text: "Upload Audio Recording",
      component: <AudioUpload />,
    },
    {
      value: "form",
      text: "Contact Form",
      component: <Form />,
    },
  ];
  return (
    <>
      <LayoutTop
        title="Settings"
        subtitle="Customize platform to suit your needs"
      />
      <Tabs defaultValue="roles" className="w-full">
        <TabsList className="w-full bg-transparent border-b-[1px] border-gray-400 rounded-none mb-6">
          {tabTriggers.map((trigger, idx) => (
            <TabsTrigger
              value={trigger.value}
              className="w-full rounded-none text-[16px]"
              key={idx}
            >
              {trigger.text}
            </TabsTrigger>
          ))}
        </TabsList>

        {tabTriggers.map((trigger, idx) => (
          <TabsContent value={trigger.value} key={idx}>
            {trigger.component}
          </TabsContent>
        ))}
      </Tabs>
    </>
  );
}
