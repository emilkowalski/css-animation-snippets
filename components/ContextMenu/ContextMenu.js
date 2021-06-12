import { styled } from "stitches.config";
import { keyframes } from "@stitches/react";
import * as ContextMenu from "@radix-ui/react-context-menu";

export default ({ children }) => (
    <ContextMenu.Root>
        <ContextMenu.Trigger>{children}</ContextMenu.Trigger>
        <Content>
            <Item onSelect={() => console.log("cut")}>CSS</Item>
            <Item onSelect={() => console.log("cut")}>SCSS</Item>
            <Item onSelect={() => console.log("copy")}>Stitches</Item>
            <Item onSelect={() => console.log("paste")}>Styled Components</Item>
            <Separator />
            <Item onSelect={() => console.log("paste")}>JSX</Item>
            <Item onSelect={() => console.log("paste")}>HTML</Item>
        </Content>
    </ContextMenu.Root>
);

const reveal = keyframes({
    "0%": { transform: "scale(0.9)", opacity: 0 },
    "100%": { transform: "scale(1)", opacity: 1 },
});

const Content = styled(ContextMenu.Content, {
    minWidth: 160,
    backgroundColor: "white",
    borderRadius: 6,
    padding: 5,
    boxShadow: "0px 5px 15px -5px hsla(206,22%,7%,.15)",
    transformOrigin: "var(--radix-context-menu-content-transform-origin)",
    animation: `${reveal} 0.1s ease`,
});

const Separator = styled(ContextMenu.Separator, {
    height: 1,
    background: "hsl(208, 18%, 92%)",
    margin: 4,
});

const Wrapper = styled(ContextMenu.Root, {
    minWidth: 160,
    background: "$white",
    borderRadius: "$1",
    padding: 4,
});

const Item = styled(ContextMenu.Item, {
    fontSize: 13,
    padding: "5px 10px",
    borderRadius: "$1",
    cursor: "default",
    height: 28,
    padding: "4px 8px",
    color: "$gray",

    "&:focus": {
        outline: "none",
        backgroundColor: "hsl(207, 11%, 96%)",
        color: "$darkGray",
    },
});