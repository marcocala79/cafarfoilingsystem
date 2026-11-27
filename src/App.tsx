import { Outlet } from "react-router-dom";
import type { RouteRecord } from "vite-react-ssg";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import { CookieBanner } from "@/components/CookieBanner";
import Index from "./pages/Index";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Simulator from "./pages/Simulator";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const RootLayout = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <LanguageProvider>
          <Outlet />
          <CookieBanner />
        </LanguageProvider>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Index /> },
      { path: "it", element: <Index /> },
      { path: "privacy", element: <PrivacyPolicy /> },
      { path: "it/privacy", element: <PrivacyPolicy /> },
      { path: "simulator", element: <Simulator /> },
      { path: "it/simulatore", element: <Simulator /> },
      // ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE
      { path: "*", element: <NotFound /> },
    ],
  },
];
