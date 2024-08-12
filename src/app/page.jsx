 import Link from "next/link";
 const Page = () => {
  return (
    <div>
      <h1>Welcome Home!</h1>
      <Link href="/blog">Blog</Link>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/product">Products</Link>
    </div>
  )
}
export default Page;
