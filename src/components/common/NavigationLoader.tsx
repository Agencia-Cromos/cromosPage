"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

type NavigationLoaderContextValue = {
  isNavigating: boolean;
  startNavigation: () => void;
};

const NavigationLoaderContext = createContext<NavigationLoaderContextValue | null>(null);

type NavigationLoaderProviderProps = {
  children: React.ReactNode;
};

export function NavigationLoaderProvider({ children }: NavigationLoaderProviderProps) {
  const [isNavigating, setIsNavigating] = useState(false);
  const pathname = usePathname();

  const startNavigation = useCallback(() => {
    setIsNavigating(true);
  }, []);

  useEffect(() => {
    if (isNavigating) {
      setIsNavigating(false);
    }
  }, [pathname, isNavigating]);

  return (
    <NavigationLoaderContext.Provider value={{ isNavigating, startNavigation }}>
      {children}
      {isNavigating ? (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/45 backdrop-blur-sm">
          <div className="flex items-center gap-3 rounded-full bg-white/10 px-6 py-3 text-sm font-medium text-white shadow-[0_18px_60px_rgba(0,0,0,0.65)]">
            <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/50 border-t-transparent" />
            <span>Carregando...</span>
          </div>
        </div>
      ) : null}
    </NavigationLoaderContext.Provider>
  );
}

export function useNavigationLoader() {
  return useContext(NavigationLoaderContext);
}

