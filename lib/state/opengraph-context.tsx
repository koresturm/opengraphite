import { createContext, useContext, useState } from "react";
import { Opengraph } from "../type";

export type OpenGraphContextType = {
    openGraphData: Opengraph;
    setOpenGraphData: (data: Opengraph) => void;
};

export const OpenGraphContext = createContext<OpenGraphContextType>({
    openGraphData: { type: "", title: "", description: "", domain: "" },
    setOpenGraphData: () => { },
});

export const useOpenGraphContext = () => useContext<OpenGraphContextType>(OpenGraphContext);

export const OpenGraphProvider = ({ children }: { children: React.ReactNode }) => {
    const [openGraphData, setOpenGraphData] = useState<Opengraph>({ type: "", title: "", description: "", domain: "" });

    return (
        <OpenGraphContext.Provider value={{ openGraphData, setOpenGraphData }}>
            {children}
        </OpenGraphContext.Provider>
    );
};