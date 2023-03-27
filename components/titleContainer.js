import { Title } from './title';

export function TitleContainer(props) { 
    const name="Alistair Macvicar";
    const desc="Computer Science Student";
    return (
            <Title name={name} desc={desc}/>
    );
}
