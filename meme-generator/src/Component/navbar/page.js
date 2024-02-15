
export default function Navbar(){
    return <nav class="navbar bg-body-tertiary">
    <form class="container-fluid">
      <div class="input-group">
        <span class="input-group-text" id="basic-addon1">@</span>
        <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
        <button class="btn btn-outline-success me-2" type="button">Main button</button>
    <button class="btn btn-sm btn-outline-secondary" type="button">Smaller button</button>
      </div>
    </form>
  </nav>
}