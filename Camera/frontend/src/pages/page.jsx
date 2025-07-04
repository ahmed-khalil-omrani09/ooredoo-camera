import * as React from "react";
import SiteHeader from "@/components/header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import Home from "../components/Home/Home";
import {useState } from "react";
import { WorldMapDemo } from "../components/Home/WorldMap";
import TableCamera from "../components/Table";
import NvrList from "../components/NvrList";
function Page() {
  const [showComp,setShowComp]=useState("home")
  return (
    <div className="[--header-height:calc(theme(spacing.14))]">
      <SidebarProvider className="flex flex-col">
        <SiteHeader onShowComp={setShowComp}/>
        
        <div className="flex flex-1">
          <SidebarInset>
            <div className="flex flex-1 flex-col gap-4 ">
           { showComp==="manage Nvc"&&<NvrList />}
              <TableCamera />
            </div>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
}
export default Page;
