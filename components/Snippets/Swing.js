import { styled, keyframes } from 'stitches.config.js';

const Component = () => {
  return <Wrapper>Hover over me</Wrapper>;
};

const swing = keyframes({
  '15%': { transform: 'translateX(5px)' },
  '30%': { transform: 'translateX(-5px)' },
  '50%': { transform: 'translateX(3px)' },
  '80%': { transform: 'translateX(2px)' },
  '100%': { transform: 'translateX(0)' }
});

const Wrapper = styled('a', {
  color: '$white',
  cursor: 'pointer',

  '&:hover': {
    animation: `${swing} 1s ease`,
    'animation-iteration-count': 1
  }
});

const tailwindStyling = `
.exampleClass {
  @apply text-[white] hover:animate-[swing_1s_ease];
}

.exampleClass:hover {
  animation-iteration-count: 1;
}
`

const cssStyling = `
.exampleClass {
	color: white;
}

.exampleClass:hover {
	animation: swing 1s ease;
	animation-iteration-count: 1;
}
`;

const scssStyling = `
.exampleClass {
	color: white;

	&:hover {
		animation: swing 1s ease;
		animation-iteration-count: 1;
	}
 }
`;

export { cssStyling, scssStyling,  tailwindStyling, Component };
