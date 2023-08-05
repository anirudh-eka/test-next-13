import Link from "next/link";

export default function Home() {
  return (
    <>
        <ul>
            <li><Link href={'/rendered-in-pages'}>Go to rendered-in-pages</Link></li>
            <li><Link href={'/'}>Link to self</Link></li>
        </ul>
    </>
  )
}
