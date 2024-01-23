import ChatBox from "@/components/ui/ChatBox";
import SideBarItems from "@/components/ui/sidebar";

export default function Home() {
  return <div className="flex">
    <SideBarItems />
    <ChatBox />
  </div>;
}
