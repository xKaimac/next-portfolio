import { Body, Code } from '../../styles/globals.styled';

export function CustomBody({ linkHref, linkText, text }) {
    return (
        <Body>
          {text}
          {linkHref && linkText && (
            <Code href={linkHref}>{linkText}</Code>
          )}
        </Body>
    );
}