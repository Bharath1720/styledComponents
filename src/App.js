import {Heading, CustomButton} from './styledComponents'

import './App.css'

const App = () => (
  <>
    <h1 className="heading">Hello World</h1>
    <Heading>Bharath Boyapati</Heading>
    <CustomButton type="button" color="orange" bgColor="black">
      Click Here
    </CustomButton>
    <CustomButton type="button" color="red" bgColor="white">
      Outline
    </CustomButton>
  </>
)

export default App
