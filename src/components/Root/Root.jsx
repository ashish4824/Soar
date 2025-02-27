import { Outlet } from "react-router-dom";
import { useState, Suspense, lazy, useEffect } from "react";
const Header = lazy(() => import("../Header/Header"));
const SideBar = lazy(() => import("../SideBar/SideBar"));

function Root() {
  const [open, setopen] = useState(true);

    useEffect(() => {
     if (window.innerWidth <= 1279) {
        setopen(false);
        console.log("if")
    } else {
        console.log("else")
        setopen(true);
    }
    }, [])
    
  return (
    <div className="flex w-full">
      <div>
        <Suspense fallback={""}>
          <SideBar sidebar={setopen} open={open} />
        </Suspense>
      </div>

      <div className="w-full">
        <Suspense fallback={<div>Loading Header...</div>}>
          <Header sidebar={setopen} open={open} />
        </Suspense>

        
          <Outlet />
        
      </div>
    </div>
  );
}

export default Root;
