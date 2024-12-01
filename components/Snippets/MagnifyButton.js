import { styled } from 'stitches.config.js';

const Component = () => {
  return <Wrapper>Hover & hold me</Wrapper>;
};

const Wrapper = styled('a', {
  padding: '12px 24px',
  backgroundColor: '$white',
  color: '$black',
  borderRadius: '$1',
  cursor: 'pointer',
  transition: 'transform 250ms cubic-bezier(.2,.8,.4,1)',

  '&:hover': {
    transform: 'scale(1.10)'
  },

  '&:active': {
    transform: 'scale(0.9)'
  }
});

const tailwindStyling = `
.exampleClass {
  @apply text-[black] transition-transform duration-[250ms] ease-[cubic-bezier(.2,0.8,0.4,1)] px-6 py-3 hover:scale-[1.10] active:scale-90;
  backgroundcolor: white;
  borderradius: 7px;
}
`

const cssStyling = `
.exampleClass {
	padding: 12px 24px;
    backgroundColor: white;
    color: black;
    borderRadius: 7px;
    transition: transform 250ms cubic-bezier(.2,.8,.4,1);
  }

.exampleClass:hover {
	transform: scale(1.10);
  }

.exampleClass:active {
	transform: scale(0.9);
}
`;

const scssStyling = `
.exampleClass {
	padding: 12px 24px;
    backgroundColor: white;
    color: black;
    borderRadius: 7px;
    transition: transform 250ms cubic-bezier(.2,.8,.4,1);

	&:hover {
		transform: scale(1.10);
	},

	&:active {
		transform: scale(0.9);
	}
  }
`;

export { cssStyling, scssStyling,  tailwindStyling, Component };
