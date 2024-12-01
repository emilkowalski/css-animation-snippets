import { styled } from 'stitches.config.js';

const Component = () => {
  return <Wrapper>Hover over me</Wrapper>;
};

const Wrapper = styled('a', {
  padding: '12px 24px',
  color: '$black',
  transition: 'transform 0.15s',
  cursor: 'pointer',
  position: 'relative',
  zIndex: 1,

  '&:after': {
    content: '',
    backgroundColor: 'white',
    transition: 'transform 0.15s',
    borderRadius: 7,
    position: 'absolute',
    inset: 0,
    zIndex: '-1'
  },

  '&:hover:after': {
    transform: 'scale(1.1)'
  }
});

const tailwindStyling = `
.exampleClass {
  @apply text-[black] transition-transform duration-[0.15s] cursor-pointer relative z-[1] px-6 py-3 after:content-[''] after:bg-[white] after:transition-transform after:duration-[0.15s] after:absolute after:z-[-1] after:rounded-[7px] after:inset-0 hover:after:scale-110;
}
`

const cssStyling = `
.exampleClass {
	padding: 12px 24px;
	color: black;
	transition: transform 0.15s;
	cursor: pointer;
	position: relative;
	z-index: 1;
}

.exampleClass::after {
	content: '';
    background-color: white;
    transition: transform 0.15s;
    border-radius: 7px;
    position: absolute;
    inset: 0;
    z-index: -1;
}

.exampleClass:hover::after {
	transform: scale(1.1);
}
`;

const scssStyling = `
.exampleClass {
	padding: 12px 24px;
	color: black;
	transition: transform 0.15s;
	cursor: pointer;
	position: relative;
	z-index: 1;

	&:after {
		content: '';
		background-color: white;
		transition: transform 0.15s;
		border-radius: 7px;
		position: absolute;
		inset: 0;
		z-index: -1;
	}

	&:hover::after {
		transform: scale(1.1);
	}
}
`;

export { cssStyling, scssStyling,  tailwindStyling, Component };
