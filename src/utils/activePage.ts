import { createSignal } from "solid-js";

export type PageIds = "home" | "about" | "skills" | "qualification" | "contact";
export const [activePage, setActivePage] = createSignal<PageIds>("home");
