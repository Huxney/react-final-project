import { Switch, Route } from "react-router-dom";
import "./shared/general.css";
import Home from "./home";
import Trivia from "./trivia";
import Calculator from "./calculator";
import About from "./about";
import Login from "./login";
import Register from "./register";
import NotFound from "./not_found";

function Main() {
  return (
    <main className="content">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/trivia">
          <Trivia interactive={true} disappearAfter={null} onComplete={null} />
        </Route>
        <Route exact path="/calculator" component={Calculator} />
        <Route exact path="/about" component={About} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route path="*" component={NotFound} />
      </Switch>
    </main>
  );
}

export default Main;
