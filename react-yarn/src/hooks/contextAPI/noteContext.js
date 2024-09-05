import { createContext, useState } from "react";

const NoteContext = createContext();

export const NoteData = ({ children }) => {
    const [state] = useState(
        {
            fname: "Micrasol",
            lname: "Solution",
            city: "Surat"
        });

    const [detail] = useState({
        emp: "30-40"
    });
    return (
        <NoteContext.Provider value={{ state, detail }}>
            {children}
        </NoteContext.Provider>
    );
};

export default NoteContext;