'use client'
import styles from "@/app/page.module.css";
import {useState} from "react";
import Shared from "@/components/shared";

export default function RestOfAnother() {
    const [click, setClick] = useState(false)
    const onClick = () => {
        console.log('clicked!')
        setClick(!click)
    }
    return (<>
            <Shared />
            {
                click ? <p> fill in the space </p> : null
            }
            <button onClick={onClick}>click me</button>
        </>
    )
}