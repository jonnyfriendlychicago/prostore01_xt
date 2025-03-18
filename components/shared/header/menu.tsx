import { EllipsisVertical, ShoppingCart , UserIcon} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import Link from 'next/link';
import ModeToggle from './mode-toggle';
// import UserButton from './user-button';

const Menu = () => {
  return (
    <div className='flex justify-end gap-3'>
      
      <nav className='hidden md:flex w-full max-w-xs gap-1'>
        <ModeToggle />
        <Button asChild variant='ghost'>
          <Link href='/cart'>
            <ShoppingCart /> Cart
          </Link>
        </Button>
        {/* <UserButton /> */}
        <Button asChild>
            <Link href='/sign-in'>
              <UserIcon />
              Sign In
            </Link>
          </Button>
      </nav>
      
      <nav className='md:hidden'>
        <Sheet>
          <SheetTrigger className='align-middle'> 
          {/* The `SheetTrigger` component is a button that triggers the sheet to slide in */}
            <EllipsisVertical />
          </SheetTrigger>
          <SheetContent className='flex flex-col items-start'>
          {/* The `SheetContent` component is the content of the sheet. We are using it to display the navigation links.
          The `SheetTitle` and `SheetDescription` components are required or you will get a warning in the console. */}
            <SheetTitle>Menu</SheetTitle>
            <ModeToggle />
            <Button asChild variant='ghost'>
              <Link href='/cart'>
                <ShoppingCart /> Cart
              </Link>
            </Button>
            {/* <UserButton /> */}
            <Button asChild>
                <Link href='/sign-in'>
                  <UserIcon />
                  Sign In
                </Link>
              </Button>
            <SheetDescription></SheetDescription>
          </SheetContent>
        </Sheet>
      </nav>

    </div>
  );
};

export default Menu;
