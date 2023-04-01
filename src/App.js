import './App.css';
// import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
<div className="App">
  <header className="App-header">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Krispy.</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
      </ul>
      <span class="navbar-text">
        
      </span>
    </div>
  </div>
</nav>


<form>
  <div class="form-group">
    <h4>Log In</h4>
    <label for="exampleInputEmail1">Email address</label>
    {/* <p for="exampleInputEmail1">Email address</p> */}
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="@ your Email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control1 form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  <button type="submit" class="btn btn-primary">Submit</button>
  </div>
  {/* <button type="submit" class="btn btn-primary">Submit</button> */}
</form>
  </header>
      
</div>
  );
}

export default App;
