import {Component} from 'react'
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/logo/Logo';
import FaceRecognition from './Components/faceRecognition/FaceRecognition'
import Rank from './Components/Rank/Rank'
import "tachyons"
import Signin from './Components/Signin/Signin';
import Register from './Components/Register/Register';
import ImageForm from './Components/imageForm/imageForm';


const USER_ID = 'kmpayngzw2cz';
    // Your PAT (Personal Access Token) can be found in the portal under Authentification
    const PAT = '8923c04a7411442289dbfe9aa2664e66';
    const APP_ID = '4ef002aeb66542188947555ffecc9c90';
    const MODEL_ID = ' people-detection-yolov5';
    const MODEL_VERSION_ID = 'a7ab2517c6e24364a479cd42d405e714';
    // Change this to whatever image URL you want to process
    
class App extends Component {
  constructor(){
    super()
    this.state = {
      Input: '',
      ImageUrl: '',
      route: 'signin',
      name: 'Daniel',
      entries: 0,
      isSignedIn: false,
      user: {
        id: '',
        name: '',
        email: '',
        password: '',
        entries: 0,
        joined: new Date(),
      },
    }
  }
  loadUser =(data) => {
       this.setState({
        user : {
          id: data.id,
          name: data.name,
          email: data.email,
          password: data.password,
          entries: 0,
          joined: new Date(),
        }
       })
  }
  buttonSubmit = () => {
    fetch('http://localhost:300/image', {
      method:'put',
      headers: {'Content-type' : 'application/json'},
      body: JSON.stringify({
        id: this.state.user.id,
      })
    })
    .then(resp => resp.json())
    .then(count => {
      this.setState({user:{
        entries:count
      }

      })
    })

     this.setState({ImageUrl : this.state.Input})
    const raw = JSON.stringify({
      "user_app_id": {
          "user_id": USER_ID,
          "app_id": APP_ID
      },
      "inputs": [
          {
              "data": {
                  "image": {
                      "url": ''
                  }
              }
          }
      ]
  });

  const requestOptions = {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Authorization': 'Key ' + PAT
      },
      body: raw
  };
  fetch("https://api.clarifai.com/v2/models/" + MODEL_ID + "/versions/" + MODEL_VERSION_ID + "/outputs", requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error))
    }
  onInputChange = (event) => {
    this.setState({Input: event.target.value})
  }
  onRouteChange = (route) => {
    if(route === 'signout') {
      this.setState({isSignedIn : false})
    }
    else if (route === "home")
    {
      this.setState({isSignedIn : true})
    }
    this.setState({route : route})
  }
  render () 
  {
    return (
      <div className='app'>

         <Navigation isSignedIn={this.state.isSignedIn} onRouteChange= {this.onRouteChange}/>
         {this.state.route === 'home' ? 
         <div>
          <Logo/>
          <Rank name = {this.state.name} entries ={this.state.user.entries}/>

        <ImageForm onInputChange ={this.onInputChange} 
        buttonSubmit= {this.buttonSubmit}/>
       <div className="center"> 
             <div className="center form shadow-5 pa3">
             <input onChange={this.onInputChange}
             className="f4 pa2 w-70 "
             type={'text'}
             />
             <button 
             className="w-30 bg-light-green f4 grow link pv2 ph3 pa3 dib" 
             onClick={this.buttonSubmit}>Detect me
             </button>
             </div>
             </div>
        <FaceRecognition ImageUrl={this.state.ImageUrl}/>

      </div>
         :
         (
             this.state.route === "signin" ?
            <Signin onRouteChange={this.onRouteChange}/> :
            <Register loadUser ={this.loadUser}  onInputChange={this.onInputChange} onRouteChange={this.onRouteChange}/>
         )
  
      }
      </div>
    )
  }
}

export default App