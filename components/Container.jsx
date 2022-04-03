import Head from "next/head"
import TitleContext from "../context/TitleContext";
import {useContext} from "react";
import Navigation from "./Navigation";

const Container = ({ children }) => {

    const title = useContext(TitleContext);

    return(
        <div>
            <Head>
                <title>
                    {title}
                </title>
            </Head>
            <Navigation />
            <div
                className="container m-4"
            >
                {children}
            </div>
        </div>
    )
}

export default Container;