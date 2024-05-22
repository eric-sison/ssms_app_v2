"use client";

import { FunctionComponent, PropsWithChildren, useEffect, useState } from "react";
import {
  QueryClient,
  QueryClientProvider as ReactQueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";
import { useRQDevtoolsProd } from "@mapstudio/lib/zustand/useRQDevtoolsProd";

const ReactQueryDevtoolsProduction = React.lazy(() =>
  import("@tanstack/react-query-devtools/build/modern/production.js").then((d) => ({
    default: d.ReactQueryDevtools,
  }))
);

export const QueryClientProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const [queryClient] = useState(new QueryClient());

  const show = useRQDevtoolsProd((state) => state.show);
  const toggleShow = useRQDevtoolsProd((state) => state.toggleShow);

  useEffect(() => {
    // @ts-expect-error
    window.toggleDevtools = () => toggleShow();
  }, [toggleShow, show]);

  return (
    <ReactQueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />

      {show && (
        <React.Suspense fallback={null}>
          <ReactQueryDevtoolsProduction />
        </React.Suspense>
      )}
    </ReactQueryClientProvider>
  );
};
