"use client";

import { SignedIn, SignOutButton, UserButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Add, Logout,Search } from "@mui/icons-material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Topbar = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  return (
    <div className="flex justify-between items-center mt-6">
      <div className="relative" >
        <input
          type="text" 
          className="search-bar"
          placeholder="Search posts, people, ..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Search
          className="search-icon"
        />
      </div>

      <button
        className="flex items-center gap-2 rounded-lg py-2.5 px-3 bg-gradient-to-l from-pink-1 to-purple-1 text-light-1 text-small-semibold  hidden md:flex"
        onClick={() => router.push("/create-post")}
      >
      <Add/> <p>Create A Post</p>
      </button>

    <div className="flex gap-4 md:hidden"> 
    <SignedIn>
    <SignOutButton>
      <Link href='/sign-in'>   
      <Logout sx={{ color: "white", fontSize: "32px" }} />
      </Link>
    </SignOutButton>  
    </SignedIn>

       <UserButton appearance={{ baseTheme: dark }} afterSignOutUrl="/sign-in"/> 
    </div>

   </div>
  );
}
export default Topbar;