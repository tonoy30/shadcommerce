'use client';

import { Container } from './container';
import Link from 'next/link';
import { Button } from './ui/button';
import { routes } from '@/constants/routes';
import { Menu, Moon, ShoppingCart, Sun } from 'lucide-react';
import { ProfileMenu } from './profile-menu';
import { useTheme } from 'next-themes';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

export const Header = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="border-b px-4 py-3 sm:flex sm:justify-between">
      <Container>
        <div className="relative flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <Sheet>
              <SheetTrigger>
                <Menu className="mr-2 h-6 w-6 md:hidden" />
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4">
                  {routes.map(({ href, title }, i) => (
                    <Link
                      key={i}
                      href={href}
                      className="block px-2 py-1 text-lg"
                    >
                      {title}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
            <Link href="/">
              <h1 className="text-xl font-bold uppercase">store name</h1>
            </Link>
          </div>
          <nav className="mx-6 flex hidden items-center space-x-4 md:block lg:space-x-6">
            {routes.map(({ title, href }, i) => (
              <Button asChild variant="ghost" key={i}>
                <Link
                  className="text-sm font-medium transition-colors"
                  href={href}
                >
                  {title}
                </Link>
              </Button>
            ))}
          </nav>
          <div className="flex items-center">
            <Button
              className="mr-2"
              variant="ghost"
              size="icon"
              aria-label="Shopping Cart"
            >
              <ShoppingCart className="h-6 w-6" />
              <span className="sr-only">Shopping Cart</span>
            </Button>
            <Button
              className="mr-6"
              variant="ghost"
              size="icon"
              aria-label="Toggle Theme"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle Theme</span>
            </Button>
            <ProfileMenu />
          </div>
        </div>
      </Container>
    </div>
  );
};
