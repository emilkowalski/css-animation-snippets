import { styled } from 'stitches.config.js';

const Component = () => {
  return <Wrapper>Hover over me</Wrapper>;
};

const Wrapper = styled('a', {
  display: 'inline-block',
  position: 'relative',
  cursor: 'pointer',

  '&:after': {
    content: '',
    position: 'absolute',
    width: '100%',
    transform: 'scaleX(1)',
    height: 1,
    bottom: 0,
    left: 0,
    backgroundColor: '$white',
    transformOrigin: 'bottom left',
    transition: 'transform .4s cubic-bezier(.77,0,.175,1)'
  },

  '&:hover::after': {
    transform: 'scaleX(0)',
    transformOrigin: 'bottom right'
  }
});

const tailwindStyling = `
.exampleClass {
  @apply inline-block relative text-[white] after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-[white] after:origin-bottom-right after:transition-transform after:duration-[0.4s] after:ease-[cubic-bezier(0.86,0,0.07,1)] after:scale-x-0 after:left-0 after:bottom-0 hover:after:origin-bottom-left hover:after:scale-x-100;
}
`

const cssStyling = `
.exampleClass {
    display: inline-block;
    position: relative;
    color: white;
  }

  .exampleClass::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: white;
    transform-origin: bottom right;
    transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
  }

  .exampleClass:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

const scssStyling = `
.exampleClass {
    display: inline-block;
    position: relative;
    color: white;

	&:after {
		content: '';
		position: absolute;
		width: 100%;
		transform: scaleX(0);
		height: 2px;
		bottom: 0;
		left: 0;
		background-color: white;
		transform-origin: bottom right;
		transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
	  }

	&:hover::after {
		transform: scaleX(1);
		transform-origin: bottom left;
	}
  }
`;

export { cssStyling, scssStyling,  tailwindStyling, Component };
