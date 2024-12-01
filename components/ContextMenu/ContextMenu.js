import { styled, keyframes } from 'stitches.config';
import { createToast } from 'vercel-toast';
import * as RadixContextMenu from '@radix-ui/react-context-menu';

const timeout = 3000;

const ContextMenu = ({ children, tailwindStyling, cssStyling, scssStyling }) => {
  const copyToClipboard = async (styling) => {
    try {
      await navigator.clipboard.writeText(styling);

      createToast('Copied styles to clipboard', {
        timeout,
        type: 'default'
      });
    } catch {
      createToast('Failed to copy', {
        timeout,
        type: 'error'
      });
    }
  };

  return (
    <RadixContextMenu.Root>
      <RadixContextMenu.Trigger>{children}</RadixContextMenu.Trigger>

      <Content>
        <Item onSelect={() => copyToClipboard(tailwindStyling)}>TailwindCSS</Item>
        <Item onSelect={() => copyToClipboard(cssStyling)}>CSS</Item>
        <Item onSelect={() => copyToClipboard(scssStyling)}>SCSS</Item>
      </Content>
    </RadixContextMenu.Root>
  );
};

export default ContextMenu;

const scaleIn = keyframes({
  '0%': { transform: 'scale(0.9)', opacity: 0 },
  '100%': { transform: 'scale(1)', opacity: 1 }
});

const scaleOut = keyframes({
  '0%': { transform: 'scale(1)', opacity: 1 },
  '100%': { transform: 'scale(0.9)', opacity: 0 }
});

const Content = styled(RadixContextMenu.Content, {
  minWidth: 160,
  backgroundColor: 'white',
  borderRadius: 6,
  padding: 5,
  boxShadow: '0px 5px 15px -5px hsla(206,22%,7%,.15)',
  transformOrigin: 'var(--radix-context-menu-content-transform-origin)',

  '&[data-state="open"]': {
    animation: `${scaleIn} 0.15s ease`
  },

  '&[data-state="closed"]': {
    animation: `${scaleOut} 0.1s ease`
  }
});

const Item = styled(RadixContextMenu.Item, {
  fontSize: 13,
  borderRadius: '4px',
  cursor: 'default',
  height: 28,
  padding: '4px 8px',
  display: 'flex',
  alignItems: 'center',
  color: '$gray',

  '&:focus': {
    outline: 'none',
    backgroundColor: 'hsl(207, 11%, 91%)',
    color: '$darkGray'
  }
});
