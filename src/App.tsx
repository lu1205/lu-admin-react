import {Routes} from "./router";
import {Suspense} from "react";
import Loading from "./components/loading";

function App() {
    const element = Routes()
    return (
        <>
            <Suspense fallback={<Loading/>}>
                {element}
            </Suspense>
        </>
    )
}

export default App
