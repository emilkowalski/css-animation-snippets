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
    transform: 'scaleX(0)',
    height: 1,
    top: '110%',
    left: 0,
    backgroundColor: '$white',
    transformOrigin: 'bottom right',
    transition: 'transform .4s cubic-bezier(.86,0,.07,1)'
  },

  '&:hover::after': {
    transform: 'scaleX(1)',
    transformOrigin: 'bottom left'
  }
});

const tailwindStyling = `
.exampleClass {
  @apply inline-block relative cursor-pointer after:content-[''] after:absolute after:w-full after:h-[1] after:transition-transform after:duration-[0.4s] after:ease-[cubic-bezier(.86,0,0.07,1)] after:scale-x-0 after:left-0 after:top-[110%] hover:after:origin-bottom-left hover:after:scale-x-100;
}
.exampleClass::after {
  backgroundcolor: white;
  transformorigin: bottom right;
}
`

const cssStyling = `
.exampleClass {
	display: inline-block;
	position: relative;
	cursor: pointer;
}

  .exampleClass::after {
	content: '';
	position: absolute;
	width: 100%;
	transform: scaleX(0);
	height: 1;
	top: 110%;
	left: 0;
	backgroundColor: white;
	transformOrigin: bottom right;
	transition: transform .4s cubic-bezier(.86,0,.07,1);
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
		content: '';
		position: absolute;
		width: 100%;
		transform: scaleX(0);
		height: 1;
		top: 110%;
		left: 0;
		backgroundColor: white;
		transformOrigin: bottom right;
		transition: transform .4s cubic-bezier(.86,0,.07,1);
	  }

	&:hover::after {
		transform: scaleX(1);
		transform-origin: bottom left;
	}
  }
`;

export { cssStyling, scssStyling,  tailwindStyling, Component };
