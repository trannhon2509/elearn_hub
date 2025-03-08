import { Outlet } from "react-router-dom";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarRight } from "@/components/sidebar-right";
import {
    SidebarInset,
    SidebarProvider,
} from "@/components/ui/sidebar";
import Header from "@/components/header";


export default function DashboardLayout() {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <Header />
                <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                    <Outlet />
                </div>
            </SidebarInset>
            <SidebarRight />
        </SidebarProvider>
    );
}
