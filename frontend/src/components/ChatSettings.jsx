import { Pin, Palette, ThumbsUp, Pencil, Image, Paperclip, ShieldBan, TriangleAlert } from "lucide-react";

function ChatSettings() {
  return (
    <div className="w-full max-w-md flex flex-col space-y-1 mt-2">
      {/* CHAT INFO */}
      <div className="collapse collapse-arrow">
        <input type="checkbox" />
        <div className="collapse-title font-bold">Chat info</div>
        <div className="collapse-content">
          <button className="py-3 px-2 w-full text-left rounded-md hover:bg-slate-700/20">
            <div className="flex items-center space-x-2">
              <Pin className="h-5 w-5" />
              <span>View pinned messages</span>
            </div>
          </button>
        </div>
      </div>

      {/* CUSTOM CHAT */}
      <div className="collapse collapse-arrow ">
        <input type="checkbox" />
        <div className="collapse-title font-bold">Customize chat</div>
        <div className="collapse-content space-y-2">
          <button className="py-3 px-2 w-full text-left rounded-md hover:bg-slate-700/20 ">
            <div className="flex items-center space-x-2">
              <Palette className="h-5 w-5" />
              <span>Change theme</span>
            </div>
          </button>
          <button className="py-3 px-2 w-full text-left rounded-md hover:bg-slate-700/20 ">
            <div className="flex items-center space-x-2">
              <ThumbsUp className="h-5 w-5" />
              <span>Change emoji</span>
            </div>
          </button>
          <button className="py-3 px-2 w-full text-left rounded-md hover:bg-slate-700/20 ">
            <div className="flex items-center space-x-2">
              <Pencil className="h-5 w-5" />
              <span>Edit nickname</span>
            </div>
          </button>
        </div>
      </div>

      {/* MEDIA & FILES */}
      <div className="collapse collapse-arrow ">
        <input type="checkbox" />
        <div className="collapse-title font-bold">Media & files</div>
        <div className="collapse-content space-y-2">
          <button className="py-3 px-2 w-full text-left rounded-md hover:bg-slate-700/20 ">
            <div className="flex items-center space-x-2">
              <Image className="h-5 w-5" />
              <span>Media</span>
            </div>
          </button>
          <button className="py-3 px-2 w-full text-left rounded-md hover:bg-slate-700/20 ">
            <div className="flex items-center space-x-2">
              <Paperclip className="h-5 w-5" />
              <span>Files</span>
            </div>
          </button>
        </div>
      </div>

      {/* PRIVACY & SUPPORT */}
      <div className="collapse collapse-arrow ">
        <input type="checkbox" />
        <div className="collapse-title font-bold">Privacy & support</div>
        <div className="collapse-content space-y-2">
          <button className="py-3 px-2 w-full text-left rounded-md hover:bg-slate-700/20 ">
            <div className="flex items-center space-x-2">
              <ShieldBan className="h-5 w-5" />
              <span>Block</span>
            </div>
          </button>
          <button className="py-3 px-2 w-full text-left rounded-md hover:bg-slate-700/20 ">
            <div className="flex items-center space-x-2">
              <TriangleAlert className="h-5 w-5" />
              <span>Report</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatSettings;
