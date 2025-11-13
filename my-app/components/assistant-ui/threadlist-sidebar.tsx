import * as React from "react";
import { Brain } from "lucide-react"; // 👈 Only Brain icon now
import Link from "next/link";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { ThreadList } from "@/components/assistant-ui/thread-list";

export function ThreadListSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      {/* 🔹 Header Section */}
      <SidebarHeader className="aui-sidebar-header mb-2 border-b">
        <div className="aui-sidebar-header-content flex items-center justify-between">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg" asChild>
                <Link href="/" target="_self">
                  {/* 🌈 VastMind AI logo icon */}
                  <div className="aui-sidebar-header-icon-wrapper flex aspect-square size-8 items-center justify-center rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-md">
                    <Brain className="aui-sidebar-header-icon size-4" />
                  </div>

                  <div className="aui-sidebar-header-heading mr-6 flex flex-col gap-0.5 leading-none">
                    <span className="aui-sidebar-header-title font-semibold text-lg bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                      VastMind AI
                    </span>
                    <span className="text-xs text-muted-foreground">
                      Your Intelligent Companion
                    </span>
                  </div>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </div>
      </SidebarHeader>

      {/* 🔹 Thread List */}
      <SidebarContent className="aui-sidebar-content px-2">
        <ThreadList />
      </SidebarContent>

      <SidebarRail />

      {/* 🔹 Custom Footer (GitHub removed) */}
      <SidebarFooter className="aui-sidebar-footer border-t py-3 text-center text-xs text-muted-foreground">
        <span>© 2025 VastMind AI</span>
      </SidebarFooter>
    </Sidebar>
  );
}
