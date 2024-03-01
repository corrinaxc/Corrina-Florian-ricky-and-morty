import { title, fetchData } from "./../../index.js";

export function titleEventListener() {
    title.addEventListener("click", () => {
        fetchData(1, "name=");
    })
};
