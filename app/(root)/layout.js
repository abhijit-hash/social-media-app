import { Inter } from "next/font/google"
import "../globals.css"

import LeftSideBar from "@components/layout/LeftSideBar";
import MainContainer from "@components/layout/MainContainer";
import RightSideBar from "@components/layout/RightSideBar";
import BottomBar from "@components/layout/BottomBar"
import { ClerkProvider } from "@clerk/nextjs";

export const metadata = {
  title: 'Social Zone',
  description: 'Next 14 Social Media App',
}

const inter = Inter({ subsets: ['latin'] })
export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={`${inter.className} bg-purple-2 text-light-1`}>
        <main className="flex flex-row">
        <LeftSideBar />
        <MainContainer>
          {children}
        </MainContainer>
        <RightSideBar />
        </main>
        <BottomBar />
      </body>
      </html>
    </ClerkProvider>
  )
}