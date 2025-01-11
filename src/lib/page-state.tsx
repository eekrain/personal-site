import { createSignal } from "solid-js";

export const [currentPage, setCurrentPage] = createSignal<string | null>(null);
