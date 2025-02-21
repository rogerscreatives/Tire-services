'use client';
import ThemeProvider from '@/lib/hooks/use-theme';

import Cursor from '@/components/ui/Cursor';

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

export default function RootLayoutClient({
  children,
  fontVariables,
}: {
  children: React.ReactNode;
  fontVariables: string;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`text-text bg-bg ${fontVariables}`}>
        <Cursor className="hidden dark:lg:block" />
        <ThemeProvider>{children}</ThemeProvider>
        <ProgressBar
          height="4px"
          color="#2299DD"
          options={{ showSpinner: false }}
          shallowRouting
        />
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              // Prevent flash of unstyled content
              document.documentElement.style.visibility = 'visible';
            })();
          `
        }} />
      </body>
    </html>
  );
}