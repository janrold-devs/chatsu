import { useState, useEffect, useRef } from "react";
import { useChatStore } from "../../store/useChatStore";
import { useAuthStore } from "../../store/useAuthStore";
import BorderAnimatedContainer from "../BorderAnimatedContainer";
import ProfileHeader from "../ProfileHeader";
import ActiveTabSwitch from "../ActiveTabSwitch";
import ChatList from "../ChatList";
import ContactList from "../ContactList";
import ChatContainer from "../ChatContainer";
import NoConversionPlaceholder from "../NoConversionPlaceholder";
import { MenuIcon, XIcon, ArrowLeft } from "lucide-react";

function MobileChatLayout() {
  const { activeTab, selectedUser, setSelectedUser } = useChatStore();
  const { onlineUsers } = useAuthStore();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const messageEndRef = useRef(null);

  // Check if selected user is online
  const isOnline = selectedUser ? onlineUsers.includes(selectedUser._id) : false;

  // Scroll bottom when keyboard opens
  useEffect(() => {
    const handleResize = () => {
      // Forces scroll to bottom when keyboard appears
      document
        .querySelector("#message-end")
        ?.scrollIntoView({ behavior: "smooth", block: "end" });
    };
    window.visualViewport?.addEventListener("resize", handleResize);
    return () =>
      window.visualViewport?.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative w-full h-[100dvh] flex justify-center overflow-hidden">
      {/* Floating burger icon (outside container) */}
      {!isSidebarOpen && !selectedUser && (
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="fixed top-4 left-4 z-50 bg-slate-800/70 backdrop-blur-lg p-2 rounded-xl text-slate-200 hover:text-white shadow-md transition"
        >
          <MenuIcon className="w-6 h-6" />
        </button>
      )}

      <BorderAnimatedContainer>
        {/* Sidebar Drawer */}
        <div
          className={`fixed inset-y-0 left-0 z-40 w-72 bg-slate-800/70 backdrop-blur-md flex flex-col transform transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 pt-4 pb-2">
            <h2 className="text-slate-100 font-semibold text-lg">Chats</h2>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="text-slate-300 hover:text-white"
            >
              <XIcon className="w-5 h-5" />
            </button>
          </div>

          <ProfileHeader />
          <ActiveTabSwitch />

          <div className="flex-1 overflow-y-auto p-4 space-y-2">
            {activeTab === "chats" ? (
              <ChatList
                onSelectChat={() => {
                  setIsSidebarOpen(false);
                }}
              />
            ) : (
              <ContactList
                onSelectContact={() => {
                  setIsSidebarOpen(false);
                }}
              />
            )}
          </div>
        </div>

        {/* Overlay */}
        {isSidebarOpen && (
          <div
            onClick={() => setIsSidebarOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30"
          ></div>
        )}

        {/* Chat Area */}
        <div className="flex-1 flex flex-col bg-slate-900/60 backdrop-blur-sm relative">
          {/* Chat Header */}
          {selectedUser && (
            <div className="flex items-center gap-3 px-4 py-3 border-b border-slate-700 bg-slate-800/60 backdrop-blur-lg">
              <button
                onClick={() => setSelectedUser(null)}
                className="text-slate-300 hover:text-white"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <img
                src={selectedUser?.profilePic || "/avatar.png"}
                alt="Your avatar"
                className="w-8 h-8 rounded-full object-cover"
              />
              <div className="flex flex-col">
                <span className="text-white font-medium text-sm">
                  {selectedUser.fullName}
                </span>
                <span className="text-xs text-slate-400">
                  {isOnline ? "Online" : "Offline"}
                </span>
              </div>
            </div>
          )}

          {/* Messages or Placeholder */}
          <div className="flex-1 overflow-y-auto">
            {selectedUser ? (
              <ChatContainer messageEndRef={messageEndRef} showHeader={false}/>
            ) : (
              <NoConversionPlaceholder />
            )}
          </div>
        </div>
      </BorderAnimatedContainer>
    </div>
  );
}

export default MobileChatLayout;