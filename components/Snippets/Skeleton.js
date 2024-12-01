import { styled, keyframes } from 'stitches.config.js';

const Component = () => {
  return <Wrapper></Wrapper>;
};

const loading = keyframes({
  '0%': { backgroundPosition: '200% 0' },
  '100%': { backgroundPosition: '-200% 0' }
});

const Wrapper = styled('div', {
  width: 120,
  borderRadius: '$1',
  height: 44,
  backgroundImage:
    'linear-gradient(270deg, hsl(109, 0%, 12%), hsl(109, 0%, 20%), hsl(109, 0%, 20%), hsl(109, 0%, 12%))',
  backgroundSize: '400% 100%',
  animation: `${loading} 8s ease-in-out infinite`
});

const tailwindStyling = `
.exampleClass {
  @apply w-[120px] h-11 bg-[linear-gradient(270deg,hsl(109,0%,12%),hsl(109,0%,20%),hsl(109,0%,20%),hsl(109,0%,12%))] bg-[400%_100%] animate-[loading_8s_ease-in-out_infinite] rounded-md;
}
@keyframes loading {
  from {
    @apply bg-[200%_0];
  }
  to {
    @apply bg-[-200%_0];
  }
}
`

const cssStyling = `
.exampleClass {
	width: 120px;
	border-radius: 6px;
	height: 44px;
	background-image: linear-gradient(270deg, hsl(109, 0%, 12%), hsl(109, 0%, 20%), hsl(109, 0%, 20%), hsl(109, 0%, 12%));
	background-size: 400% 100%;
	animation: loading 8s ease-in-out infinite;
}

@keyframes loading {
	from {
		background-position: 200% 0;
	}
    to {
		background-position: -200% 0;
    }
}
`;

const scssStyling = `
.exampleClass {
	width: 120px;
	border-radius: 6px;
	height: 44px;
	background-image: linear-gradient(270deg, hsl(109, 0%, 12%), hsl(109, 0%, 20%), hsl(109, 0%, 20%), hsl(109, 0%, 12%));
	background-size: 400% 100%;
	animation: loading 8s ease-in-out infinite;
}

@keyframes loading {
	from {
		background-position: 200% 0;
	}
    to {
		background-position: -200% 0;
    }
}
`;

export { cssStyling, scssStyling,  tailwindStyling, Component };
