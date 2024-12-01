import { styled } from 'stitches.config.js';

const Component = () => {
  return <Wrapper>Hover over me</Wrapper>;
};

const Wrapper = styled('a', {
  overflow: 'hidden',
  padding: '12px 24px',
  borderRadius: '$1',
  background: 'linear-gradient(to top, hsl(260deg 80% 40%), hsl(260deg 80% 50%))',
  color: '$white',
  transition: 'filter 600ms',
  cursor: 'pointer',

  '&:hover, &:focus': {
    transition: 'filter 250ms',
    filter: 'brightness(110%) hue-rotate(60deg)'
  }
});

const tailwindStyling = `
.exampleClass {
  @apply overflow-hidden bg-[white] text-[black] relative inline-block cursor-pointer px-6 py-3 rounded-[7px] before:content-[""] before:block before:absolute before:w-full before:h-full before:origin-[100%_100%] before:transition-transform before:duration-[0.6s] before:ease-[cubic-bezier(0.53,0.21,0,1)] before:scale-x-0 before:left-0 before:top-0 hover:before:origin-[0_0] hover:before:scale-x-100;
}
.exampleClass span {
  @apply relative transition-[color] duration-[0.6s] ease-[cubic-bezier(0.53,0.21,0,1)];
}
.exampleClass:before {
  background: hsl(244, 63%, 69%);
}
.exampleClass:hover span {
  @apply text-[white];
}
`

const cssStyling = `
.exampleClass {
	overflow: hidden;
    padding: 12px 24px;
    border-radius: 7px;
    background-color: white;
    color: black;
    position: relative;
    display: inline-block;
    cursor: pointer;
}

.exampleClass span {
	position: relative;
	transition: color 0.6s cubic-bezier(0.53, 0.21, 0, 1);
}

.exampleClass:before {
	content: "";
	display: block;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: hsl(244, 63%, 69%);
	transform: scaleX(0);
	transform-origin: 100% 100%;
	transition: transform 0.6s cubic-bezier(0.53, 0.21, 0, 1);
}

.exampleClass:hover::before {
	transform-origin: 0 0;
	transform: scaleX(1);
}

.exampleClass:hover span {
	color: white;
}
`;

const scssStyling = `
.exampleClass {
	overflow: hidden;
    padding: 12px 24px;
    border-radius: 7px;
    background-color: white;
    color: black;
    position: relative;
    display: inline-block;
    cursor: pointer;

	span {
		position: relative;
		transition: color 0.6s cubic-bezier(0.53, 0.21, 0, 1);
	}

	&:before {
		content: "";
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: hsl(244, 63%, 69%);
		transform: scaleX(0);
		transform-origin: 100% 100%;
		transition: transform 0.6s cubic-bezier(0.53, 0.21, 0, 1);
	}

	&:hover {
		&:before {
			transform-origin: 0 0;
			transform: scaleX(1);
		}

		span {
			color: white;
		}
	}
}
`;

export { cssStyling, scssStyling,  tailwindStyling, Component };
