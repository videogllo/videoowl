//functional
import Head from "next/head";

//default page
import Main from "./main";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Videogllo</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/image/logo/logo_small.svg" />
            </Head>
            
            <Main></Main>
        </div>
    );
}
