import getPerson from "../../utils/getPerson";
import Container from "../../components/Container";
import { TitleProvider } from "../../context/TitleContext";
import { ListGroup } from "react-bootstrap";
import { Card } from "react-bootstrap";

/**
 * 
 * @param {Array<object>} person 
 * @returns {JSX.Element}
 */
export default function Person({person}) {
      
    const { Item } = ListGroup;
    const { Img, Header, Body } = Card;

    return(
        <TitleProvider
            value="Description"
        >
            <Container>
                <Card
                    className="text-center align-self-center"
                >
                    <Header>
                        <Img
                            variant="top"
                            src={person.avatar}
                            style={{width: "12em", height: "12em", borderRadius: "75px"}}
                        />
                    </Header>
                    <Body>
                        <ListGroup
                            variant = "flush"
                        >   
                            <Item>
                                Name: {person.first_name}
                            </Item>
                            <Item>
                                Last name: {person.last_name}
                            </Item>
                            <Item>
                                Email: {person.email}
                            </Item>
                        </ListGroup>
                    </Body>
                </Card>
            </Container>
        </TitleProvider>
    )
}

export async function getServerSideProps(context){
    const { id } = context.query; 
    const person = await getPerson(id);
    return {
        props:{
            person
        }
    }
}
