import * as React from 'react';

import {cn} from '@/lib/utils';

const Textarea = React.forwardRef<HTMLTextAreaElement, React.ComponentProps<'textarea'>>(
  ({className, ...props}, ref) => {
    return (
      <textarea
        className={cn(
          // Base styles
          'flex w-full rounded-md border border-input bg-background px-3 py-2 ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          
          // --- RESPONSIVE UPDATES ---
          
          // 1. Height: 120px on mobile (saves space for keyboard), 160px on desktop
          'min-h-[120px] md:min-h-[160px]',

          // 2. Font Size: 'text-base' (16px) on mobile prevents iOS auto-zoom. 
          // 'md:text-sm' gives a cleaner look on desktop.
          'text-base md:text-sm',
          
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = 'Textarea';

export {Textarea};