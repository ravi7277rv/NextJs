import Navbar from "@/components/layouts/Navbar"

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      <footer style={{
         width:"100%",
         height:"100px",
         display:"flex",
         justifyContent:"flex-start",
         alignItems:"center",
         background:"tomato",
         fontSize:"25px",
         fontWeight:"bold"
      }}>
         <p style={{
         marginLeft:"20px"
         }}>Footer</p>
      </footer>
      </body>
    </html>
  )
}
