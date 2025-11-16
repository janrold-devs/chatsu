import React from "react";

function ChatSettings() {
  return (
    <div className="space-y-2">
      <div className="collapse collapse-arrow bg-slate-800/30">
        <input type="checkbox" />
        <div className="collapse-title text-md font-medium text-slate-200">Chat info</div>
        <div className="collapse-content text-sm text-slate-300">
          <button className="w-full text-left py-2 rounded hover:bg-slate-700/50 transition-colors cursor-pointer">
            View pinned messages
          </button>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-slate-800/30">
        <input type="checkbox" />
        <div className="collapse-title text-md font-medium text-slate-200">Customize chat</div>
        <div className="collapse-content text-sm text-slate-300">
          <button className="w-full text-left py-2 px-3 rounded hover:bg-slate-700/50 transition-colors cursor-pointer">
            Change theme
          </button>
          <button className="w-full text-left py-2 px-3 rounded hover:bg-slate-700/50 transition-colors cursor-pointer">
            Change emoji
          </button>
          <button className="w-full text-left py-2 px-3 rounded hover:bg-slate-700/50 transition-colors cursor-pointer">
            Edit nickname
          </button>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-slate-800/30">
        <input type="checkbox" />
        <div className="collapse-title text-md font-medium text-slate-200">Media & files</div>
        <div className="collapse-content text-sm text-slate-300">
          <button className="w-full text-left py-2 px-3 rounded hover:bg-slate-700/50 transition-colors cursor-pointer">
            Media
          </button>
          <button className="w-full text-left py-2 px-3 rounded hover:bg-slate-700/50 transition-colors cursor-pointer">
            Files
          </button>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-slate-800/30">
        <input type="checkbox" />
        <div className="collapse-title text-md font-medium text-slate-200">Privacy & support</div>
        <div className="collapse-content text-sm text-slate-300">
          <button className="w-full text-left py-2 px-3 rounded hover:bg-slate-700/50 transition-colors cursor-pointer">
            Mute notifications
          </button>
          <button className="w-full text-left py-2 px-3 rounded hover:bg-slate-700/50 transition-colors cursor-pointer">
            Block
          </button>
          <button className="w-full text-left py-2 px-3 rounded hover:bg-slate-700/50 transition-colors cursor-pointer">
            Report
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatSettings;