import { NewsProvider } from "context";
import React from "react";
import RoutesNews from "routes/routes";

function App() {
    return (
        <NewsProvider>
            <RoutesNews />
        </NewsProvider>
    );
}

export default App;
