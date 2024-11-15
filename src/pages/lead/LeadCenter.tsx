import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { baseURL } from "@/api/baseUrl";
import moment from "moment";

export default function LeadCenter({ lead }: any) {
  return (
    <>
      <div className="p-4 border-b-[1px] border-gray-200">
        <AudioPlayer
          autoPlay={false}
          src={`${baseURL}/recording/${lead?.id}/`}
          layout="horizontal-reverse"
          showJumpControls={false}
          customVolumeControls={[]}
          customAdditionalControls={[]}
          customProgressBarSection={[RHAP_UI.PROGRESS_BAR, RHAP_UI.DURATION]}
        />
      </div>

      <div className="p-4">
        <h3 className="font-semibold">Transcription</h3>
        <p className="text-xs">
          {lead?.call_time
            ? `${lead?.full_name} - ${moment(lead?.call_time).fromNow()}`
            : "Call date not available"}
        </p>
      </div>
      <div className="p-4 pt-0">
        <p>Transcription not available</p>
      </div>
    </>
  );
}
