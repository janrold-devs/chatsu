import { useAuthStore } from "../store/useAuthStore"

function ChatPage() {
  const { logout } = useAuthStore();
  return (
    <div>
      Chatpage
    </div>
  )
}

export default ChatPage
