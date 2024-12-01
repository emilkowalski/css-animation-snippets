import { styled, keyframes } from 'stitches.config.js';

const Component = () => {
  return (
    <Wrapper>
      <Gradient />
      <Button>Hover over me</Button>
    </Wrapper>
  );
};

const pulse = keyframes({
  '0%': {
    transform: 'rotate(0deg)',
    filter: 'blur(8px)',
    borderRadius: 5
  },
  '33%': {
    transform: 'rotate(-0.5deg) translate(1px,-1px) scale(1.01)',
    filter: 'blur(10px)',
    borderRadius: 3
  },
  '67%': {
    transform: 'rotate(1deg) translate(-1px,-1px) scale(0.99)',
    filter: 'blur(14px)',
    borderRadius: 7
  },
  '100%': {
    transform: 'rotate(0deg)',
    filter: 'blur(8px)',
    borderRadius: 5
  }
});

const Gradient = styled('div', {
  filter: 'blur(1px)',
  borderRadius: '8px',
  position: 'absolute',
  top: '0px',
  left: '0px',
  width: '100%',
  height: '100%',
  transition: 'opacity 1.5s ease',
  background: 'linear-gradient(91.83deg, rgb(208, 60, 74) 2.26%, rgb(172, 74, 218) 95.81%)',
  animation: `10s ease-in-out 0s infinite normal both running ${pulse}`,
  opacity: '0.75'
});

const Wrapper = styled('buton', {
  position: 'relative',
  padding: '1px',
  borderRadius: '$1',

  '&:hover': {
    [`& ${Gradient}`]: {
      transitionDuration: '0.25s',
      opacity: 1
    }
  }
});

const Button = styled('div', {
  padding: '12px 24px',
  backgroundColor: '$white',
  position: 'relative',
  color: '$black',
  borderRadius: '$1',
  cursor: 'pointer',
  transition: 'transform 250ms cubic-bezier(.2,.8,.4,1)'
});

const tailwindStyling = ` 
.exampleClass {
  @apply relative p-px;
  borderradius: 8px;
}
.exampleClass:hover div {
  @apply opacity-100;
  transitionduration: 0.25s;
}
.exmapleClass div {
  @apply blur-[1px] absolute w-full h-full transition-opacity duration-[1.5s] ease-[ease] animate-[10s_ease-in-out_0s_infinite_normal_both_running_pulse] opacity-75 left-0 top-0;
  borderradius: 8px;
  background: linear-gradient(
    91.83deg,
    rgb(208, 60, 74) 2.26%,
    rgb(172, 74, 218) 95.81%
  );
}
.exampleClass span {
  @apply relative text-[black] cursor-pointer transition-transform duration-[250ms] ease-[cubic-bezier(.2,0.8,0.4,1)] px-6 py-3;
  backgroundcolor: white;
  borderradius: 8px;
}
`

const cssStyling = `
.exampleClass {
	position: relative;
	padding: 1px;
	borderRadius: 8px;
}

.exampleClass:hover div {
	transitionDuration: 0.25s;
	opacity: 1;
}

.exmapleClass div {
	filter: blur(1px);
	borderRadius: 8px;
	position: absolute;
	top: 0px;
	left: 0px;
	width: 100%;
	height: 100%;
	transition: opacity 1.5s ease;
	background: linear-gradient(91.83deg, rgb(208, 60, 74) 2.26%, rgb(172, 74, 218) 95.81%);
	animation: 10s ease-in-out 0s infinite normal both running pulse;
	opacity: 0.75;
}

.exampleClass span {
	padding: 12px 24px;
	backgroundColor: white;
	position: relative;
	color: black;
	borderRadius: 8px;
	cursor: pointer;
	transition: transform 250ms cubic-bezier(.2,.8,.4,1);
}
`;

const scssStyling = `
.exampleClass {
	position: relative;
	padding: 1px;
	borderRadius: 8px;

	&:hover div {
		transitionDuration: 0.25s;
		opacity: 1;
	}

	div {
		filter: blur(1px);
		borderRadius: 8px;
		position: absolute;
		top: 0px;
		left: 0px;
		width: 100%;
		height: 100%;
		transition: opacity 1.5s ease;
		background: linear-gradient(91.83deg, rgb(208, 60, 74) 2.26%, rgb(172, 74, 218) 95.81%);
		animation: 10s ease-in-out 0s infinite normal both running pulse;
		opacity: 0.75;
	}

	span {
		padding: 12px 24px;
		backgroundColor: white;
		position: relative;
		color: black;
		borderRadius: 8px;
		cursor: pointer;
		transition: transform 250ms cubic-bezier(.2,.8,.4,1);
	}
}
`;

export { cssStyling, scssStyling,  tailwindStyling, Component };
