import React from "react";
import { Box } from "rebass";

interface HeaderFooterPageProps {
  children: React.ReactNode;
}

export function HeaderFooterPage({ children }: HeaderFooterPageProps) {
  return (
    <>
      <header>Header</header>
      {/* <PageWrapper sx={{ mx: 3 }}>{children}</PageWrapper> */}
      <Box sx={{ mx: 3 }}>{children}</Box>
      <footer>Footer</footer>
    </>
  );
}
