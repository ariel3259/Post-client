import { TitleProvider } from "../context/TitleContext";
import Container from "../components/Container";
import Person from "../components/Person";
import { useState} from "react";
import { Button } from "react-bootstrap";
import getPeople from "../utils/getPeople";

/**
 * 
 * @param {Array<object>} data 
 * @returns 
 */
export default function Home({ data }) {

  const [people, setPeople] = useState(data);

  const [pagination, setPagination] = useState(1);

  const onChangePagination = async (event) => {
    if(event.target.value === "decrement"){
      setPagination(1);
      const peopleToChange = await getPeople(pagination);
      setPeople(peopleToChange);
      return;
    }
    setPagination(2);
    const peopleToChange = await getPeople(pagination);
    setPeople(peopleToChange);
  }


  const listPeople = people?.map((person) => (
    <Person 
      key={person.id}
      img={person.avatar}
      name={`${person.first_name} ${person.last_name}`}
      id={person.id}
    />
  ));  
  
  return (
    <TitleProvider
      value = "Welcome"
    >
      <Container>
        <p>
          Page: {pagination}
        </p>
        <div 
          className="container p-4"
        >
          {listPeople}
        </div>
        <div className="btn-group">
          <Button
            variant="primary"
            onClick={onChangePagination}
            value="increment"
          >
            Next Page
          </Button>
          
          <Button
            variant="secondary"
            onClick={onChangePagination}
            value="decrement"
          >
            Previus page
          </Button>
        </div>
      </Container>
    </TitleProvider>
  )
}

export async function getServerSideProps(context){
  const data = await getPeople(1);
  return {
    props: {
      data
    }
  };
}