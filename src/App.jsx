import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

import { useGetCryptosQuery } from "./services/cryptoApi";
import { useGetCryptoNewsQuery } from "./services/cryptoNewsApi";
import { useGetNewsQuery } from "./services/news";
import { useGetVideosQuery } from "./services/videos";
import { useGetStocksQuery } from "./services/stockApi";
import UseRefDemo from "./components/UseRefDemo";
import UseMemoDemo from "./components/UseMemoDemo";
import UseReducerDemo from "./components/UseReducerDemo";
import UseReducerDemo2 from "./components/UseReducerDemo2";
import UseCallbackDemo from "./components/UseCallbackDemo";
import CustomHooks from "./components/CustomHooks";

function App() {
  // const { data, isFetching } = useGetCryptosQuery();
  // const { data, isFetching } = useGetCryptoNewsQuery("cryptocurrency");
  // const { data, isFetching } = useGetNewsQuery({ searchTerm: "Virat Kohli" });
  // const { data, isFetching } = useGetVideosQuery({ searchTerm: "Virat Kohli" });
  // const { data, isFetching } = useGetStocksQuery({
  //   symbol: "SBIN.NS",
  //   region: "IN",
  //   range: "1d",
  //   interval: "5m",
  // });

  // if (isFetching) console.log("Loading...");
  // console.log(data?.chart);

  return (
    <div className="App">
      {/* {data &&
        data?.image_results?.map(({ image, link: { title, href } }, index) => (
          <>
            <img src={image?.src} alt={title} loading="lazy" key={index} />
            <p>{title}</p>
          </>
        ))} */}
      {/* <UseRefDemo /> */}
      {/* <UseMemoDemo /> */}
      {/* <UseReducerDemo /> */}
      {/* <UseReducerDemo2 /> */}
      {/* <UseCallbackDemo /> */}
      <CustomHooks />
    </div>
  );
}

export default App;

/**
 * 
 * Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.
 * 
 * Don’t call Hooks inside loops, conditions, or nested functions. Instead, always use Hooks at the top level of your React function, before any early returns. By following this rule, you ensure that Hooks are called in the same order each time a component renders. That’s what allows React to correctly preserve the state of Hooks between multiple useState and useEffect calls. 
 * 
 * Don’t call Hooks from regular JavaScript functions. Instead, you can:

✅ Call Hooks from React function components.
✅ Call Hooks from custom Hooks.
 */
