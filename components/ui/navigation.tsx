'use client';

import Link from 'next/link';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider
} from '@/components/ui/tooltip';
import {
  Home,
  Package2,
  ClipboardPenLine,
  Settings,
  Users2,
  ListTodo
} from 'lucide-react';

import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export function SideNavigation() {
  const pathname = usePathname();

  const baseLinkStyles =
    'flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8';

  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
      <TooltipProvider>
        <nav className="flex flex-col items-center gap-4 px-2 py-4">
          <Link
            href="#"
            className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
          >
            <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
            <span className="sr-only">Seekr</span>
          </Link>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="#"
                className={clsx(baseLinkStyles, {
                  'bg-accent text-accent-foreground': pathname === '/dashboard'
                })}
              >
                <Home className="h-5 w-5" />
                <span className="sr-only">Dashboard</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Dashboard</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="#"
                className={clsx(baseLinkStyles, {
                  'bg-accent text-accent-foreground':
                    pathname === '/dashboard/jobs'
                })}
              >
                <ClipboardPenLine className="h-5 w-5" />
                <span className="sr-only">Jobs</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Jobs</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="#"
                className={clsx(baseLinkStyles, {
                  'bg-accent text-accent-foreground':
                    pathname === '/dashboard/activities'
                })}
              >
                <ListTodo className="h-5 w-5" />
                <span className="sr-only">Activities</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Activities</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="#"
                className={clsx(baseLinkStyles, {
                  'bg-accent text-accent-foreground':
                    pathname === '/dashboard/contacts'
                })}
              >
                <Users2 className="h-5 w-5" />
                <span className="sr-only">Contacts</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Contacts</TooltipContent>
          </Tooltip>
        </nav>
        <nav className="mt-auto flex flex-col items-center gap-4 px-2 py-4">
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="#"
                className={clsx(baseLinkStyles, {
                  'bg-accent text-accent-foreground':
                    pathname === '/dashboard/jobs'
                })}
              >
                <Settings className="h-5 w-5" />
                <span className="sr-only">Settings</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Settings</TooltipContent>
          </Tooltip>
        </nav>
      </TooltipProvider>
    </aside>
  );
}

export function SlideOutNavigation() {
  const pathname = usePathname();
  const baseLinkStyles = 'flex items-center gap-4 px-2.5';

  return (
    <nav className="grid gap-6 text-lg font-medium">
      <Link
        href="#"
        className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
      >
        <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
        <span className="sr-only">Seekr</span>
      </Link>
      <Link
        href="#"
        className={clsx(baseLinkStyles, {
          'text-foreground': pathname === '/dashboard',
          'text-muted-foreground hover:text-foreground': !(
            pathname === '/dashboard'
          )
        })}
      >
        <Home className="h-5 w-5" />
        Dashboard
      </Link>
      <Link
        href="#"
        className={clsx(baseLinkStyles, {
          'text-foreground': pathname === '/dashboard/jobs',
          'text-muted-foreground hover:text-foreground': !(
            pathname === '/dashboard/jobs'
          )
        })}
      >
        <ClipboardPenLine className="h-5 w-5" />
        Jobs
      </Link>
      <Link
        href="#"
        className={clsx(baseLinkStyles, {
          'text-foreground': pathname === '/dashboard/activities',
          'text-muted-foreground hover:text-foreground': !(
            pathname === '/dashboard/activities'
          )
        })}
      >
        <ListTodo className="h-5 w-5" />
        Activities
      </Link>
      <Link
        href="#"
        className={clsx(baseLinkStyles, {
          'text-foreground': pathname === '/dashboard/contact',
          'text-muted-foreground hover:text-foreground': !(
            pathname === '/dashboard/contact'
          )
        })}
      >
        <Users2 className="h-5 w-5" />
        Contacts
      </Link>
      {/* <Link
        href="#"
        className={clsx(baseLinkStyles, {
          'text-foreground': pathname === '/dashboard/settings',
          'text-muted-foreground hover:text-foreground': !(
            pathname === '/dashboard/settings'
          )
        })}
      >
        <LineChart className="h-5 w-5" />
        Settings
      </Link> */}
    </nav>
  );
}
