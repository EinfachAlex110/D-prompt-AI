'use client';

import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Sidebar from '@/components/Sidebar';

type MobileSidebarProps = {
  apiLimit: number;
};

const MobileSidebar: React.FC<MobileSidebarProps> = ({ apiLimit }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);

  if (!open) return null;

  return (
    <Sheet>
      <SheetTrigger>
        <Menu size='23px' className='md:hidden' />
      </SheetTrigger>
      <SheetContent side='left' className='p-0'>
        <Sidebar apiLimit={apiLimit} />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
