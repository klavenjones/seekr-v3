'use client';

import { useFormStatus } from 'react-dom';
import { Button, ButtonProps } from '@/components/ui/button';

export function SubmitButton({ children, pendingText, ...props }: ButtonProps) {
  const { pending, action } = useFormStatus();

  const isPending = pending && action === props.formAction;

  return (
    <Button type="submit" aria-disabled={pending} {...props}>
      {isPending ? pendingText : children}
    </Button>
  );
}
