import { Container, Article } from '@/styles/globals.styled';

export function ArticleTemplate({ children }) {
    return (
        <Container>
            <Article>
                {children}
            </Article>
        </Container>
    )
}