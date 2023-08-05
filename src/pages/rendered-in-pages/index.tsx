import Link from "next/link";

export default function Home() {
    return (
        <>
            <h1>Rendered in Pages: Page 1</h1>
            <ul>
                <li><Link href={'/rendered-in-pages'}>Go to pages directory</Link></li>
                <li><Link href={'/'}>Go to Main (App directory)</Link></li>
                <li><Link href={'/123'}>Go to dynamic route (pages directory)</Link></li>
                <ul>
                    <li><Link href={'/123/subdirectory-in-dynamic'}>Go to subdirectory in dynamic route (pages directory)</Link></li>
                    <li><Link href={'/123/subdirectory-in-dynamic-2'}>Go to subdirectory 2 in dynamic route (pages directory)</Link></li>
                </ul>
            </ul>
        </>
    )
}