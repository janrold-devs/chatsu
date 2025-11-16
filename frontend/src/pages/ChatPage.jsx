import { useChatStore } from "../store/useChatStore";
import ProfileHeader from "../components/ProfileHeader";
import ActiveTabSwitch from "../components/ActiveTabSwitch";
import ChatList from "../components/ChatList";
import ContactList from "../components/ContactList";
import ChatContainer from "../components/ChatContainer";
import NoConversionPlaceholder from "../components/NoConversionPlaceholder";
import ChatSettings from "../components/ChatSettings";

function ChatPage() {
  const { activeTab, selectedUser } = useChatStore();

  return (
    <div className="fixed inset-0 bg-slate-900 overflow-hidden flex gap-4 p-4">
      {/* LEFT SIDE */}
      <div className="w-80 bg-slate-800/50 backdrop-blur-sm flex flex-col border border-slate-700/20 rounded-2xl">
        <ProfileHeader />
        <ActiveTabSwitch />
        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          {activeTab === "chats" ? <ChatList /> : <ContactList />}
        </div>
      </div>

      {/* MIDDLE */}
      <div className="flex-1 flex flex-col bg-slate-900/50 backdrop-blur-sm border border-slate-700/20 rounded-2xl">
        {selectedUser ? <ChatContainer /> : <NoConversionPlaceholder />}
      </div>

      {/* RIGHT SIDE */}
      {selectedUser && (
        <div className="w-80 bg-slate-800/30 backdrop-blur-sm border border-slate-700/20 rounded-2xl overflow-y-auto">
          <ChatSettings />
        </div>
      )}
    </div>
  );
}

export default ChatPage;
