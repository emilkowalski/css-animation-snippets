import { styled } from 'stitches.config.js';

const Component = () => {
  return (
    <Wrapper>
      <span>Hover over me</span>
    </Wrapper>
  );
};

const Wrapper = styled('a', {
  padding: '12px 24px',
  backgroundColor: '$white',
  borderRadius: '$1',
  position: 'relative',
  overflow: 'hidden',
  cursor: 'pointer',

  span: {
    color: '$black',
    position: 'relative',
    transition: 'color 0.6s cubic-bezier(0.53, 0.21, 0, 1)'
  },

  '&:before': {
    content: '',
    position: 'absolute',
    top: '50%',
    left: 0,
    borderRadius: '$1',
    transform: 'translate(-100%, -50%)',
    width: '100%',
    height: '100%',
    backgroundColor: 'hsl(244, 63%, 69%)',
    transition: 'transform 0.6s cubic-bezier(0.53, 0.21, 0, 1)'
  },

  '&:hover': {
    '&:before': {
      transform: 'translate(0, -50%) scale(1.001)'
    },

    span: {
      color: '$white'
    }
  }
});

const tailwindStyling = `
.exampleClass {
  @apply bg-[white] relative overflow-hidden px-6 py-3 rounded-md before:content-[''] before:absolute before:-translate-x-full before:-translate-y-2/4 before:w-full before:h-full before:bg-[hsl(244,63%,69%)] before:transition-transform before:duration-[0.6s] before:ease-[cubic-bezier(0.53,0.21,0,1)] before:rounded-md before:left-0 before:top-2/4 hover:before:translate-x-0 hover:before:-translate-y-2/4;
}
.exampleClass span {
  @apply text-[black] relative z-[1] transition-[color] duration-[0.6s] ease-[cubic-bezier(0.53,0.21,0,1)];
}
.exampleClass:hover span {
  @apply text-[white];
}
`

const cssStyling = `
.exampleClass {
    padding: 12px 24px;
    background-color: white;
    border-radius: 6px;
    position: relative;
    overflow: hidden;
}

.exampleClass span {
    color: black;
    position: relative;
    z-index: 1;
    transition: color 0.6s cubic-bezier(0.53, 0.21, 0, 1);
}

.exampleClass::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    border-radius: 6px;
    transform: translate(-100%, -50%);
    width: 100%;
    height: 100%;
    background-color: hsl(244, 63%, 69%);
    transition: transform 0.6s cubic-bezier(0.53, 0.21, 0, 1);
}

.exampleClass:hover span {
    color: white;
}

.exampleClass:hover::before {
    transform: translate(0, -50%);
}
`;

const scssStyling = `
.exampleClass {
    padding: 12px 24px;
    background-color: white;
    border-radius: 6px;
    position: relative;
    overflow: hidden;
}

.exampleClass span {
    color: black;
    position: relative;
    z-index: 1;
    transition: color 0.6s cubic-bezier(0.53, 0.21, 0, 1);

	&::before {
		content: '';
		position: absolute;
		top: 50%;
		left: 0;
		border-radius: 6px;
		transform: translate(-100%, -50%);
		width: 100%;
		height: 100%;
		background-color: hsl(244, 63%, 69%);
		transition: transform 0.6s cubic-bezier(0.53, 0.21, 0, 1);
	}

	&:hover {
		span {
			color: white;
		}

		&:before {
			transform: translate(0, -50%);
		}
	}
}
`;

export { cssStyling, scssStyling,  tailwindStyling, Component };
