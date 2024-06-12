'use client';
import { ThemeProvider } from 'next-themes';
import { useLoaded } from '@/hooks';

const Providers = ({ children }: { children: React.ReactNode }) => {
  const loaded = useLoaded();
  if (!loaded) return;

  return (
    <ThemeProvider enableSystem={true} attribute="class">
      {children}
    </ThemeProvider>
  );
};

export default Providers;
