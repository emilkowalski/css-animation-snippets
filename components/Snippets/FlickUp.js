import { styled } from 'stitches.config.js';

const Component = () => {
  return (
    <Wrapper>
      <span className="main-text">Hover over me</span>
      <span className="hover-text">Hover over me</span>
    </Wrapper>
  );
};

const Wrapper = styled('a', {
  color: '$white',
  cursor: 'pointer',
  overflow: 'hidden',
  display: 'block',
  position: 'relative',

  '.main-text': {
    display: 'block',
    transition: 'transform 500ms'
  },

  '.hover-text': {
    display: 'block',
    transform: 'translateY(100%)',
    transition: 'transform 500ms',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
  },

  '&:hover': {
    '.main-text': {
      transition: 'transform 250ms',
      transform: 'translateY(-100%)'
    },

    '.hover-text': {
      transition: 'transform 250ms',
      transform: 'translateY(0%)'
    }
  }
});

const tailwindStyling = `
.exampleBtn {
  @apply text-['white'] cursor-['pointer'];
  overflow: "hidden";
  display: "block";
  position: "relative";
}
.main-text {
  @apply block transition-transform duration-500;
}
.hover-text {
  @apply transition-transform duration-[250ms] translate-y-[0%] absolute w-full h-full left-0 top-0;
}
.exampleBtn:hover .main-text {
  @apply transition-transform duration-[250ms] -translate-y-full;
}
.exampleBtn:hover .hover-text {
  @apply transition-transform duration-[250ms] translate-y-[0%];
}
`


const cssStyling = `
.exampleBtn {
	color: 'white';
	cursor: 'pointer';
	overflow: 'hidden';
	display: 'block';
	position: 'relative';
}

.main-text {
	display: block;
	transition: transform 500ms;
}

.hover-text {
	transition: transform 250ms;
	transform: translateY(0%);
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}

.exampleBtn:hover .main-text {
	transition: transform 250ms;
	transform: translateY(-100%);
}

.exampleBtn:hover .hover-text {
	transition: transform 250ms;
	transform: translateY(0%);
}

`;

const scssStyling = `
.exampleBtn {
	color: 'white';
	cursor: 'pointer';
	overflow: 'hidden';
	display: 'block';
	position: 'relative';

	.main-text {
		display: block;
		transition: transform 500ms;
	}

	.hover-text {
		transition: transform 250ms;
		transform: translateY(0%);
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}

	&:hover {
		.main-text {
			transition: transform 250ms;
			transform: translateY(-100%);
		  }

		  .hover-text {
			transition: transform 250ms;
			transform: translateY(0%);
		  }
	}
}
`;

export { cssStyling, scssStyling,  tailwindStyling, Component };
