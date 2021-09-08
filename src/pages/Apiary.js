import Header from '../components/Header';
import NavBar from '../components/Navbar';
import ApiaryForm from './ApiaryForm';
import { Link } from 'react-router-dom';
import Image from '../images/beehive.svg';


function Apiary() {
  return (
    <div className="App">
      <NavBar />
      {/* <Header/> */}
      <p>This is Apiary Page</p>
      <Link to="/ApiaryForm" ><button
        type="button"
        class="btn btn-warning m-5"
      >Apiary Form</button>
      </Link>
      <button type="button" class="btn btn-warning m-5">Apiary Search</button>
      <button type="button" class="btn btn-warning m-5">Apiary Map</button>
     
      <div class="row m-2" >

        <div class="card m-2" style={{width: 18 + "rem"}}>
          <img src={Image}class="card-img-top bg-warning" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">Apiary-1</h5>
              <p class="card-text">Çatalca</p>
              <a href="#" class="btn btn-warning">Go To Apiary-1</a>
            </div>
        </div>
         
          <div class="card m-2" style={{width: 18 + "rem"}}>
            <img src={Image} class="card-img-top bg-light" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Apiary-2</h5>
                <p class="card-text">Şile</p>
                <a href="#" class="btn btn-outline-warning text-dark">Go To Apiary-2</a>
              </div>
          </div>
          <div class="card m-2" style={{width: 18 + "rem"}}>
            <img src={Image} class="card-img-top bg-danger" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Apiary-3</h5>
                <p class="card-text">Antalya</p>
                <a href="#" class="btn btn-danger">Go To Apiary-3</a>
              </div>
          </div>
          <div class="card m-2" style={{width: 18 + "rem"}}>
            <img src={Image} class="card-img-top bg-warning" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Apiary-4</h5>
                <p class="card-text">Yalova</p>
                <a href="#" class="btn btn-warning">Go To Apiary-4</a>
              </div>
          </div>
      </div>
    </div>
        );
}

        export default Apiary;