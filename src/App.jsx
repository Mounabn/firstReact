import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Name from "./Component/Name";
import Description from "./Component/Description";
import Image from "./Component/Image";
import Price from "./Component/Price";
import MyLogo from './assets/react.svg'
function App() {
  // let firstName;

  // if (!firstName){
  //   firstName = 'Mouna'
  // }

  const firstName = 'Mouna'
  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <Card style={{ width: "18rem" }}>
          <Image />
          <Card.Body>
            <Card.Title>
              <Name />
            </Card.Title>
            <Card.Text>
              <Description />
            </Card.Text>
            <Button variant="primary">
              <Price />
            </Button>

            {/* {firstName ? (
            <>
            <p> {`Hello,${firstName}`} </p>
            <img src={MyLogo} alt="mon image" />
            </>

            :

            <>
          
          </>
          )} */}

            {firstName ? (
              <>
                <p> {`Hello, ${firstName}`} </p>
                <img src={MyLogo} alt="mon image" />
              </>
            ) : (
              <>
              <p>Hello there !</p>
              </>
            )}
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default App;
