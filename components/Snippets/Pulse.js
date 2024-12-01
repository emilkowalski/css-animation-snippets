import { styled, keyframes } from 'stitches.config.js';

const Component = () => {
  return <Wrapper>I&apos;m pulsing</Wrapper>;
};

const pulse = keyframes({
  '100%': { boxShadow: '0 0 0 30px rgba(255, 255, 255, 0)' }
});

const Wrapper = styled('a', {
  cursor: 'pointer',
  padding: '12px 24px',
  backgroundColor: '$white',
  color: '$black',
  borderRadius: 7,
  boxShadow: '0 0 0 0 rgba(255, 255, 255, 0.1)',
  animation: `${pulse} 1.5s infinite cubic-bezier(0.66, 0, 0, 1)`
});

const tailwindStyling = `
.exampleClass {
  @apply bg-[black] text-[white] shadow-[0_0_0_0_rgba(255,255,255,0.1)] animate-[pulse_1.75s_infinite_cubic-bezier(0.66,0,0,1)] px-6 py-3 rounded-[7px];
}
@keyframes pulse {
  to {
    @apply shadow-[0_0_0_20px_rgba(255,255,255,0)];
  }
}
`

const cssStyling = `
.exampleClass {
    padding: 12px 24px;
    background-color: black;
    color: white;
    border-radius: 7px;
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.1);
    animation: pulse 1.75s infinite cubic-bezier(0.66, 0, 0, 1);
}

@keyframes pulse {
    to {
        box-shadow: 0 0 0 20px rgba(255, 255, 255, 0);
    }
}
`;

const scssStyling = `
.exampleClass {
    padding: 12px 24px;
    background-color: black;
    color: white;
    border-radius: 7px;
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.1);
    animation: pulse 1.5s infinite cubic-bezier(0.66, 0, 0, 1);
}

@keyframes pulse {
    to {
        box-shadow: 0 0 0 30px rgba(255, 255, 255, 0);
    }
}
`;

export { cssStyling, scssStyling,  tailwindStyling, Component };
