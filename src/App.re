
type page =
  | Home
  | Users
  | Todos
  | Channels
  | About
  | NotFound;

module Config = {
  type route = page;
  let toRoute = (url: ReasonReact.Router.url) =>
    switch (url.path) {
    | []        => Home
    | ["users"] => Users
    | ["todos"] => Todos
    | ["channels"] => Channels
    | ["about"] => About
    | _         => NotFound
    };
  let toUrl = route =>
    switch (route) {
    | Home  => "/"
    | Users => "/users"
    | Todos => "/todos"
    | Channels => "/channels"
    | About => "/about"
    | _     => "/not_found"
    };
};

module Router = CreateRouter.Make(Config);

let str = ReasonReact.string;

let component = ReasonReact.statelessComponent("App");

let make = _children => {
  ...component,

  /* didMount: _self => {

    /* TESTING LOCAL STORAGE */

    Js.log("Mounted!");
    AuthService.saveToken("koko");
    let koko = AuthService.loadToken();
    Js.log(koko);
    
    Js.log(AuthService.isLoggedIn());

    AuthService.removeToken();
    let koko = AuthService.loadToken();
    
    Js.log(koko);

    Js.log(AuthService.isLoggedIn()); 
    

    /* END TESTING LOCAL STORAGE */

  }, */

  render: _self => {
    <div>
      <header>
        <nav role="navigation">
          <ul>
            <li><Link href=(Config.toUrl(Home)) label=(() => str("Home")) /></li>
            <li><Link href=(Config.toUrl(Users)) label=(() => str("Users")) /></li>
            <li><Link href=(Config.toUrl(Todos)) label=(() => str("Todos")) /></li>
            <li><Link href=(Config.toUrl(Channels)) label=(() => str("Channels")) /></li>
            <li><Link href=(Config.toUrl(About)) label=(() => str("About")) /></li>
          </ul>
        </nav>
      </header>
      <main role="main" className="container">
        <Router 
          render=(({route}) => 
            switch route {
            | Home => <Home />
            | Users => <Users />
            | Todos => <Todos />
            | Channels => <Channels />
            | About => <About />
            | NotFound => <NotFound />
            }
          )
        />
      </main>
    </div>
  },
};
