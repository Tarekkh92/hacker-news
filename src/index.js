import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import List from "./Components/List";
import 'bootstrap/dist/css/bootstrap.min.css';

const hist = createBrowserHistory();

ReactDOM.render(
    <Router history={hist}>
        <Switch>
            <Route path="/" component={List} />
            <Redirect
                to={{
                    pathname: "/",
                }}
            />
        </Switch>
    </Router>,
    document.getElementById("root")
);
