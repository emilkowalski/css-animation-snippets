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
  color: '$black',
  position: 'relative',
  borderRadius: '$1',
  overflow: 'hidden',
  cursor: 'pointer',

  span: {
    position: 'relative'
  },

  '&:before': {
    content: '',
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '140px',
    height: '140px',
    borderRadius: '50%',
    transform: 'translate3d(-50%,-50%,0) scale3d(0,0,0)',
    transition: 'opacity .4s cubic-bezier(.19,1,.22,1),transform .75s cubic-bezier(.19,1,.22,1)',
    backgroundColor: 'hsl(244, 63%, 69%)',
    opacity: 0
  },

  '&:hover': {
    '&:before': {
      opacity: 1,
      transitionDuration: '.85s',
      transform: 'translate3d(-50%,-50%,0) scale3d(1.2,1.2,1.2)'
    },

    span: {
      color: '$white'
    }
  }
});

const tailwindStyling = `
.exampleBtn {
  @apply bg-[hsl(222,100%,95%)] text-[hsl(243,80%,62%)] relative overflow-hidden z-[1] px-6 py-3 rounded-md before:content-[''] before:absolute before:w-[140px] before:h-[140px] before:bg-[hsl(243,80%,62%)] before:opacity-0 before:rounded-[50%] before:left-2/4 before:top-2/4 hover:before:opacity-100 hover:before:duration-[0.85s];
}
.exampleBtn span {
  @apply z-[1] relative;
}
.exampleBtn::before {
  transform: translate3d(-50%, -50%, 0) scale3d(0, 0, 0);
  transition: opacity 0.4s cubic-bezier(0.19, 1, 0.22, 1),
    transform 0.75s cubic-bezier(0.19, 1, 0.22, 1);
}
.exampleBtn:hover span {
  @apply text-[hsl(222,100%,95%)];
}
.exampleBtn:hover::before {
  transform: translate3d(-50%, -50%, 0) scale3d(1.2, 1.2, 1.2);
}
`

const cssStyling = `
.exampleBtn {
    padding: 12px 24px;
    background-color: hsl(222, 100%, 95%);
    color: hsl(243, 80%, 62%);
    position: relative;
    border-radius: 6px;
    overflow: hidden;
    z-index: 1;
}

.exampleBtn span {
    z-index: 1;
    position: relative;
}

.exampleBtn::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 140px;
    height: 140px;
    border-radius: 50%;
    transform: translate3d(-50%,-50%,0) scale3d(0,0,0);
    transition: opacity .4s cubic-bezier(.19,1,.22,1),transform .75s cubic-bezier(.19,1,.22,1);
    background-color: hsl(243, 80%, 62%);
    opacity: 0;
}

.exampleBtn:hover span {
    color: hsl(222, 100%, 95%);
}

.exampleBtn:hover::before {
    opacity: 1;
    transition-duration: .85s;
    transform: translate3d(-50%,-50%,0) scale3d(1.2,1.2,1.2);
}
`;

const scssStyling = `
.exampleBtn {
    padding: 12px 24px;
    background-color: hsl(222, 100%, 95%);
    color: hsl(243, 80%, 62%);
    position: relative;
    border-radius: 6px;
    overflow: hidden;
    z-index: 1;

	span {
		z-index: 1;
		position: relative;
	}

	&:before {
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		width: 140px;
		height: 140px;
		border-radius: 50%;
		transform: translate3d(-50%,-50%,0) scale3d(0,0,0);
		transition: opacity .4s cubic-bezier(.19,1,.22,1),transform .75s cubic-bezier(.19,1,.22,1);
		background-color: hsl(243, 80%, 62%);
		opacity: 0;
	}

	&:hover {
		span {
			color: hsl(222, 100%, 95%);
		}

		&:before {
			opacity: 1;
			transition-duration: .85s;
			transform: translate3d(-50%,-50%,0) scale3d(1.2,1.2,1.2);
		}
	}
}
`;

export { cssStyling, scssStyling,  tailwindStyling, Component };
