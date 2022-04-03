import { Card } from "react-bootstrap"
import Link from "next/link";

/**
 * 
 * @param {string} img 
 * @param {string} name
 * @param {number} id
 * @returns {JSX.Element} 
 */
const Person = ({img, name, id}) =>{
    
    const {Img, Text, Body, Header} = Card;

    return(
        <Link
            href={`/person/${id}`}
            passHref
        >
            <Card
                className="text-center m-5"
            >
                <Header>
                    <Img 
                        variant="top"
                        className="align-self-center" 
                        src={img}
                        style={{width:"6em", height: "6em", borderRadius:"75px"}}
                    />
                </Header>
                <Body>
                    <Text>
                        {name}
                    </Text>
                </Body>
            </Card>
        </Link>
    );
}

export default Person;