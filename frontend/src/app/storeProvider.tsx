"use client";
import { useRef } from "react";
import { AppStore, makeStore } from "../store/store";
import { Provider } from "react-redux";

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const store = useRef<AppStore | null>(null);
  if (!store.current) {
    store.current = makeStore();
  }
    return <Provider store={store.current}>{children}</Provider>;
}
