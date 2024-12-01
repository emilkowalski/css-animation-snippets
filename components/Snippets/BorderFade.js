import { styled } from 'stitches.config.js';

const Component = () => {
  return <Wrapper>Hover over me</Wrapper>;
};

const Wrapper = styled('a', {
  paddingBottom: 1,
  color: '$white',
  position: 'relative',
  cursor: 'pointer',

  '&:before': {
    content: '',
    position: 'absolute',
    height: 1,
    width: '100%',
    left: 0,
    bottom: 0,
    opacity: 0,
    transform: 'translateY(3px)',
    background: '$white',
    transition: 'opacity 0.2s ease, transform 0.2s ease'
  },

  '&:hover:before': {
    opacity: '1',
    transform: 'translateY(0)'
  }
});

const tailwindStyling = `
.exampleClass {
  @apply text-[white] relative pb-px after:content-[''] after:absolute after:h-0.5 after:w-full after:opacity-0 after:translate-y-[3px] after:left-0 after:bottom-0 hover:after:opacity-100 hover:after:translate-y-0;
}
.exampleClass::after {
  background: white;
  transition: opacity 0.2s ease, transform 0.2s ease;
}
`

const cssStyling = `
.exampleClass {
    padding-bottom: 1px;
    color: white;
    position: relative;
}

.exampleClass::after {
    content: '';
    position: absolute;
    height: 2px;
    width: 100%;
    left: 0;
    bottom: 0;
    opacity: 0;
    transform: translateY(3px);
    background: white;
    transition: opacity 0.2s ease, transform 0.2s ease;
}

.exampleClass:hover::after {
    opacity: 1;
    transform: translateY(0);
}
`;

const scssStyling = `
.exampleClass {
    padding-bottom: 1px;
    color: white;
    position: relative;

	&:after {
		content: '';
		position: absolute;
		height: 2px;
		width: 100%;
		left: 0;
		bottom: 0;
		opacity: 0;
		transform: translateY(3px);
		background: white;
		transition: opacity 0.2s ease, transform 0.2s ease;
	}

	&:hover:after {
		opacity: 1;
		transform: translateY(0);
	}
}
`;

export { cssStyling, scssStyling,  tailwindStyling, Component };
