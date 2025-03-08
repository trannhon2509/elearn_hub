import { AppSidebar } from "@/components/app-sidebar";
import { SidebarRight } from "@/components/sidebar-right";
import {
    SidebarInset,
    SidebarProvider,
} from "@/components/ui/sidebar";
import Header from "@/components/header";
import React from "react";

const MemoizedAppSidebar = React.memo(AppSidebar);
const MemoizedSidebarRight = React.memo(SidebarRight);
const MemoizedSidebarInset = React.memo(SidebarInset);
const MemoizedHeader = React.memo(Header);

interface DashboardLayoutProps {
    children?: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
    return (
        <SidebarProvider>
            <MemoizedAppSidebar />
            <MemoizedSidebarInset>
                <MemoizedHeader />
                <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                    {children}
                </div>
            </MemoizedSidebarInset>
            <MemoizedSidebarRight />
        </SidebarProvider>
    );
}

export default React.memo(DashboardLayout);
