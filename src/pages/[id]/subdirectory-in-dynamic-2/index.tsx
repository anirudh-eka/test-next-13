import Link from "next/link";
import {GetServerSideProps} from "next";

export default function Subdirectory2InDynamic() {
    return (
        <>
            <h1>Subdirectory 2 in Dynamic route in pages directory</h1>
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

export const getServerSideProps: GetServerSideProps = async ({ req, params}) => {

    if(params?.id !== "123") {
        throw new Error("Not found");
    }

    return {
        props: params,
    };
};
