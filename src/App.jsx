import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBAr";

const App = () =>{
  return(
    <div>
      <NavBar className="bg-dark"/>
      <ItemListContainer greeting={"Sitio en mantenimiento!"}/>
    </div>
  )
};

export default App;
