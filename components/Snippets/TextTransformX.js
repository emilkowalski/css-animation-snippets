import { styled } from 'stitches.config.js';

const Component = () => {
  return (
    <Wrapper>
      <span>Hover over me</span>
    </Wrapper>
  );
};

const Wrapper = styled('a', {
  color: '$white',
  cursor: 'pointer',

  span: {
    display: 'inline-block',
    transition: 'transform 0.2s ease, color 0.2s ease'
  },

  '&:hover span': {
    transform: 'translateX(4px)',
    color: 'hsl(244, 63%, 69%)'
  }
});

const tailwindStyling = `
.exampleClass {
  @apply text-[white];
}
span {
  @apply inline-block;
  transition: transform 0.2s ease, color 0.2s ease;
}
.exampleClass:hover span {
  @apply translate-x-1 text-[hsl(243,80%,62%)];
}
`

const cssStyling = `
.exampleClass {
	color: white;
}

span {
	display: inline-block;
	transition: transform 0.2s ease, color 0.2s ease;
}

.exampleClass:hover span {
	transform: translateX(4px);
	color: hsl(243, 80%, 62%);
}
`;

const scssStyling = `
.exampleClass {
	color: white;

	span {
		display: inline-block;
		transition: transform 0.2s ease, color 0.2s ease;
	}

	&:hover {
		transform: translateX(4px);
		color: hsl(243, 80%, 62%);
	}
}
`;

export { cssStyling, scssStyling,  tailwindStyling, Component };
