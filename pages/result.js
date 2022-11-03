//functional
import Head from "next/head";
import axios from "axios";

//component
import BannerLine from "./components/bannerLine";
// import HeaderResult from "./components/headerResult";
import Header from "./components/header";
import BannerMain from "./components/bannerMain";
import Category from "./components/category";
import BannerSub from "./components/bannerSub";
import ResultList from "./components/resultList";

const Result = () => {
    return (
        <div className="bg-slate-900 overflow-hidden flex">
            <Head>
                <title>MOABODA | 종합 컨텐츠 큐레이션 플랫폼</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/image/logo/logo_small.png" />
            </Head>

            <div className="flex flex-col w-full">
                <BannerLine></BannerLine>

                {/* asd: {props.map(el => (<div key={el.id}>{el.name}</div>))} */}

                <div className="w-full md:w-[90%] lg:w-[80%] xl:w-[70%] 2xl:w-[60%] mx-auto flex-1 p-3">
                    {/* <HeaderResult></HeaderResult> */}
                    <Header></Header>
                    <BannerMain></BannerMain>
                    <Category></Category>
                    <BannerSub></BannerSub>
                    <ResultList></ResultList>
                </div>
            </div>
        </div>
    );
};

// export async function getServerSideProps(context) {
//     const res = await axios.get(
//         process.env.NEXT_PUBLIC_API_URL + "api/result?q=" + context.query.q
//     );
//     const result = res.data;

//     // console.log("client: ", result)

//     return { props: { result } };
// }

export default Result;
