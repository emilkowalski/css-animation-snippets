import { styled } from 'stitches.config.js';

const Component = () => {
  return <Wrapper>Hover over me</Wrapper>;
};

const Wrapper = styled('a', {
  backgroundColor: '$white',
  padding: '12px 24px',
  color: '$black',
  borderRadius: 7,
  borderBottom: '4px solid hsl(241, 3%, 73%)',
  transition: 'all 0.1s ease-in-out',
  cursor: 'pointer',

  '&:hover': {
    borderBottomWidth: 0,
    borderTopWidth: 4
  }
});

const tailwindStyling = `
.exampleClass {
  @apply bg-[white] text-[black] transition-all duration-[0.1s] ease-[ease-in-out] px-6 py-3 rounded-md border-t-0 border-b-4 border-b-[hsl(241,3%,73%)] border-solid hover:border-t-4 hover:border-b-0;
}
`

const cssStyling = `
.exampleClass {
	background-color: white;
    padding: 12px 24px;
    color: black;
    border-radius: 6px;
    border-bottom: 4px solid hsl(241, 3%, 73%);
    border-top: 0px;
    transition: all 0.1s ease-in-out;
}

.exampleClass:hover {
	border-bottom-width: 0;
    border-top-width: 4px;
}
`;

const scssStyling = `
.exampleClass {
	background-color: white;
    padding: 12px 24px;
    color: black;
    border-radius: 6px;
    border-bottom: 4px solid hsl(241, 3%, 73%);
    border-top: 0px;
    transition: all 0.1s ease-in-out;

	&:hover {
		border-bottom-width: 0;
		border-top-width: 4px;
	}
}
`;

export { cssStyling, scssStyling,  tailwindStyling, Component };
